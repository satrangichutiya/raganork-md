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
  "`█ TARGET HACKED █ 💀`",
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

Module({
  pattern: "hackfx",
  fromMe: false,
  desc: "Hacker animation ⚡",
  type: "fun"
}, async (message, match) => {
  let m = await message.reply("`Launching hack engine...`");
  for (let i of frames) {
    await sleep(300);
    await m.edit(i);
  }
});
