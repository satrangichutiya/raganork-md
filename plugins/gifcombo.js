const { Module } = require('../main');

const gifs = {
  attack: [
    "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-rick.gif",
    "https://media.tenor.com/EaA4y_O7BBsAAAAC/lol.gif",
    "https://media.tenor.com/JJvup9-iIvoAAAAC/hacking-hack.gif",
    "https://media.tenor.com/6u2gAz9psuEAAAAC/explosion-boom.gif",
    "https://media.tenor.com/rLuG1eMBVpUAAAAC/matrix-code.gif",
    "https://media.tenor.com/8j4QqYfp0bEAAAAC/hacked-anonymous.gif"
  ],
  slap: [
    "https://media.tenor.com/1WPXOW0qULAAAAAC/slap.gif",
    "https://media.tenor.com/JjRkdou2zNQAAAAC/slap-anime.gif",
    "https://media.tenor.com/76zjX8Qpcp4AAAAC/anime-slap.gif",
    "https://media.tenor.com/0AV2D3C3T1oAAAAC/slap-hit.gif"
  ],
  nuke: [
    "https://media.tenor.com/fzK5Ucds1ysAAAAC/nuke-attack.gif",
    "https://media.tenor.com/1kzG30KQjpoAAAAC/bomb-explode.gif",
    "https://media.tenor.com/xgAwL49EBVYAAAAC/missile-launch.gif",
    "https://media.tenor.com/NuD5LRIO5kIAAAAC/nuke-nuclear.gif"
  ]
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 🔥 GIF ATTACK
Module({
  pattern: "gifattack ?(.*)",
  fromMe: false,
  desc: "Spam funny gifs on user",
  type: "fun"
}, async (msg, match) => {
  const target = match[1] || "Target";
  await msg.sendMessage(`🎯 Starting GIF ATTACK on *${target}*`);

  for (let i = 0; i < 10; i++) {
    await msg.sendMessage({ video: { url: getRandom(gifs.attack) }, caption: `🔥 Attack on ${target}` });
    await new Promise(res => setTimeout(res, 1000));
  }

  await msg.sendMessage(`💣 GIF ATTACK complete on *${target}*`);
});

// 🖐️ SLAP GIF
Module({
  pattern: "gifslap ?(.*)",
  fromMe: false,
  desc: "Slap someone with gifs",
  type: "fun"
}, async (msg, match) => {
  const target = match[1] || "😶";
  await msg.sendMessage(`🖐️ Slapping *${target}*...`);

  for (let i = 0; i < 6; i++) {
    await msg.sendMessage({ video: { url: getRandom(gifs.slap) }, caption: `💥 ${target} got slapped!` });
    await new Promise(res => setTimeout(res, 900));
  }

  await msg.sendMessage(`✅ Slap session ended for *${target}*`);
});

// ☢️ NUKE GIF
Module({
  pattern: "gifnuke ?(.*)",
  fromMe: false,
  desc: "Nuke someone with massive GIFs",
  type: "fun"
}, async (msg, match) => {
  const target = match[1] || "👻";
  await msg.sendMessage(`☢️ LAUNCHING NUCLEAR GIFS on *${target}*`);

  for (let i = 0; i < 6; i++) {
    await msg.sendMessage({ video: { url: getRandom(gifs.nuke) }, caption: `💀 ${target} nuked!` });
    await new Promise(res => setTimeout(res, 1100));
  }

  await msg.sendMessage(`💥 ${target} has been vaporized!`);
});

// 🚫 ANTI-GIF
Module({
  pattern: "antigif",
  fromMe: false,
  desc: "Funny anti-gif protection mode",
  type: "fun"
}, async (msg) => {
  await msg.sendMessage(`🛡️ Activating Anti-GIF Shields...`);
  await msg.sendMessage({ video: { url: "https://media.tenor.com/UKUZkxXzWgMAAAAC/shield-shield-up.gif" }, caption: "🛡 Protected from lame GIFs!" });
});
