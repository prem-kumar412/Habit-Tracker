"use strict";

// require passport
var passport = require('passport'); // storing strategy used for authentication


var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user'); // authentication using passport


passport.use(new LocalStrategy({
  usernameField: 'email'
}, function _callee(email, password, done) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 2:
          user = _context.sent;

          if (!(!user || user.password != password)) {
            _context.next = 6;
            break;
          }

          console.log('Invalid username/password');
          return _context.abrupt("return", done(null, false));

        case 6:
          return _context.abrupt("return", done(null, user));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
})); // serializing the user to decide which key is to be kept in the cookies

passport.serializeUser(function (user, done) {
  done(null, user.id);
}); // deserializing the user from the key in the cookies

passport.deserializeUser(function _callee2(id, done) {
  var userId;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.findById(id));

        case 2:
          userId = _context2.sent;

          if (userId) {
            _context2.next = 6;
            break;
          }

          console.log("Error in passport_local/deserializeUser");
          return _context2.abrupt("return", done(null, false));

        case 6:
          return _context2.abrupt("return", done(null, userId));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // Checking authentication

passport.checkAuthentication = function (req, res, next) {
  // if user is signed in , then pass on the request ot the next fucntion (controller's action)
  if (req.isAuthenticated()) {
    return next();
  } // if the user is not signed in


  return res.redirect('/users/sign-in');
}; // Setting authentication


passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    // sending current signed in user to the locals for views
    res.locals.user = req.user;
  }

  next();
};

module.exports = passport;
//# sourceMappingURL=passport_local.dev.js.map
