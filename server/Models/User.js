var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    local: {
      email: 'String',
      password: 'String'
    }
});

UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.isValidPassword = function(password){
  return bcrypt.compareSync(password, this.local.password);
}
module.exports = mongoose.model('User', UserSchema);