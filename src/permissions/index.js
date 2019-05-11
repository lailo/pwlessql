const { shield, and, or, not, allow, deny } = require('graphql-shield')

const { isAuthenticated } = require('permissions/rules/isAuthenticated')
const { isEntityOwner } = require('permissions/rules/isEntityOwner')
const { isPublicEntity } = require('permissions/rules/isPublicEntity')

module.exports = shield(
  {
    Query: {
      user: isAuthenticated,
      profile: allow,
      entity: or(isPublicEntity, isEntityOwner),
      discover: allow,
    },
    Mutation: {
      signup: not(isAuthenticated),
      login: not(isAuthenticated),
      confirm: allow,
      updateUser: isAuthenticated,
      deleteUser: isAuthenticated,
      createEntity: isAuthenticated,
      updateEntity: and(isAuthenticated, isEntityOwner),
      deleteEntity: and(isAuthenticated, isEntityOwner),
    },
    Subscription: {
      addEntity: or(isPublicEntity, isEntityOwner),
      updateEntity: or(isPublicEntity, isEntityOwner),
      removeEntity: or(isPublicEntity, isEntityOwner),
    },
    AuthPayload: allow,
    ConfirmPayload: allow,
    CreatedByUser: allow,
    Discover: allow,
    User: isAuthenticated,
    Entity: allow,
    Profile: allow,
  },
  {
    fallbackRule: deny,
    fallbackError: 'You should not see this error.',
  }
)
