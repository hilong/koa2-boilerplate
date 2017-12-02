/**
 *	数据库链接配置
 **/
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test',{
    useMongoClient: true
});
module.exports = mongoose;
