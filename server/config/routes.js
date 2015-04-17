function router(app, passport){

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