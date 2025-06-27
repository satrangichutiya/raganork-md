const { Module } = require('../main');

Module({
  pattern: 'lul',
  fromMe: false,
  desc: 'Emoji animation cyclone 🌪️ for WhatsApp',
  type: 'fun',
}, async (message, match, sock) => {
  const emojis = [
    '😂', '😭', '😶', '🥰', '💔', '🫩', '😁', '🤬', '🥴', '🥹',
    '🥲', '🫤', '👍', '👺', '🌔', '🌘', '😘', '😉', '😗', '😙',
    '😚', '😋', '🙃', '😊', '☺️', '😌', '🥺', '😬', '😛', '😝',
    '😜', '😐', '🫣', '😶‍🌫️', '🫢', '😔', '😥', '😢', '😞', '😓',
    '😦', '🙁', '🧐', '😡', '🤥', '😇', '🤠', '🤓', '🥸', '🤡',
    '😼', '😻', '🙀', '😺', '😿', '☃️', '💀', '👿', '🎃', '😹'
  ];

  let sent = await sock.sendMessage(message.key.remoteJid, {
    text: emojis[Math.floor(Math.random() * emojis.length)],
  }, { quoted: message });

  for (let i = 0; i < 30; i++) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    // delete old message
    await sock.sendMessage(message.key.remoteJid, {
      delete: sent.key
    });

    // send new one
    sent = await sock.sendMessage(message.key.remoteJid, {
      text: emoji
    });
    await new Promise(r => setTimeout(r, 300)); // delay
  }

  await sock.sendMessage(message.key.remoteJid, {
    text: `🌪️ *Emoji Cyclone Complete!*\n😵 Final Emoji: ${emojis[Math.floor(Math.random() * emojis.length)]}`,
  });
});
