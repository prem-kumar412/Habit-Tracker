"use strict";

// require express
var express = require('express');

var port = 3000;
var app = express();

var expressLayouts = require('express-ejs-layouts');

var bodyParser = require('body-parser');

var db = require('./config/mongoose'); // require connect-flash


var flash = require('connect-flash');

var flashMiddleware = require('./config/flashMiddleware'); // used for session cookies


var session = require("express-session");

var passport = require('passport');

var passportLocal = require('./config/passport_local');

var MongoStore = require('connect-mongo'); // layouts for ejs


app.use(expressLayouts);
app.use(bodyParser.urlencoded({
  extended: false
})); // set up the view engine

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express["static"]('./assets')); //mongo store is used to store the session cookie

app.use(session({
  name: 'habitTracker',
  secret: "12345",
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 100
  },
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://premyadav18520:premkumar412@cluster0.htzhdao.mongodb.net/',
    autoRemover: 'disabled'
  }, function (err) {
    console.log("Error in the mongo-store");
  })
})); // Using passport

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser); // flash middleware

app.use(flash());
app.use(flashMiddleware.setFlash); // use express router

app.use('/', require('./routes')); // directing the app in the given port

app.listen(port, function (err) {
  if (err) {
    console.log('Error', err);
    return;
  }

  console.log('Server is up and running on port: ', port);
});
//# sourceMappingURL=index.dev.js.map
