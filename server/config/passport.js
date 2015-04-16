/**
 * Dependencies
 */
var User = require('../models/User');

function passportConfiguration(passport){
  /**
   * Session Setup
   */
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user);
    });
  });
  
};

module.exports = passportConfiguration;