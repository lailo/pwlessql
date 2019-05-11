const moment = require('moment')
const { getJWT } = require('utils/auth')

module.exports = async function(parent, args, context, info) {
  const { token, email } = args.data

  const auth = await context.prisma.auth({ token, email })

  if (!auth) throw new Error('No found')

  if (moment().isAfter(moment(auth.updatedAt).add(1, 'h'))) {
    await context.prisma.deleteAuth({ id: auth.id })
    throw new Error('Token not valid')
  }

  const user = await context.prisma.user({ email })
  const jwt = getJWT(user)

  await context.prisma.deleteAuth({ id: auth.id })

  return {
    token: jwt,
    user,
  }
}
