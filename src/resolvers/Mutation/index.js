const signup = require('resolvers/Mutation/signup')
const login = require('resolvers/Mutation/login')
const confirm = require('resolvers/Mutation/confirm')

const { updateUser } = require('resolvers/Mutation/User/update')
const { deleteUser } = require('resolvers/Mutation/User/delete')

const { createEntity } = require('resolvers/Mutation/Entity/create')
const { updateEntity } = require('resolvers/Mutation/Entity/update')
const { deleteEntity } = require('resolvers/Mutation/Entity/delete')

module.exports = {
  signup,
  login,
  confirm,
  updateUser,
  deleteUser,
  createEntity,
  updateEntity,
  deleteEntity,
}
