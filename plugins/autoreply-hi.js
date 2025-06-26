const { Module } = require('../main'); const axios = require("axios");

// Greetings trigger list const GREETINGS = ['hi', 'hello', 'hii', 'hey', 'heyy', 'hlo'];

// Direct audio URL for "Faded" const SONG_URL = "https://cdn.pixabay.com/download/audio/2022/03/22/audio_e3e2b4e17d.mp3?filename=faded-110997.mp3";

// Function to fetch buffer async function getBuffer(url) { const res = await axios.get(url, { responseType: 'arraybuffer' }); return res.data; }

Module({ pattern: '.*', // Trigger on any message fromMe: false, desc: "Auto reply to greetings and react with emoji", type: "fun" }, async (message, match) => { const text = (message.text || "").toLowerCase().trim();

// 1. Auto Reaction: React to every message await message.react("\uD83C\uDDE6\uD83D\uDC09\u26A1\uD83C\uDDF8"); // 🇦🇹🐉⚡🇲🇨

// 2. Auto Reply if message is greeting if (GREETINGS.includes(text)) { try { // Send greeting message await message.client.sendMessage(message.jid, { text: "\uD83D\uDC4B Hello! This is NEXUS XMD.\nHow can I help you today?" }, { quoted: message });

// Send song
  const buffer = await getBuffer(SONG_URL);
  await message.client.sendMessage(message.jid, {
    audio: buffer,
    mimetype: "audio/mp4",
    ptt: false,
    fileName: "Faded.mp3"
  }, { quoted: message });

} catch (err) {
  console.error("Song send failed:", err);
  await message.client.sendMessage(message.jid, {
    text: "\uD83D\uDC4B Hello! This is NEXUS XMD.\n(Song failed to load.)"
  }, { quoted: message });
}

} });

