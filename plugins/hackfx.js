const { Module } = require('../main');

const frames = [
  "`[■□□□□□□□□□]`",
  "`[■■□□□□□□□□]`",
  "`[■■■□□□□□□□]`",
  "`[■■■■□□□□□□]`",
  "`[■■■■■□□□□□]`",
  "`[■■■■■■□□□□]`",
  "`[■■■■■■■□□□]`",
  "`[■■■■■■■■□□]`",
  "`[■■■■■■■■■□]`",
  "`[■■■■■■■■■■]`",
  "`█ ACCESS GRANTED █`",
  "`█ SYSTEM BREACHED █`",
  "`█ DECRYPTING █`",
  "`█ TARGET HACKED █ 💀`"
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

Module({
  pattern: "hackfx",
  fromMe: false,
  desc: "Hacker animation (compatible with WhatsApp)",
  type: "fun"
}, async (message) => {
  for (let frame of frames) {
    await message.sendMessage(frame);
    await sleep(400); // delay between each frame
  }

  await message.sendMessage("✅ *Mission complete.*");
});
