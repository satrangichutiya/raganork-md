const { Module } = require('../main');

Module({
  pattern: 'hypobomb',
  fromMe: false,
  desc: 'Hypnotic bomb terminal animation 💣🌀 (edit-style)',
  type: 'fun'
}, async (message) => {

  const frames = [
    '☠️ Initializing...\n\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒',
    '💣 Arming BOMB...\n\n▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒',
    '⏳ Injecting Payload...\n\n▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒',
    '🧠 Hypnotizing...\n\n▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒',
    '🌀 Swirling Data...\n\n▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒▒',
    '💀 BRAINWAVE SYNC...\n\n▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒▒',
    '🧬 Looping 🔁...\n\n▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒',
    '🔄 Hypo Bomb Engaged\n\n▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒',
    '🎯 Target Locked...\n\n▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒',
    '💥 Detonating...\n\n▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓',
    '🔥 B O O M ! ! ! 💣\n\n💥 💥 💥 💥 💥 💥',
    '🌀 System In Hypnosis 💫',
    '🧠 Subconscious Breach ☠️',
    '⌛ Retrying in loop 🔁',
    '💣 Re-arming bomb 🧨',
    '😵‍💫 User trapped in loop...'
  ];

  // send initial message
  let animMessage = await message.reply("⚠️ Starting Hypnotic Bomb Sequence...");

  for (let i = 0; i < 30; i++) {
    const frame = frames[Math.floor(Math.random() * frames.length)];
    await animMessage.edit(frame);
    await new Promise(res => setTimeout(res, 700));
  }

  await animMessage.edit(
    `💣 *HYPO BOMB COMPLETED*\n\n😵‍💫 Victim trapped in illusionary matrix.\n🧠 Mind melted in digital waves.\n\nUse command again to reloop.`
  );
});
