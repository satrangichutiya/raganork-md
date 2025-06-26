const { Module } = require('../main');

Module({
  pattern: 'emojiattack ?(.*)',
  fromMe: false,
  desc: 'Emoji rain spam attack 🌧️',
  type: 'fun'
}, async (message, match) => {
  const emojis = ['🤣', '💀', '😈', '😹', '🤡', '👻', '🔥', '💥', '🌪️', '💫', '🧨', '🎉'];
  let count = parseInt(match[1]) || 50;

  if (count > 100) {
    return await message.sendMessage("❌ Max 100 emoji rains allowed.");
  }

  for (let i = 0; i < count; i++) {
    const rain = Array(20).fill(0).map(() => emojis[Math.floor(Math.random() * emojis.length)]).join(" ");
    await message.sendMessage(rain);
    await new Promise(resolve => setTimeout(resolve, 700)); // optional delay
  }

  await message.sendMessage("🎯 *Emoji Attack Complete!* 🔥");
});
