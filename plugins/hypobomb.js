const { Module } = require('../main');

Module({
  pattern: 'hypobomb',
  fromMe: false,
  desc: 'Hypnotic bomb terminal animation 💣🌀',
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

  await message.sendMessage({ text: "⚠️ Starting Hypnotic Bomb Sequence..." });

  for (let i = 0; i < 30; i++) {
    const frame = frames[Math.floor(Math.random() * frames.length)];
    await message.sendMessage({ text: frame });
    await new Promise(r => setTimeout(r, 700));
  }

  await message.sendMessage({
    text: `💣 *HYPO BOMB COMPLETED*\n\n😵‍💫 Victim trapped in illusionary matrix.\n🧠 Mind melted in digital waves.\n\nUse command again to reloop.`,
  });
});
