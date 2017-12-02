//const UserModel =require('../models/user');

class User {
    constructor(){}
    async loginAction(ctx, next){
        let formdata = ctx.request.body;
        let errorMsg = '';
        const userObj = {
           username:'',
           passsword:''
        }
        return ctx.response.body= {
            status:'ok',
            username: formdata.username,
            password: formdata.password
            
        }
    }
    //Type:GET
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