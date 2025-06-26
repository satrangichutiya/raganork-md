const { Module } = require('../main');

const emojis = ["💀", "🔥", "😈", "👻", "💣", "🚨", "☠️", "⚔️", "🔪", "🥵"];

Module({
  pattern: "emojiraid",
  fromMe: false,
  desc: "Send emoji spam",
  type: "fun"
}, async (message) => {
  for (let i = 0; i < 20; i++) {
    let spam = "";
    for (let j = 0; j < 15; j++) {
      spam += emojis[Math.floor(Math.random() * emojis.length)] + " ";
    }
    await message.sendMessage(spam);
  }
});
