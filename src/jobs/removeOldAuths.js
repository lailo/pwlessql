const schedule = require('node-schedule')
const { prisma } = require('../../generated/prisma-client')
const moment = require('moment')
const { AUTH_TOKE_VALIDATION_DURATION_MINS } = require('config')

const rule = new schedule.RecurrenceRule()
rule.minute = AUTH_TOKE_VALIDATION_DURATION_MINS

module.exports = function() {
  schedule.scheduleJob(rule, async function() {
    const auth = await prisma.deleteManyAuths({
      updatedAt_lt: moment().subtract(AUTH_TOKE_VALIDATION_DURATION_MINS, 'm'),
    })
    console.log('JOBS: Removed invalid auth items: ', auth.count)
  })
}
