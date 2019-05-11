module.exports.updateEntity = async function(parent, args, context, info) {
  return await context.prisma.updateEntity({
    data: { ...args.data },
    where: {
      id: context.userId,
    },
  })
}
