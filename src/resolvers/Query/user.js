const profileImage = require('utils/profileImage')

module.exports = async function(parent, args, context, info) {
  const user = await context.prisma.user({ id: context.userId })
  user.profileImage = profileImage(user)
  return user
}
