/**
 * MongoDB connection and load up controller
 */
var mongo = require('../controllers/db');
function router(app, passport){
  /**
   * Send back lastAccount templates associated with user
   */
  app.get('/api/templates', isLoggedIn, function(req, res){

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
  app.post('/api/signup', function(req, res){

  });
  /** 
   * Handle login
   */
  app.get('/api/login', function(req, res){

  })
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