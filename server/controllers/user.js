const UserModel =require('../models/user');

class User {
    constructor(){}
    //POST
    async loginAction(ctx, next){
        let formdata = ctx.request.body;
        let errorMsg = '';
        const userObj = {
           username: formdata.username,
           passsword: formdata.passsword
        }
        
        // We are sending the profile inside the token
        var token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });

        return ctx.response.body= {
            status: 'ok',
            token: token
        }
    }
    //GET
    async logoutAction(ctx, next){
        let query = ctx.request.query;
        
        return ctx.response.body = {
            status:'ok',
            query:query
        }
    }
    //Type:POST
    async registerAction(ctx, next){
        let formdata = ctx.request.body;
        return ctx.response.body = {
            status:'ok',
            data:formdata
        }
    }
    async getUser(ctx, next){
        return ctx.response.body = {
            status:'ok',
            msg:'getUser ok'
        }
    }

    async getUsers(ctx, next){
        return ctx.response.body = {
            status:'ok',
            msg:'getUsers ok'
        }
    }
};

module.exports = new User();