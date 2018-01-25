/**
 * @description User Model
 * @author hilong.github.io
 */
const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String, // 账户
    password: String, // 密码
    role: { type: String, default:'user' }, // 角色admin=手动初始化管理员,manager=管理员添加,user=注册添加
    status: { type: String, default:'active' },//active,closed
});

const User = mongoose.model('User', UserSchema, 'user');

module.exports = User;