var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var loginRouter = require('./routes/ant-back/login');
var zhuceRouter = require('./routes/ant-back/zhuce');
var indexRouter = require('./routes/ant-back/index1');
var usersRouter = require('./routes/ant-back/users');
var userRouter = require('./routes/ant-back/user');
var articleRouter = require('./routes/ant-back/article');
var ideaRouter = require('./routes/ant-back/idea');
var messageRouter = require('./routes/ant-back/message');
var lostRouter = require('./routes/ant-back/lost');
var goodsRouter = require('./routes/ant-back/goods');
var goodstypeRouter = require('./routes/ant-back/goods-type');
var parttimeRouter = require('./routes/ant-back/part-time');
var exp = require('./routes/ant-back/express');
var useradd = require('./routes/ant-back/user-add');
var articleadd = require('./routes/ant-back/article-add');
var ideaadd= require('./routes/ant-back/idea-add');
var messageadd= require('./routes/ant-back/message-add');
var lostadd= require('./routes/ant-back/lost-add');
var goodsadd= require('./routes/ant-back/goods-add');
var goodstypeadd= require('./routes/ant-back/goods-type-add');
var parttimeadd= require('./routes/ant-back/part-time-add');
var expressadd= require('./routes/ant-back/express-add');
//var userbefore = require('./routes/ant/user.js');
var feedRouter = require('./routes/ant/feedback.js');
var issueRouter = require('./routes/ant/issue.js');
var foundRouter = require('./routes/ant/found.js');
var deliveryRouter = require('./routes/ant/delivery.js');
var partime_jobRouter = require('./routes/ant/partime_job.js');
var commodityRouter = require('./routes/ant/commodity.js');
var chatRouter = require('./routes/ant/chat.js');
var beforeuserRouter = require('./routes/ant/beforeuser.js');
var twofoundRouter = require('./routes/ant/twofound.js');
var twoissuesRouter = require('./routes/ant/twoissues.js');
var twojobRouter = require('./routes/ant/twojob.js');
var twocommodityRouter = require('./routes/ant/twocommodity.js');
var twodeliveryRouter = require('./routes/ant/twodelivery.js');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/login',loginRouter);
app.use('/zhuce',zhuceRouter);
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
//app.use('/before/user',userbefore);
app.use('/before/issue',issueRouter);
app.use('/before/found',foundRouter);
app.use('/before/delivery',deliveryRouter);
app.use('/before/partime_job',partime_jobRouter);
app.use('/before/commodity',commodityRouter);
app.use('/before/chat',chatRouter);
app.use('/before/user',beforeuserRouter);
app.use('/before/twofound',twofoundRouter);
app.use('/before/twoissues',twoissuesRouter);
app.use('/before/twojob',twojobRouter);
app.use('/before/twocommodity',twocommodityRouter);
app.use('/before/twodelivery',twodeliveryRouter);
app.use('/before/feedback',feedRouter);


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
