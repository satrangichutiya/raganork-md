const { Module } = require('../main');

Module({
  pattern: 'hello',
  fromMe: false,
  desc: 'Replies with hello message',
  type: 'fun'
}, async (message) => {
  await message.reply('👋 Hello bhai! Bot is working perfectly 💥');
});
