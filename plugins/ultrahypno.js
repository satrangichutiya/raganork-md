const { Module } = require('../main');

const EMOJIS = ["🌒", "🌔", "🌘", "🌒", "🌗", "🪐", "🛑", "🧧", "🧧", "🎁", "🎁", "🎀", "🎀", "🎁"];

Module({
  pattern: "trance",
  fromMe: false,
  desc: "Sends a hypnotic emoji trance animation",
  type: "fun"
}, async (message) => {
  const trance = async (text) => {
    await message.sendMessage(text);
    await new Promise((r) => setTimeout(r, 200));
  };

  for (let i = 0; i < 6; i++) {
    let line = "";
    for (let j = 0; j < 15; j++) {
      line += EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    }
    await trance(`*⚠️ NEXUS XMD TRANCE MODE ⚠️*\n\n${line}`);
  }

  await message.sendMessage(`🧠 *Your brain now belongs to* 🔮 *NEXUS XMD* 🧠`);
});
