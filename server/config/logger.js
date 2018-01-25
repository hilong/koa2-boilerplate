/**
 * @description logger setup
 * @author hilong.github.io
 */
const fs = require('fs');
const accessLogStream = fs.createWriteStream(__dirname+'./logger/access.log',{ flags: 'a' });
module.exports = accessLogStream;