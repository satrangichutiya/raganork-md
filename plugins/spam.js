const { cmd } = require('../lib'); // adjust path based on your bot's lib structure

cmd({
  pattern: 'spam ?(.*)',
  desc: 'Spam any message multiple times',
  type: 'fun',
}, async (m, match) => {
  if (!match) return m.reply('Usage: .spam <count> <message>');

  let [count, ...textParts] = match.trim().split(' ');
  count = parseInt(count);
  const text = textParts.join(' ');

  if (!count || !text) return m.reply('Example: .spam 5 Hello there!');
  if (count > 50) return m.reply('Max limit is 50 messages.');

  for (let i = 0; i < count; i++) {
    await m.reply(text);
    await new Promise(res => setTimeout(res, 300)); // slight delay to prevent ban
  }
});
