const { prisma } = require('../generated/prisma-client')
const { getUserId } = require('utils/auth')

function context({ request }) {
  const userId = getUserId(request)
  return {
    userId: getUserId(request),
    prisma,
  }
}

module.exports = context
