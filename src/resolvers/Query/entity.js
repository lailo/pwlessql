module.exports = async function(parent, args, context, info) {
  return await context.prisma.entity({ id: args.id })
}
