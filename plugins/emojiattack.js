const { Module } = require('../main');

Module({
  pattern: 'emojiattack ?(.*)',
  fromMe: false,
  desc: 'Emoji rain spam attack 🌧️',
  type: 'fun'
}, async (message, match) => {
  const emojis = ['🤣', '💀', '😈', '😹', '🤡', '👻', '🔥', '💥', '🌪️', '💫', '🧨', '🎉'];
  let count = parseInt(match[1]) || 50;

  for (let i = 0; i < count; i++) {
    const rain = Array(20).fill(0).map(() => emojis[Math.floor(Math.random() * emojis.length)]).join(" ");
    await message.sendMessage({ text: rain });
    await new Promise(resolve => setTimeout(resolve, 800));
  }

  await message.sendMessage({ text: "🎯 *Emoji Attack Complete!* 🔥" });
});
