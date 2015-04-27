var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = require('./User')

var TemplateSchema = new mongoose.Schema({
  /**
   * Id of User model associated with Template
   */
  user: { type: Number, ref: 'User'}
  /**
   * Credentials
   */
  username: 'String',
  email: 'String',
  fullName: 'String',
  firstName: 'String',
  lastName: 'String'
});

module.exports = mongoose.model('Template', TemplateSchema);