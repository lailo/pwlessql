const uuidv4 = require('uuid/v4')
const mnGen = require('mngen')
const sendAuthConfirm = require('emails/sendAuthConfirm')

module.exports = async function(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) throw new Error('Email not found')

  const securityWord = mnGen.word()
  const data = {
    token: uuidv4(),
    email: user.email,
  }

  const auth = await context.prisma.upsertAuth({
    where: {
      email: user.email,
    },
    update: data,
    create: data,
  })

  sendAuthConfirm({
    name: user.name,
    email: data.email,
    token: data.token,
    securityWord: securityWord,
  })

  return {
    email: user.email,
    securityWord,
  }
}
