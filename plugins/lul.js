const { Module } = require('../main');

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

Module({
  pattern: 'lul',
  fromMe: false,
  desc: 'One-by-one emoji animation 🎭',
  type: 'fun'
}, async (message) => {
  const jid = message.jid;

  const emojis = [
    '😂', '😭', '😶', '🥰', '💔', '🫩', '😁', '🎁', '🥴', '🥹',
    '🥲', '🫤', '👍', '🤣', '🌔', '🌘', '😘', '😉', '😗', '🟦',
    '😚', '😋', '🙃', '😊', '☺️', '😌', '🇲🇨', '🙂‍↔️', '🇱🇷',
    '😬', '😛', '😝', '😜', '😐', '🫣', '😶‍🌫️', '🫢', '🟥',
    '😥', '😢', '😞', '📦', '😭', '🙁', '🚩', '♣️', '💚',
    '😇', '🤠', '🤓', '🥸', '🥹', '😼', '🎀', '🎊', '⬜',
    '😿', '☃️', '💀', '👿', '🎃', '😹'
  ];

  let sent = await message.sendMessage("🌀");

  for (let i = 0; i < 50; i++) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    await sleep(300);
    await message.client.sendMessage(jid, {
      edit: sent.key,
      text: emoji
    });
  }

  await message.client.sendMessage(jid, {
    edit: sent.key,
    text: "💥 *🟥🇲🇨🟦🚩!* 💫"
  });
});
