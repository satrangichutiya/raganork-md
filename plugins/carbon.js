const { Module } = require('../main');
const fetch = require('node-fetch');

Module({
  pattern: "carbon ?(.*)",
  fromMe: false,
  desc: "Generate carbon code image from replied message or text",
  type: "tool"
}, async (message, match) => {
  let code = "";

  // Get quoted message if exists
  if (message.quoted && message.quoted.text) {
    code = message.quoted.text.trim();
  }

  // If no quoted, use direct text
  if (!code && match[1]) {
    code = match[1].trim();
  }

  // If still no code
  if (!code) {
    return await message.sendMessage("❌ *Please reply to or provide some code to generate an image.*");
  }

  // Clean code
  code = code.split("\n").map(line => line.trimStart()).join("\n");

  // Send pending message
  await message.sendMessage("🛠️ Generating carbon image...");

  try {
    const res = await fetch("https://carbonara.solopov.dev/api/cook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        backgroundColor: "#1e1e1e", // You can change theme & color here
        theme: "dracula"
      }),
    });

    if (!res.ok) {
      return await message.sendMessage("❌ *Failed to generate image. Try again later.*");
    }

    const buffer = await res.buffer();
    await message.sendMessage({ image: buffer }, { quoted: message });

  } catch (err) {
    console.error(err);
    await message.sendMessage("⚠️ *Error occurred while generating image.*");
  }
});
