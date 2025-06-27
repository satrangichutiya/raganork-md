const { Module } = require('../main');

Module({
  pattern: 'lul',
  fromMe: false,
  desc: 'Emoji cyclone animation 🌪️',
  type: 'fun'
}, async (message) => {
  const emojis = [
    '😂', '😭', '😶', '🥰', '💔', '🫩', '😁', '🤬', '🥴', '🥹',
    '🥲', '🫤', '👍', '👺', '🌔', '🌘', '😘', '😉', '😗', '😙',
    '😚', '😋', '🙃', '😊', '☺️', '😌', '🥺', '😬', '😛', '😝',
    '😜', '😐', '🫣', '😶‍🌫️', '🫢', '😔', '😥', '😢', '😞', '😓',
    '😦', '🙁', '🧐', '😡', '🤥', '😇', '🤠', '🤓', '🥸', '🤡',
    '😼', '😻', '🙀', '😺', '😿', '☃️', '💀', '👿', '🎃', '😹'
  ];

  const totalFrames = 50;
  let emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const sent = await message.sendMessage(emoji);

  for (let i = 0; i < totalFrames; i++) {
    await new Promise(r => setTimeout(r, 200)); // delay
    emoji = emojis[Math.floor(Math.random() * emojis.length)];
    await sent.edit(emoji);
  }

  await sent.edit(`😵‍💫 *LUL OVERDRIVE DONE!* 🌪️\n🔥 ${emoji} 🔥`);
});
