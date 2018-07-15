var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');

// routes setting
var routes = require('./routes/index');
var dashboard = require('./routes/dashboard');
var trigger = require('./routes/trigger');
var setting = require('./routes/setting');
var account = require('./routes/account');
var login = require('./routes/login');
var signup = require('./routes/signup');

// create app through express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes setting
app.use('/', routes);
app.use('/dashboard', dashboard);
app.use('/trigger', trigger);
app.use('/setting', setting);
app.use('/account', account);
app.use('/login', login);
app.use('/signup', signup);

// catch 404 error
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render error page
//     res.status(err.status || 500);
//     res.render('error');
// });

module.exports = app;
