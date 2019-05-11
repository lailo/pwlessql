module.exports.deleteUser = async function(parent, args, context, info) {
  return await context.prisma.deleteUser({
    id: context.userId,
  })
}
