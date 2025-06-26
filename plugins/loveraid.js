const { Module } = require("../main");
const { getBuffer } = require("../lib"); // remove if unused

const loveShayaris = [
  "💖 Tum meri zindagi ho, bina tumhare sab kuch adhoora 💫",
  "✨ Tere bina main adhura hoon, jaise chand bina noor 🌙",
  "💌 Ishq likha tha takdeer mein, isiliye tu mila naseeb se",
  "🩷 Har pal tujhe chahna meri aadat ban gayi hai",
  "🌹 Mohabbat sirf tujhse hai, aur hamesha rahegi",
  "💘 Teri muskurahat meri jaan hai",
  "❤️‍🔥 Tum ho to sab kuch hai, tum na ho to kuch bhi nahi",
  "💕 Aankhon mein basa rakha hai tujhe, dil mein chhupa rakha hai",
  "💞 Tera naam hi kaafi hai khushi dene ke liye",
  "💗 Ishq sachcha ho to bewafa nahi hota",
  // ... Add 190+ more below as you wish
];

function getRandomShayari() {
  return loveShayaris[Math.floor(Math.random() * loveShayaris.length)];
}

Module({
  pattern: "loveraid ?(.*)",
  fromMe: false,
  desc: "Send random love shayari continuously",
  type: "love"
}, async (message, match) => {
  const count = parseInt(match[1]) || 25; // default 25 messages
  for (let i = 0; i < count; i++) {
    const shayari = getRandomShayari();
    await message.sendMessage({ text: `💌 ${shayari}` });
    await new Promise(r => setTimeout(r, 1200)); // 1.2 sec delay
  }
});
