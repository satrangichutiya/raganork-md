const { Module } = require('../main');
const axios = require("axios");

const GREETINGS = ['hi', 'hello', 'hii', 'hey', 'heyy', 'hlo'];

// Direct MP3 URL for Alan Walker - Faded
const SONG_URL = "https://cdn.pixabay.com/download/audio/2022/03/22/audio_e3e2b4e17d.mp3?filename=faded-110997.mp3";

async function getBuffer(url) {
  const res = await axios.get(url, { responseType: 'arraybuffer' });
  return res.data;
}

Module({
  pattern: '.*', // Catch-all pattern
  fromMe: false,
  desc: "Auto reply on greetings with faded song",
  type: "auto"
}, async (message, match) => {
  const text = (message.text || "").toLowerCase().trim();

  if (GREETINGS.includes(text)) {
    try {
      // Send text message first
      await message.client.sendMessage(message.jid, {
        text: "👋 *Hello! This is NEXUS XMD.*\nHow can I help you today?"
      }, { quoted: message });

      // Fetch & send Faded song
      const buffer = await getBuffer(SONG_URL);
      await message.client.sendMessage(message.jid, {
        audio: buffer,
        mimetype: "audio/mp4",
        ptt: false,
        fileName: "Faded.mp3"
      }, { quoted: message });

    } catch (err) {
      console.error("Error sending song:", err);
      await message.client.sendMessage(message.jid, {
        text: "👋 Hello! This is NEXUS XMD.\n(Song failed to load.)"
      }, { quoted: message });
    }
  }
});
