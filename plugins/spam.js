const { Module } = require('../main');

Module({
  pattern: "spam ?(.*)",
  fromMe: false,
  desc: "Send spam messages",
  type: "fun"
}, async (message, match) => {
  const input = match[1] || "";
  const [count, ...textParts] = input.trim().split(" ");
  const text = textParts.join(" ");
  const times = parseInt(count);

  if (!text || isNaN(times)) {
    return await message.sendMessage("❌ Usage: `.spam 5 hello`\n➡️ Will send 'hello' 5 times.");
  }

  if (times > 30) return await message.sendMessage("❌ Limit 30 messages per spam.");

  for (let i = 0; i < times; i++) {
    await message.sendMessage(text);
  }
});
