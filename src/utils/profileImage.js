const gravatar = require('gravatar')

module.exports = function(user) {
  return gravatar.url(user.email, { d: 'retro' }, true)
}
