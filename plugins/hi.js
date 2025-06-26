const { Module } = require('../main');
const axios = require("axios");

async function getBuffer(url) {
  const res = await axios.get(url, { responseType: "arraybuffer" });
  return res.data;
}

const FADED_AUDIO = 'https://github.com/satnami-dev/music/raw/main/faded.mp3';

Module({
  pattern: '.*', // Match all messages
  fromMe: false,
  type: 'auto'
}, async (message) => {
  const msgText = (message.body || "").toLowerCase().trim();

  if (msgText === "hi") {
    await message.send("*👋 HELLO THIS IS NEXUS XMD*\n💠 _How can I help you?_");

    try {
      const buffer = await getBuffer(FADED_AUDIO);
      await message.client.sendMessage(message.jid, {
        audio: buffer,
        mimetype: 'audio/mpeg',
        ptt: false,
        caption: '🎧 Alan Walker - Faded'
      }, { quoted: message });
    } catch (err) {
      console.error("Error sending audio:", err);
      await message.send("❌ Error: Could not send the audio.");
    }
  }
});
