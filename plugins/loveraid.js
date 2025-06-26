const { Module } = require('../main');

const shayaris = [
  "🌹 Tumhara Naam Hi Kafi Hai Mere Chehre Pe Muskurahat Laane Ke Liye.",
  "💘 Tum Mile To Zindagi Mein Rang Aa Gaya, Varna Main Toh Bas Saans Le Raha Tha.",
  "❤️‍🔥 Teri Har Ada Pe Pyaar Aata Hai, Dil Bechara Fida Rehta Hai.",
  "👀 Tum Dekho Na Dekho, Mera Dil Tumhe Hi Dekhta Rehta Hai.",
  "💌 Itni Khubsurti Kaha Se Laati Ho, Shayad Farishte Bhi Jalte Honge Tumse.",
  "🥀 Jab Tum Pass Hoti Ho Toh Dil Me Kuch Kuch Hota Hai...",
  "🧸 Tere Bina Adhura Sa Lagta Hai Har Pal, Jaise Chand Ke Bina Chandni.",
  "💘 Main Har Roz Tumse Mohabbat Karne Ki Wajah Dhoond Leta Hoon.",
  "🌸 Shayad Mohabbat Ka Dusra Naam Tum Ho.",
  "💖 Tumhari Khushi Meri Dua Hai, Tumhara Gham Mera Dard.",
  "👑 Teri Muskurahat Hi Meri Taqdeer Hai.",
  "🫀 Khuda Se Ek Hi Dua Hai, Tu Mera Ho Jaaye Bas.",
  "🔥 Tere Naam Se Dil Dhadakta Hai Mera, Bas Itna Samajh Le.",
  "💕 Love isn’t about finding the perfect one, it’s about loving the imperfect perfectly.",
  "🌙 You're my moon in the darkest nights.",
  "💫 You're not a person, you're a feeling.",
  "💋 If kisses were stars, I’d give you the sky.",
  "🥺 Tum Bin Rehna Toh Seekh Liya Hai, Par Khush Rehna Nahi.",
  "🖤 Pyaar Karte Hai Tumse Beintehaan, Bas Kaha Nahi Jata.",
  "💌 You're my today and all of my tomorrows.",
  // ...you can add 180+ more here.
];

// Random picker function
function pickShayari() {
  return shayaris[Math.floor(Math.random() * shayaris.length)];
}

Module({
  pattern: "loveraid",
  fromMe: false,
  desc: "Send nonstop random love shayari ❤️‍🔥",
  type: "love"
}, async (message, match) => {
  const count = match[1] ? parseInt(match[1]) : 10; // Default 10 shayari
  if (isNaN(count) || count > 100) return await message.reply("❌ Please enter valid number up to 100.\nExample: `.loveraid 20`");

  await message.reply(`💘 Starting Love Raid with ${count} shayari...`);

  for (let i = 0; i < count; i++) {
    await new Promise(r => setTimeout(r, 700)); // Slow down to avoid spam block
    await message.reply(pickShayari());
  }

  await message.reply("💖 Loveraid Complete. Hope dil pighla diya ho 😘");
});
