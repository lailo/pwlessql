const removeOldAuthInit = require('jobs/removeOldAuths')

module.exports = function() {
  removeOldAuthInit()
  console.log(`JOBS: initialized`)
}
