const profileImage = require('utils/profileImage')

async function createdBy(parent, args, context) {
  const user = await context.prisma.entity({ id: parent.id }).createdBy()
  user.profileImage = profileImage(user)
  return user
}

module.exports = {
  createdBy,
}
