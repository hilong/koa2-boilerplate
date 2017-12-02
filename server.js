'use strict';

const Koa = require('koa');
const app = module.exports = new Koa();

app.use( require('koa-response-time')() );
//app.use( require('koa-favicon')( require.resolve('./client/favicon.ico')) );
//app.use( require('koa-conditional-get')() );
//app.use( require('koa-etag')() );
app.use( require('koa-morgan')('combined') );
//app.use( require('koa-helmet')() );
app.use( require('koa-compress')({flush: require('zlib').Z_SYNC_FLUSH}) );
app.keys = ['hello world'];
app.use( require('koa-session')({maxAge: 24 * 60 * 60 * 1000}, app) );
app.use( require('koa-bodyparser')({}) );
class NullOrUndefinedError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
        if (!this.message) {
            this.message = 'Null or undefined error';
        }
    }
};

(function () {
    // Example error handler to JSON stringify errors

    let errorCount = 0; // closure to keep this variable private

    app.use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            if (err == null) {
                err = new NullOrUndefinedError();
            }
            // some errors will have .status
            // however this is not a guarantee
            ctx.status = err.status || 500;
            ctx.type = 'application/json';
            ctx.body = JSON.stringify({
                errors: [{
                    id: errorCount++,
                    status: ctx.status,
                    title: err.message,
                    detail: err.stack
                }]
            })

            // since we handled this manually we'll
            // want to delegate to the regular app
            // level error handling as well so that
            // centralized still functions correctly.
            ctx.app.emit('error', err, this);
        }
    })
})();
//使用koa-mount
const KmMount = require('koa-mount');
async function hello(ctx, next){
    await next();
    ctx.body = 'Hello';
}
async function world(ctx, next){
    await next();
    ctx.body = 'World';
}
app.use(KmMount('/hello', hello));
app.use(KmMount('/world', world));

//导入路由信息
const routes = require('./server/routes/router');
app.use(routes.middleware())

//设置静态资源文件夹client为根目录
app.use(KmMount('/', require('koa-static')('client')));

//设置服务启动端口
app.listen(3000);