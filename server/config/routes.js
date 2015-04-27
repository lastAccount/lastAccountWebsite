function router(app, passport){
  app.get('/api/template', function())
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