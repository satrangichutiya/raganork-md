const { cmd } = require('../lib');
const axios = require('axios');
const FormData = require('form-data');

cmd({
  pattern: 'carbon ?(.*)',
  desc: 'Generate Carbon image from code',
  type: 'tool'
}, async (m, match) => {
  const code = match || (m.quoted && m.quoted.text);

  if (!code) return m.reply('Please provide some code.\nExample: .carbon console.log("Hello");');

  try {
    let form = new FormData();
    form.append('code', code);
    form.append('theme', 'seti'); // you can change theme if needed
    form.append('backgroundColor', 'rgba(171, 184, 195, 1)');
    form.append('language', 'auto');

    const res = await axios.post('https://carbonara.solopov.dev/api/cook', form, {
      headers: form.getHeaders(),
      responseType: 'arraybuffer'
    });

    await m.sendMessage(m.chat, {
      image: Buffer.from(res.data),
      caption: 'Here is your Carbon code image 🌈'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('❌ Failed to generate carbon image.');
  }
});
