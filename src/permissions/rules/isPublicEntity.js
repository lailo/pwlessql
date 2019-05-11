const { rule } = require('graphql-shield')

module.exports.isPublicEntity = rule()(async (parent, { id }, context) => {
  const entity = await context.prisma.entity({ id })
  if (!entity.isPublic) {
    return new Error('Not authorized to see private enity')
  }
  return true
})
