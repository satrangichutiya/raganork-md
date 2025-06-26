const { Module } = require('../main');
const axios = require("axios");

// Helper to fetch GIF as buffer
async function getBuffer(url) {
  const res = await axios.get(url, { responseType: 'arraybuffer' });
  return res.data;
}

const gifActions = {
  slap: ["https://media.tenor.com/IvA8MT7JVoUAAAAC/slap.gif"],
  hug: ["https://media.tenor.com/2rlvZ9Yuqb4AAAAC/anime-hug.gif"],
  kiss: ["https://media.tenor.com/i3z_hFP05_oAAAAC/anime-kiss.gif"],
  nuke: ["https://media.tenor.com/CM_7y-6I9nUAAAAC/nuke-explosion.gif"],
  kill: ["https://media.tenor.com/OE1xgZ6wktYAAAAC/kill-anime.gif"],
  fuck: ["https://media.tenor.com/dFvIBvTUkBEAAAAC/sex-hentai.gif"],
  bite: ["https://media.tenor.com/xTbGp0w_zD0AAAAC/bite-vampire.gif"],
  lick: ["https://media.tenor.com/38EZdkD5usIAAAAC/anime-lick.gif"],
  cum: ["https://media.tenor.com/jdrrwks-l1QAAAAC/hentai-cum.gif"],
  stab: ["https://media.tenor.com/c0ls8Paq5r0AAAAC/stab-anime.gif"],
  choke: ["https://media.tenor.com/WI8VJdn1rhkAAAAC/choke-anime.gif"],
  boom: ["https://media.tenor.com/vNcfdcMfHTgAAAAC/boom-nuke.gif"],
  spank: ["https://media.tenor.com/YUB9NidNnVEAAAAC/spank.gif"],
  attack: ["https://media.tenor.com/Rfp1DWgEvRIAAAAC/attack-punch.gif"],
  punch: ["https://media.tenor.com/yZ37cEzX_g0AAAAC/punch.gif"],
  dance: ["https://media.tenor.com/O4-x-zJwCkQAAAAC/anime-dance.gif"],
  cry: ["https://media.tenor.com/3GYhWv3SbzYAAAAC/crying-anime.gif"],
  love: ["https://media.tenor.com/gz4c8E3U2bQAAAAC/anime-love.gif"],
  kick: ["https://media.tenor.com/BKpGpRQGttYAAAAC/kick-anime.gif"],
  sex: ["https://media.tenor.com/8K7z1l_KGO8AAAAC/hentai-sex.gif"]
};

// Loop to create module for each action
for (let action in gifActions) {
  Module({
    pattern: action,
    fromMe: false,
    desc: `Send ${action} GIF`,
    type: "fun"
  }, async (message, match, m) => {
    const gifURL = gifActions[action][Math.floor(Math.random() * gifActions[action].length)];

    try {
      const buffer = await getBuffer(gifURL);
      await message.sendMessage(buffer, {
        caption: `💥 *${action.toUpperCase()}!*`,
        gifPlayback: true,
        mimetype: 'video/gif'
      }, 'video');
    } catch (err) {
      await message.send(`❌ Error: couldn't send *${action}* gif.`);
    }
  });
}
