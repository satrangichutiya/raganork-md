const { Module } = require('../main');

const FADED_AUDIO = 'https://github.com/satnami-dev/music/raw/main/faded.mp3'; // direct MP3 URL

Module({
  pattern: '.*', // Catch-all
  fromMe: false,
  type: 'auto'
}, async (message) => {
  const msgText = (message.body || '').toLowerCase().trim();

  if (msgText === 'hi') {
    await message.send('👋 *HELLO THIS IS NEXUS XMD*\n💠 _How can I help you?_');

    await message.sendFromUrl(FADED_AUDIO, {
      mimetype: 'audio/mpeg',
      ptt: false, // set true if you want voice note style
      caption: '🎶 Alan Walker - Faded'
    });
  }
});
