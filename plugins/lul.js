const { Module } = require('../main');

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

Module({
  pattern: 'lul',
  fromMe: false,
  desc: 'Emoji mutation animation 😂😭💀',
  type: 'fun'
}, async (message) => {
  const jid = message.jid;

  const emojis = [
    '😂', '😭', '😶', '🥰', '💔', '🫩', '😁', '🤬', '🥴', '🥹',
    '🥲', '🫤', '👍', '👺', '🌔', '🌘', '😘', '😉', '😗', '😙',
    '😚', '😋', '🙃', '😊', '☺️', '😌', '🙂‍↕️', '🙂‍↔️', '🥺',
    '😬', '😛', '😝', '😜', '😐', '🫣', '😶‍🌫️', '🫢', '😔',
    '😥', '😢', '😞', '😓', '😦', '🙁', '🧐', '😡', '🤥',
    '😇', '🤠', '🤓', '🥸', '🤡', '😼', '😻', '🙀', '😺',
    '😿', '☃️', '💀', '👿', '🎃', '😹'
  ];

  let line = emojis.slice(0, 8); // Show 8 at a time
  let sent = await message.sendMessage(line.join(' '));

  for (let i = 0; i < 50; i++) {
    await sleep(500);

    // Randomly pick an index in the line and change its emoji
    const randIndex = Math.floor(Math.random() * line.length);
    const newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    line[randIndex] = newEmoji;

    await message.client.sendMessage(jid, {
      edit: sent.key,
      text: line.join(' ')
    });
  }

  await message.client.sendMessage(jid, {
    edit: sent.key,
    text: `✨ Emoji Overload Complete 💥\n\n${line.join(' ')}`
  });
});
