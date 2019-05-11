const { GraphQLServer } = require('graphql-yoga')
const context = require('context')
const resolvers = require('resolvers')
const permissions = require('permissions')
const initJobs = require('jobs')

const server = new GraphQLServer({
  typeDefs: './src/schema/all.graphql',
  resolvers,
  middlewares: [permissions],
  context,
})

server.start(() => {
  console.log(`SERVER: is running on http://localhost:4000`)
  initJobs()
})
