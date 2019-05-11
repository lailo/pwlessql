module.exports = async function(parent, args, context, info) {
  const where = { isPublic: true }

  const entities = await context.prisma.entities({
    where,
    skip: args.skip,
    first: args.first,
  })

  const count = await context.prisma
    .entitiesConnection({
      where,
    })
    .aggregate()
    .count()

  return {
    entities,
    count,
  }
}
