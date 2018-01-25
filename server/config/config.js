/**
 * @description Config
 * @author hilong.github.io
 */
const config = {
    APP_Port: 3000,
    APP_Name: 'koa-study',
    APP_Keys: [''],
    APP_Static_Url: '/p/',
    APP_Static_Path: 'client',
    JWT_Secret: 'shared-secret',
    JWT_Unless: [
        /^\/p\/*/,
        '/api/login',
        '/api/register',
        '/api/guestbook',
        '/api/guestbook/*'
    ]

}
module.exports = config;

