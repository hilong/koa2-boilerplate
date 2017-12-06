/**
 * @description Student Model
 * @author hilong.github.io
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: String, // 姓名
    sex: String, // 性别
    class: String, // 班级
    birthday: String, // 生日
    motto: String, // 座右铭
    phone: String, // 联系方式
    linkman: String, // 联系人
    role: { type: String, default:'student'}, // 角色
    status: { type: String, default: "1" }, // 学生状态1=在校，2=毕业，3=关闭
    header: { type: String, default: 'demo_header.png' }, // 学生头像
    discription: String, // 自我描述
    hobbies: String, // 爱好
    website: String, // 站内自定义主页url,目前使用html
    rate: { type: String, default:'0'}, // 学习评级 0-5
    start: { type: Date, default: Date.now },// 开始时间
    end: { type: Date, default: Date.now },// 结束时间
    isComment:{ type: Boolean, default: true }, //是否可评论
    isAnonymous:{ type: Boolean, default: false },// 是否匿名访问
});

var Student = mongoose.model('Student', StudentSchema, 'student');

module.exports = Student;
