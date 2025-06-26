const { Module } = require('../main');
const axios = require('axios');
const fs = require('fs');
const { writeFile } = require('fs/promises');

Module({
  pattern: "carbon ?(.*)",
  fromMe: false,
  desc: "Convert code to carbon image",
  type: "tools"
}, async (message, match) => {
  const code = match[1] || (message.quoted?.text || "");
  if (!code) return await message.sendMessage("💡 Use: `.carbon console.log('Hello');`");

  const res = await axios.post("https://carbonara.solopov.dev/api/cook", { code }, { responseType: 'arraybuffer' });
  const filePath = './carbon.png';
  await writeFile(filePath, res.data);

  await message.sendMessage({ image: { url: filePath }, caption: "🖼️ Here's your Carbon image!" });
  fs.unlinkSync(filePath);
});
