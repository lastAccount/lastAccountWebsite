var mongoose = require('mongoose');
var User = require('../Models/User');
/**
 * MongoDB connection and controller
 */
mongoose.connect("mongodb://localhost/lastAccount");
mongoose.connection.on("error", function(err) {
  console.error(err);
  console.error("MongoDB Connection Error.");   
});

var mongoController = {
  getUser: function(userObj, callback){
    User.find(userObj, function(err, users){
      if(err){
        console.log("Error finding users");
        console.log(err);
      }
      callback(users);
    });
  },
  clearDB: function(){
    User.remove({}, function(err){
      if(err){
        console.log("Error clearing database");
        console.log(err);
      }
      console.log("Cleared Database");
    });
  }
}
module.exports = mongoController;