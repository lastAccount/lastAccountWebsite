var mongoose = require('mongoose');
/**
 * MongoDB connection and controller
 */
mongoose.connect("mongodb://localhost/lastAccount");
mongoose.connection.on("error", function(err) {
  console.error(err);
  console.error("MongoDB Connection Error.");   
});

var mongoController = {
  
}
module.exports = mongoController;