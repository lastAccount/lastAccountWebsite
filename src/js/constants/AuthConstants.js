var keyMirror = require('keymirror');

var AuthConstants = keyMirror({
  SIGNUP: null,
  LOGIN: null,
  OAUTH: null,
  LOGOUT: null
});

module.exports = AuthConstants;