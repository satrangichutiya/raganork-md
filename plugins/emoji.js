const { cmd } = require('../lib'); // Adjust if needed

const emojiPack = [
  '😂', '🤣', '😈', '🔥', '💣', '💀', '❤️', '🤡', '🥵', '🖕', '👻',
  '🥶', '😎', '🤯', '💫', '🌪️', '🚀', '👿', '👀', '😵‍💫', '👅', '🧠',
  '🎯', '⚔️', '🥴', '🍑', '🍆', '🤙', '💥', '🎉', '💃', '🪩', '🛐'
];

cmd({
  pattern: 'emoji ?(.*)',
  desc: 'Spam random emojis like a raid',
  type: 'fun'
}, async (m, match) => {
  let count = parseInt(match.trim()) || 20;

  if (count > 100) return m.reply('Max emoji limit is 100.');

  for (let i = 0; i < count; i++) {
    const emoji = emojiPack[Math.floor(Math.random() * emojiPack.length)];
    await m.reply(emoji.repeat(Math.floor(Math.random() * 5) + 1));
    await new Promise(res => setTimeout(res, 150)); // short delay
  }
});
