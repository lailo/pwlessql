const nodemailer = require('nodemailer')
const sendEmail = require('emails/sendEmail')
const { IS_DEV, EMAIL_FROM_NAME, EMAIL_FROM_ADDRESS } = require('config')

module.exports = async function({ name, email, token, securityWord }) {
  const info = await sendEmail({
    from: `"${EMAIL_FROM_NAME}" ${EMAIL_FROM_ADDRESS}`,
    to: email,
    subject: 'Confirm Request',
    text: [
      `Hi ${name},`,
      '',
      `Please click the link below to confirm your authentication.`,
      `http://localhost:3000/auth/confirm?email=${encodeURIComponent(
        email
      )}&token=${token}`,
      '',
      `Security word is: "${securityWord}".`,
      '',
      'Cheers,',
      `${EMAIL_FROM_NAME} team`,
    ].join('\n'),
  })

  if (IS_DEV) {
    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  }
}
