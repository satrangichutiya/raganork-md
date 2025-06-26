const { Module } = require('../main');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const { writeFile } = require('fs/promises');

Module({
  pattern: 'carbon ?(.*)',
  fromMe: false,
  desc: 'Convert text/code into carbon image',
  type: 'tools'
}, async (message, match) => {
  let input = match[1] || message.reply_message?.text;
  if (!input) return await message.sendReply('_Please provide some code/text!_\nUsage: `.carbon console.log("hi")`');

  const carbonAPI = 'https://carbonara.solopov.dev/api/cook';
  await message.sendReply('🎨 Generating Carbon Image...');

  try {
    const res = await axios.post(carbonAPI, { code: input }, { responseType: 'arraybuffer' });
    const filename = './carbon_result.png';
    await writeFile(filename, res.data);

    await message.sendMessage({ image: { url: filename }, caption: "🖼️ Here's your Carbon code!" });
    fs.unlinkSync(filename);
  } catch (err) {
    console.error(err);
    return await message.sendReply('❌ Error generating Carbon image.');
  }
});
