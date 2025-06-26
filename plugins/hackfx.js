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
  desc: "Terminal hacker animation (low text)",
  type: "fun"
}, async (message) => {
  let msg = await message.sendMessage("```Launching hack engine...```");
  for (let i of frames) {
    await sleep(300);
    await message.client.editMessage(
      message.jid,
      msg.key.id,
      i
    );
  }
});
