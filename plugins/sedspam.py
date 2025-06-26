const { Module } = require('../main');

const sadLines = [
  "हर किसी से मोहब्बत करना मुमकिन नहीं होता,\nकभी-कभी दर्द ही सबसे करीबी हो जाता है 💔",
  "वो हँसते हैं हमें तड़पते हुए देखकर,\nकाश हम भी उन्हें ऐसे ही नजरअंदाज़ कर पाते 😔",
  "तेरे बाद हमने खुद को बहुत अकेला पाया,\nना खुशी रही, ना कोई साया 😢",
  "दिल का क्या कसूर था, वो तो बेगुनाह था,\nगुनाह तो हमारी मोहब्बत थी जो तुझसे हो गई 💀"
];

Module({
  pattern: 'sadspam ?(.*)',
  fromMe: false,
  desc: 'Send sad shayari spam 😢',
  type: 'emotion'
}, async (message, match) => {
  let count = parseInt(match[1]) || 30;
  count = Math.min(count, 100);

  for (let i = 0; i < count; i++) {
    const sad = sadLines[Math.floor(Math.random() * sadLines.length)];
    await message.sendMessage({ text: `💔 *Dard Shayari #${i + 1}:*\n${sad}` });
    await new Promise(r => setTimeout(r, 800));
  }

  await message.sendMessage({ text: "😭 Sadness delivered! Time to cry!" });
});
