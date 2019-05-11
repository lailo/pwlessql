const getSlug = require('utils/getSlug')

module.exports.updateUser = async function(parent, args, context, info) {
  const data = { ...args.data }
  if (data.name) data.slug = getSlug(data.name)

  return await context.prisma.updateUser({
    data,
    where: {
      id: context.userId,
    },
  })
}
