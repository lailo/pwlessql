module.exports.addEntity = {
  subscribe(parent, args, context, info) {
    return context.prisma.$subscribe.entity({ mutation_in: ['CREATED'] }).node()
  },
  resolve: payload => {
    return payload
  },
}
