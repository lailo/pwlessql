module.exports = {
  IS_DEV: process.env.NODE_ENV !== 'production',
  APP_SECRET: process.env.APP_SECRET,
  AUTH_TOKE_VALIDATION_DURATION_MINS: 60,
  EMAIL_FROM_ADDRESS: 'hello@example.com',
  EMAIL_FROM_NAME: 'Example',
}
