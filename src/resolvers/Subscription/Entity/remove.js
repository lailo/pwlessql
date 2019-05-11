module.exports.removeEntity = {
  subscribe(parent, args, context, info) {
    return context.prisma.$subscribe.entity({ mutation_in: ['DELETED'] }).node()
  },
  resolve: payload => {
    return payload
  },
}
