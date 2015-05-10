/**
 * MongoDB connection and load up controller
 */
var mongo = require('../controllers/db');
function router(app, passport){
  /**
   * If user is already logged in, send them to template page
   */
  // app.get('/auth', isLoggedIn, function(req, res){
  //   res.redirect('/template');
  // });
  /**
   * Handle Signup
   */
  app.post('/auth/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/auth',
    failureFlash: true
  }));
  /** 
   * Handle login
   */
  app.post('/auth/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/auth',
    failureFlash: true
  }));
  /**
   * Google OAuth, passport
   */
  app.get('/auth/google', passport.authenticate('google', { 
    scope: 'https://www.googleapis.com/auth/plus.login'
  }));
  app.get('/auth/google/callback', 
    passport.authenticate('google', { 
      failureRedirect: '/auth'
    }), function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  /**
   * Home Page, templates
   */
  // app.get('/', isLoggedIn, function(req, res){
  //   var userObj = {
  //     id: req.user._id,
  //     templates: req.user.templates
  //   };
  //   res.send(userObj);
  // });
  /**
   * Send back lastAccount templates associated with user
   * Req params: User ID
   * Response: Templates of User
   */
  app.get('/api/templates', function(req, res){
    res.sendStatus(200);
  });
  /**
   * Create template
   * Req params: User ID, template object
   * Post: Push template object onto templates array of user
   */
  app.post('/api/create', function(req, res){

  });
  /**
   * Update template
   * Req params: Template object (with ID)
   * Post: Update template doc
   */
  app.post('/api/update', function(req, res){

  });
  // app.get('/api/users', function(req, res){
  //   mongo.getUser({}, function(database){
  //     console.log(database);
  //   });
  // });
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