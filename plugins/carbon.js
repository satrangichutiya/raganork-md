const axios = require("axios");
const FormData = require("form-data");

module.exports = {
  pattern: "carbon",
  desc: "Generate carbon image from code",
  type: "tool",
  run: async (m, text) => {
    const code = text || (m.quoted && m.quoted.text);
    if (!code) return m.reply("Usage: .carbon <code>");
    try {
      const form = new FormData();
      form.append("code", code);
      form.append("theme", "seti");
      form.append("backgroundColor", "rgba(171, 184, 195, 1)");
      form.append("language", "auto");

      const res = await axios.post("https://carbonara.solopov.dev/api/cook", form, {
        headers: form.getHeaders(),
        responseType: "arraybuffer",
      });

      await m.sendMessage(m.chat, { image: Buffer.from(res.data), caption: "Here's your carbon image!" }, { quoted: m });
    } catch (err) {
      console.error(err);
      m.reply("Failed to generate image.");
    }
  }
};
