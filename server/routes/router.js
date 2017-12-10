/**
 * API: Restful API routes
 */
const KmTrieRouter   = require('koa-trie-router');
const routes         = new KmTrieRouter();

// Controller
const User = require('../controllers/user');
const Welcome = require('../controllers/welcome');
const Guestbook = require('../controllers/guestbook');

//const { User, Welcome, Guestbook } = require('../controllers/index');

routes
    .get ('/api'           , Welcome.welcome)
    .get ('/api/sessionTest',Welcome.sessionTest)
    .get ('/api/logout'    , User.logoutAction)
    .post('/api/login'     , User.loginAction)
    .post('/api/register'  , User.registerAction)
    .get ('/api/getUser'   , User.getUser)
    .get ('/api/getUsers'  , User.getUsers)
    .get ('/api/guestbook' , Guestbook.findByParams)
    .post('/api/guestbook',Guestbook.create)
    .post('/api/guestbook/:id',Guestbook.updateById)
    .delete('/api/guestbook/:id',Guestbook.deleteById)
    ;

routes.get('/api/error', (ctx, next) => {
    // Example showing error throwing
    throw new Error('Hurr durr!');
});

routes.get('/api/nullerror', (ctx, next) => {
    // Example showing error throwing
    throw null;
});

module.exports = routes