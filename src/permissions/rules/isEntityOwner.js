const { rule } = require('graphql-shield')

module.exports.isEntityOwner = rule()(async (parent, { id }, context) => {
  const createdBy = await context.prisma.entity({ id }).createdBy()
  if (context.userId !== createdBy.id) {
    return new Error('Not authorized to see enity')
  }
  return true
})
