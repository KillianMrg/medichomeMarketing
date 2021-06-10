const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors         = require('cors');
const Instagram = require('passport-instagram');
const passport = require('passport');
const indexRouter = require('./routes/index');
const mongodb     = require('./db/mongo');
mongodb.initClientDbConnection();
const app = express();

const InstagramStrategy = Instagram.Strategy;

app.use(cors({
    exposedHeaders: ['Authorization'],
    origin: '*'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user, done) => {
  done(null, user)
})

app.use('/', indexRouter);

app.use(function(req, res, next) {
    res.status(404).json({name: 'API', version: '1.0', status: 404, message: 'not_found'});
});

module.exports = app;
