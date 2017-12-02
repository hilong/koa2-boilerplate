class Student {
    constructor(){}
    async loginAction(ctx, next){
        let formdata = ctx.request.body;
        let errorMsg = '';
        const userObj = {
           username:'',
           passsword:''
        }
        try {
            if(formdata.username){

            }
        } catch( error ){

        }
        return ctx.response.body= {
            status:'ok',
            msg:'login action ok'
        }
    }
    async logoutAction(ctx, next){
        return ctx.response.body = {
            status:'ok',
            msg:'logout action ok'
        }
    }
    async registerAction(ctx, next){
        return ctx.response.body = {
            status:'ok',
            msg:'logout action ok'
        }
    }
    async getStudent(ctx, next){
        return ctx.response.body = {
            status:'ok',
            msg:'getUser ok'
        }
    }

    async getStudentById(ctx, next){
        return ctx.response.body = {
            status:'ok',
            msg:'getUsers ok'
        }
    }
};

module.exports = new Student();