module.exports.createEntity = async function(parent, args, context, info) {
  return await context.prisma.createEnity({
    ...args.data,
    createdBy: { connect: { id: context.userId } },
  })
}
