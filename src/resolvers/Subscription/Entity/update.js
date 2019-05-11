module.exports.updateEntity = {
  subscribe(parent, args, context, info) {
    return context.prisma.$subscribe.entity({ mutation_in: ['UPDATED'] }).node()
  },
  resolve: payload => {
    return payload
  },
}
