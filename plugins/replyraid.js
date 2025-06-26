const { Module } = require('../main');

// 💌 Shayari Collection (Sad, Love, Flirt, Hard)
const shayariLines = [
  "💔 Tera chehra meri aakhri khushi tha...",
  "😔 Dil to toot gaya par teri yaadein zinda hain...",
  "❤️ Tumse milke lagta hai sab theek ho jaayega...",
  "🥀 Har pal yaad karta hoon tujhe...",
  "🔥 Tere bina bhi jee raha hoon, lekin zinda nahi hoon...",
  "💘 Har raat sirf tera naam hota hai aankhon mein...",
  "🌪️ Aansuon se bhari meri duniya mein tu bas ek chamak hai...",
  "😈 Tu hansi thi kisi aur ke liye, par barbad mujhe kar gayi...",
  "💌 Aaj phir teri yaad ne rulaya...",
  "🥵 Pyar mein jo jalega, wahi to roshan karega duniya ko...",
  "❤️‍🔥 Tune toh kaha tha saath doge, par raste badal diye...",
  "💥 Har msg tera aankhon ka nasha ban gaya hai...",
  "🌹 Mohabbat mein sab kuch khona padta hai...",
  "🌑 Tu meri duniya thi, ab andhera hai...",
  "🖤 Aankhon se aansu nahi, zakhm tapak rahe hain...",
  "💓 Tera har msg meri saans ban gaya hai...",
  "🧨 Tere jaane ke baad sab kuch suna suna sa lagta hai...",
  "💗 Main rota nahi, par tere liye sab chhupa leta hoon...",
  "🔪 Pyar ka matlab hai dard, aur tu uska saboot hai...",
  "🚬 Har baar hasi aayi, par tere bina adhoori thi..."
];

let loveRaidTargets = [];

Module({
  pattern: "addlove ?(.*)",
  fromMe: true,
  desc: "Start auto-love raid on mentioned user",
  type: "fun"
}, async (message, match) => {
  const user = match || (message.mentionedJid && message.mentionedJid[0]);
  if (!user) return await message.sendMessage("❌ Mention someone to start love raid.");
  if (!loveRaidTargets.includes(user)) loveRaidTargets.push(user);
  await message.sendMessage(`💘 Love raid started on @${user.split('@')[0]}`, { mentions: [user] });
});

Module({
  pattern: "stoplove ?(.*)",
  fromMe: true,
  desc: "Stop love raid on mentioned user",
  type: "fun"
}, async (message, match) => {
  const user = match || (message.mentionedJid && message.mentionedJid[0]);
  if (!user) return await message.sendMessage("❌ Mention someone to stop love raid.");
  loveRaidTargets = loveRaidTargets.filter(id => id !== user);
  await message.sendMessage(`✅ Love raid stopped on @${user.split('@')[0]}`, { mentions: [user] });
});

Module({
  on: "message",
  fromMe: false
}, async (message) => {
  const sender = message.sender;
  if (!sender || !loveRaidTargets.includes(sender)) return;
  const randomLine = shayariLines[Math.floor(Math.random() * shayariLines.length)];
  await message.client.sendMessage(message.jid, {
    text: randomLine,
    mentions: [sender]
  }, { quoted: message });
});
