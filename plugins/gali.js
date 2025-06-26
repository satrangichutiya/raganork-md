const { Module } = require('../main');

const galiList = [
  "BSDK TERI RANDI MAA OO CHODUNGA LAGATARRR 🤬",
  "MC B TERI BEHEN KI GAAND MAARKE FODDUNHAC 😡",
  "Teri Maa Ki 👿",
  "Bhen ke L**** TERI MAAKI CHUT KE BULSOZWR 💀",
  "Chutiya 🤡",
  "Haramkhor 🐍",
  "Madarchod 🚫",
  "G***u 🐒",
  "Nalle Ka Baccha 🤢",
  "Bhag Bhosdike 🤯",
  "Lund Le 🤬",
  "Chup Be Chut** 😤",
  "Abey R****e 🔥",
  "Tatti Ka Saand 💩",
  "Bheekmanga 🧟‍♂️",
  "Oye Teri! 😵‍💫",
  "Naali ke Keede 🤮",
  "Makke Di L** 🤬",
  "Teri behen ka pyaar 💔",
  "Tu toh bhikhari nikla 😬",
  "Tere jaise 100 milte hain 😏",
  "Kamina no.1 🤢",
  "Tumse na ho payega 🖕",
  "Behnchod Engineer 🤓",
  "Tere jaise to gali mein padhe hain 🤡",
  "Lo*** ka password bhool gaya kya? 😆",
  "Tere baap ka paisa hai? 😤",
  "Chal bhaag yaha se 🐕",
  "Ek number ka harami hai tu 🤬",
  "Padhai likhai chhod di kya bc? 📚",
  "Tu sirf data barbaad kar raha hai 📵",
  "Tere muh pe gaan*** pad gaya kya? 🤐",
  // Add 150+ more if needed...
];

Module({
  pattern: "gali ?(.*)",
  fromMe: false,
  desc: "Spam gali (abuse) messages in group or private",
  type: "fun"
}, async (message, match) => {
  const count = parseInt(match[1]) || 20;
  if (count > 50) return await message.sendMessage("❌ Limit: 50 gali messages max.");

  for (let i = 0; i < count; i++) {
    const gali = galiList[Math.floor(Math.random() * galiList.length)];
    await message.sendMessage(gali);
  }
});
