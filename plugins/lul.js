const { Module } = require('../main');

Module({
  pattern: 'lul',
  fromMe: false,
  desc: 'Edits message with nonstop emoji raid loop 😈',
  type: 'fun'
}, async (message) => {
  const emojis = [
    "😂", "😭", "😶", "🥰", "💔", "🫩", "😁", "🤬", "🥴", "🥹", "🥲", "🫤", "👍",
    "👺", "🌔", "🌘", "😘", "😉", "😗", "😙", "😚", "😋", "🙃", "😊", "☺️", "😌",
    "🙂‍↕️", "🙂‍↔️", "🥺", "😬", "😋", "😛", "😝", "😜", "🥴", "😐", "🫣", "😶‍🌫️",
    "🫢", "😔", "😥", "😢", "😞", "😓", "🫤", "😦", "🙁", "🧐", "😡", "🤥", "😇",
    "🤠", "🤓", "🥸", "🤡", "😼", "😻", "🙀", "😺", "😿", "☃️", "👺", "💀", "👿",
    "🎃", "😹", "💥", "🧠", "🔥", "🧨", "💣"
  ];

  let sent = await message.reply("⚡ LUL Activated...");

  for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i];
    await new Promise(r => setTimeout(r, 200));
    await sent.edit(`${emoji} ${emoji} ${emoji}`);
  }

  await sent.edit("💣 *EMOJI RAID COMPLETED* 😵‍💫\nType `.lul` again to restart.");
});
