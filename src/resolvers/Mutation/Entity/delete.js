module.exports.deleteEntity = async function(parent, args, context, info) {
  return await context.prisma.deleteEntity({
    id: context.userId,
  })
}
