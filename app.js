'use strict';
const helmet = require('koa-helmet');
const Koa = require('koa');
const app = module.exports = new Koa();

app.use(require('koa-response-time')());
app.use(require('koa-favicon')(require.resolve('./client/favicon.ico')));
app.use(require('koa-conditional-get')());
app.use(require('koa-etag')());
app.use(require('koa-morgan')('combined'));

app.use(require('koa-compress')({
    flush: require('zlib').Z_SYNC_FLUSH
}));
app.keys = ['some secret hurr'];

app.use(require('koa-session')({
    maxAge: 24 * 60 * 60 * 1000 // One Day
}, app));

app.use(require('koa-bodyparser')({
    // BodyParser options here
}));

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

const TrieRouter = require('koa-trie-router');

const router = new TrieRouter();

router.get('/', (ctx, next) => {
    ctx.status = 200;
    const script = '<script>alert("hi")</script>';
    ctx.body = 'root work'
});

router.get('/api/example', async (ctx, next) => {
    ctx.response.body = "Simple Async 3-second Delayed Example!";
});

router.get('/api/error', (ctx, next) => {
    // Example showing error throwing
    throw new Error('Hurr durr!');
});

router.get('/api/nullerror', (ctx, next) => {
    // Example showing error throwing
    throw null;
});

// ejs example
const render = require('koa-ejs');
const path = require('path');

render(app, {
    root: path.join(__dirname, 'server/views'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: true
});

// ejs render
router.get('/myip', async (ctx, next) => {
    ctx.state.ip = ctx.ip;
    await ctx.render('myip');
});

const mount = require('koa-mount');
async function hello(ctx, next){
    await next();
    ctx.body = 'Hello';
}
async function world(ctx, next){
    await next();
    ctx.body = 'World';
}
app.use(mount('/hello', hello));
app.use(mount('/world', world));

app.use(router.middleware());
app.use(mount('/public', require('koa-static')('client')));
