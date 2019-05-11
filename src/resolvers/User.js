async function entities(parent, args, context) {
  return await context.prisma.user({ id: parent.id }).entities()
}

module.exports = {
  entities,
}
