const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('config')

function getJWT(user) {
  return jwt.sign({ userId: user.id }, APP_SECRET)
}

function getUserId(request) {
  const Authorization = request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }
}

module.exports = {
  getJWT,
  getUserId,
}
