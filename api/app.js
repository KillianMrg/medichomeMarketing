const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors         = require('cors');
const app = express();
const mongodb     = require('./db/mongo');
const indexRouter = require('./routes/index')

mongodb.initClientDbConnection();

app.use(cors({
    exposedHeaders: ['Authorization'],
    origin: '*'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);

app.use(function(req, res, next) {
    res.status(404).json({name: 'API', version: '1.0', status: 404, message: 'not_found'});
});

module.exports = app;
