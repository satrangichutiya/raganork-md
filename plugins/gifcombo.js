const { Module } = require('../main');

const gifActions = {
  slap: "https://media.tenor.com/1zUOdnNzN4kAAAAC/anime-slap.gif",
  hug: "https://media.tenor.com/XW5oZh4SqqsAAAAC/hug-love.gif",
  kiss: "https://media.tenor.com/lUq3wCB7S9oAAAAC/kiss-cute.gif",
  nuke: "https://media.tenor.com/bM8R-QmriKcAAAAC/explosion-boom.gif",
  kill: "https://media.tenor.com/1odWoWusCVQAAAAC/kill-death.gif",
  fuck: "https://media.tenor.com/NK5D9uT0yzUAAAAC/sex-anime.gif",
  bite: "https://media.tenor.com/OzIzsxMlbn4AAAAC/anime-bite.gif",
  lick: "https://media.tenor.com/McPjNq0LkU0AAAAC/anime-lick.gif",
  stab: "https://media.tenor.com/4qEd8qJS2VwAAAAC/anime-stab.gif",
  boom: "https://media.tenor.com/rzUMm8wnD2cAAAAC/explosion-anime.gif",
  punch: "https://media.tenor.com/4azA7IkLNf8AAAAC/anime-punch.gif",
  cry: "https://media.tenor.com/7Wa8RkzZ1U0AAAAC/anime-crying.gif",
  love: "https://media.tenor.com/PYx3XICoJx8AAAAC/anime-love-hearts.gif",
  dance: "https://media.tenor.com/PPvBZugzBdYAAAAC/dance-anime.gif",
  choke: "https://media.tenor.com/RS4V_MUQ-QgAAAAC/anime-choke.gif",
  spank: "https://media.tenor.com/HOga1ItJ4EIAAAAC/spank-anime.gif",
  attack: "https://media.tenor.com/L0eekVdbF_YAAAAC/anime-attack.gif",
  kick: "https://media.tenor.com/Y_RAKLBQbz8AAAAC/kick-anime.gif",
  sex: "https://media.tenor.com/TvMZk6KmKnAAAAAC/sex-anime.gif"
};

for (let action in gifActions) {
  Module({
    pattern: action,
    fromMe: false,
    desc: `Send ${action} gif`,
    type: 'gif'
  }, async (message, match, client) => {
    const gifUrl = gifActions[action];
    try {
      await client.sendMessage(message.key.remoteJid, {
        video: { url: gifUrl },
        gifPlayback: true,
        caption: `🔞 *${action.toUpperCase()} ACTION!*`
      }, { quoted: message });
    } catch (e) {
      await client.sendMessage(message.key.remoteJid, {
        text: `❌ Could not send *${action}* gif.`
      }, { quoted: message });
    }
  });
}
