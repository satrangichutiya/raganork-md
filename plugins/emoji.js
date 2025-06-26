const emojis = [
  "😂", "🤣", "😈", "🔥", "💣", "💀", "❤️", "🤡", "🥵", "👻", "😎",
  "🤯", "💫", "🌪️", "🚀", "👿", "👀", "😵‍💫", "👅", "🧠", "🎯", "⚔️", "🥴"
];

module.exports = {
  pattern: "emoji",
  desc: "Emoji spam raid",
  type: "fun",
  run: async (m, text) => {
    let count = parseInt(text.trim()) || 20;
    if (count > 100) return m.reply("Max 100 emojis allowed.");
    for (let i = 0; i < count; i++) {
      const msg = emojis[Math.floor(Math.random() * emojis.length)];
      await m.reply(msg.repeat(Math.floor(Math.random() * 4) + 1));
      await new Promise(res => setTimeout(res, 150));
    }
  }
};
