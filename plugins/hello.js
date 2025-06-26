const { cmd } = require('../lib') // or your framework helper path

cmd({
  pattern: 'hello',
  desc: 'Reply with a greeting',
  type: 'fun'
}, async (message) => {
  await message.reply('👋 Hello! I am alive and kicking!')
})
