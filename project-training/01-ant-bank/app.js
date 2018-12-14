var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index1');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var articleRouter = require('./routes/article');
var ideaRouter = require('./routes/idea');
var messageRouter = require('./routes/message');
var lostRouter = require('./routes/lost');
var goodsRouter = require('./routes/goods');
var goodstypeRouter = require('./routes/goods-type');
var parttimeRouter = require('./routes/part-time');
var exp = require('./routes/express');
var useradd = require('./routes/user-add');
var articleadd = require('./routes/article-add');
var ideaadd= require('./routes/idea-add');
var messageadd= require('./routes/message-add');
var lostadd= require('./routes/lost-add');
var goodsadd= require('./routes/goods-add');
var goodstypeadd= require('./routes/goods-type-add');
var parttimeadd= require('./routes/part-time-add');
var expressadd= require('./routes/express-add');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index1', indexRouter);
app.use('/users', usersRouter);
app.use('/user',userRouter);
app.use('/aticle',articleRouter);
app.use('/idea',ideaRouter);
app.use('/message',messageRouter);
app.use('/lost',lostRouter);
app.use('/goods',goodsRouter);
app.use('/goods-type',goodstypeRouter);
app.use('/part-time',parttimeRouter);
app.use('/express',exp);
app.use('/user-add',useradd);
app.use('/article-add',articleadd);
app.use('/idea-add',ideaadd);
app.use('/message-add',messageadd);
app.use('/lost-add',lostadd);
app.use('/goods-add',goodsadd);
app.use('/goods-type-add',goodstypeadd);
app.use('/part-time-add',parttimeadd);
app.use('/express-add',expressadd);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res/*, next*/) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
