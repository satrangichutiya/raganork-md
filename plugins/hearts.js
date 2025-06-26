const { Module } = require('../main');

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const heartFrames = [
  "🤍🤍❤️🤍🤍\n🤍❤️❤️❤️🤍\n❤️❤️❤️❤️❤️\n🤍❤️❤️❤️🤍\n🤍🤍❤️🤍🤍",
  "💜💜🧡💜💜\n💜🧡🧡🧡💜\n🧡🧡🧡🧡🧡\n💜🧡🧡🧡💜\n💜💜🧡💜💜",
  "💚💚💛💚💚\n💚💛💛💛💚\n💛💛💛💛💛\n💚💛💛💛💚\n💚💚💛💚💚",
  "🖤🖤💙🖤🖤\n🖤💙💙💙🖤\n💙💙💙💙💙\n🖤💙💙💙🖤\n🖤🖤💙🖤🖤",
  "🤎🤎❤️🤎🤎\n🤎❤️❤️❤️🤎\n❤️❤️❤️❤️❤️\n🤎❤️❤️❤️🤎\n🤎🤎❤️🤎🤎"
];

Module({
  pattern: "hearts",
  fromMe: false,
  desc: "Sends a beautiful animated heart",
  type: "fun"
}, async (message) => {
  const { key, id } = message;

  for (let i = 0; i < heartFrames.length; i++) {
    await message.sendMessage(heartFrames[i]);
    await delay(700);
  }

  // Shrinking animation
  const R = "❤️";
  for (let i = 5; i > 0; i--) {
    const line = R.repeat(i);
    const shrink = Array(i).fill(line).join("\n");
    await message.sendMessage(shrink);
    await delay(500);
  }

  await message.sendMessage("❤️‍🔥 *Love Delivered!* ❤️‍🔥");
});
