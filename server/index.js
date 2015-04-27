/**
 * MODULE DEPENDENCIES
 */
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

function serverConfiguration(app){
  /**
   * MongoDB connection
   */
  mongoose.connect("mongodb://localhost/lastAccount");
  mongoose.connection.on("error", function(err) {
    console.error(err);
    console.error("MongoDB Connection Error.");   
  });

  /**
   * Middleware
   */
  app.use(morgan('dev'));
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
}

module.exports = serverConfiguration;