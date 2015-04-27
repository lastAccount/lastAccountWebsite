/**
 * MongoDB connection and load up controller
 */
var mongo = require('../controllers/db');
function router(app, passport){
  /**
   * Home Page, templates
   */
  app.get('/', isLoggedIn, function(req, res){
    var userObj = {
      id: req.user._id,
      templates: req.user.templates
    };
    res.send(userObj);
  });
  /**
   * Send back lastAccount templates associated with user
   */
  app.get('/api/templates', function(req, res){
    res.sendStatus(200);
  });
  /**
   * Create template
   */
  app.post('/api/create', function(req, res){

  });
  /**
   * Update template
   */
  app.post('/api/update', function(req, res){

  });
  /**
   * Handle Signup
   */
  app.post('/api/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/auth',
    failureFlash: true
  }));
  /** 
   * Handle login
   */
  app.post('/api/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/auth',
    failureFlash: true
  }));
}

/**
 * Validates login
 */
function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect('/auth');
}

module.exports = router;