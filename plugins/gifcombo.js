const { Module } = require('../main');

const gifActions = {
  slap: "https://media.tenor.com/IvA8MT7JVoUAAAAC/slap.gif",
  kill: "https://media.tenor.com/OE1xgZ6wktYAAAAC/kill-anime.gif",
  hug: "https://media.tenor.com/2rlvZ9Yuqb4AAAAC/anime-hug.gif",
  kiss: "https://media.tenor.com/i3z_hFP05_oAAAAC/anime-kiss.gif",
  nuke: "https://media.tenor.com/CM_7y-6I9nUAAAAC/nuke-explosion.gif",
  fuck: "https://media.tenor.com/dFvIBvTUkBEAAAAC/sex-hentai.gif",
  bite: "https://media.tenor.com/xTbGp0w_zD0AAAAC/bite-vampire.gif",
  lick: "https://media.tenor.com/38EZdkD5usIAAAAC/anime-lick.gif",
  cum: "https://media.tenor.com/jdrrwks-l1QAAAAC/hentai-cum.gif",
  stab: "https://media.tenor.com/c0ls8Paq5r0AAAAC/stab-anime.gif",
  choke: "https://media.tenor.com/WI8VJdn1rhkAAAAC/choke-anime.gif",
  boom: "https://media.tenor.com/vNcfdcMfHTgAAAAC/boom-nuke.gif",
  spank: "https://media.tenor.com/YUB9NidNnVEAAAAC/spank.gif",
  attack: "https://media.tenor.com/Rfp1DWgEvRIAAAAC/attack-punch.gif",
  punch: "https://media.tenor.com/yZ37cEzX_g0AAAAC/punch.gif",
  dance: "https://media.tenor.com/O4-x-zJwCkQAAAAC/anime-dance.gif",
  cry: "https://media.tenor.com/3GYhWv3SbzYAAAAC/crying-anime.gif",
  love: "https://media.tenor.com/gz4c8E3U2bQAAAAC/anime-love.gif",
  kick: "https://media.tenor.com/BKpGpRQGttYAAAAC/kick-anime.gif",
  sex: "https://media.tenor.com/8K7z1l_KGO8AAAAC/hentai-sex.gif"
};

for (let action in gifActions) {
  Module({
    pattern: action,
    fromMe: false,
    desc: `Sends ${action} gif`,
    type: 'gif'
  }, async (message) => {
    const gifUrl = gifActions[action];
    await message.client.sendMessage(message.jid, {
      video: { url: gifUrl },
      gifPlayback: true,
      caption: `🔞 *${action.toUpperCase()} ACTION!*`
    }, { quoted: message });
  });
}
