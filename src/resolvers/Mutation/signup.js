const getSlug = require('utils/getSlug')
const login = require('resolvers/Mutation/login')

module.exports = async function(parent, args, context, info) {
  const existingUser = await context.prisma.user({ email: args.email })
  if (existingUser) throw new Error('Email already used')

  const name = args.email.slice(0, args.email.indexOf('@'))
  let slug = getSlug(name)

  const count = await context.prisma
    .usersConnection({ where: { slug } })
    .aggregate()
    .count()
  if (count) {
    slug = `${slug}-${count + 1}`
  }

  const user = await context.prisma.createUser({
    email: args.email,
    name,
    slug,
  })

  return login(parent, args, context, info)
}
