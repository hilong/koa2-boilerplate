/**
 * @description 问卷调查
 * @author hilong.github.io
 */
var mongoose = require('../config/db');
var Schema = mongoose.Schema;

var QuestionnaireSchema = new Schema({
    toStudentId: String, // 所属于学生ID
    fromStudentId: String, // 来自于学生ID
    fromStudentName: String,// 来自于学生name
    subject: String, // 留言主题
    createDate:{ type: Date, default: Date.now }, // 创建时间
    content: String, // 留言内容
});

var Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema, 'questionnaire');

module.exports = Questionnaire;



var map = {
    _id:'',
	subject: '', // 所属问卷调查
	status:'', // 开放 opened、关闭 closed
	type: '', // 默认 single,multi
	title:'', // 题目标题
	items:[{
        title:'',
        value:''
    },{
        title:'',
        value:''
    }], // 题目选项
}