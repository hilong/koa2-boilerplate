const GuestbookModel = require('../models/guestbook');
const _ = require('lodash');

class Guestbook {
    constructor() {}
    //GET
    async findByParams(ctx, next){
        try {
            let params = ctx.query;
            const guestbook = await GuestbookModel.find(params).exec();
            ctx.response.body = guestbook;
        } catch (err) {
            ctx.response.body = {
                errorCode: '000000',
                errorType: 'ERROR_DATA',
                errorMessage: '获取Guestbook失败'
            };
        }
    }
    //POST
    async create(ctx, next){
        /**
         * 备注：对于mongoose里model的static方式插入文档时，定义的字段除了默认的必须传入，
         * 所以使用lodash的_.defaults,_.defaultsDeep来补充
         * */
        const supplyment = {
            toStudentId: '',
            fromStudentId: '',
            fromStudentName: '',
            subject: '',
            content: '',
        };
        let errorMessage = '';
        try {
            let body = _.defaults(ctx.request.body, supplyment);
            let keys =[];
            _.forIn(body,function(value,key){
                if(value==''){
                    keys.push(key);
                }
            });
            if(keys.length){
                ctx.response.body = {
                    errorCode: '000001',
                    errorType: 'ParamsValidatorError',
                    errorMessage: keys.toString()+'入参不能为空！'
                }
                return false;
            }
            let guestbook = new GuestbookModel(body);
            let result = await guestbook.save();

            ctx.response.body = result;

        } catch (err) {

            ctx.response.body = {
                errorCode: '000000',
                errorType: 'ERROR_DATA',
                errorMessage: err
            };

        }
    }
    //GET
    async deleteById(ctx, next){
        let id = ctx.query.id;
        
    }
}
module.exports = new Guestbook();