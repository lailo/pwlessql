const { rule } = require('graphql-shield')

module.exports.isAuthenticated = rule()((parent, args, context) => {
  if (!context.userId) return new Error('Not authenticated')
  return true
})
