const GuestbookModel =require('../models/guestbook');
class Welcome {
    constructor(){}
    async welcome(ctx, next){
        return ctx.response.body = {
            errorCode:'000000',
            errorType:'',
            errorMessage:'/api/welcome 返回错误消息Demo'
        }
    }

    async sessionTest(ctx, next){

        let n = ctx.session.views || 0;
        ctx.session.views = ++n;
        ctx.body = n + ' views';

    }
}

module.exports = new Welcome();