module.exports = {
  pattern: "spam",
  desc: "Spam text multiple times",
  type: "fun",
  run: async (m, text) => {
    let [count, ...msg] = text.trim().split(" ");
    count = parseInt(count);
    if (!count || !msg.length) return m.reply("Usage: .spam <count> <message>");
    if (count > 50) return m.reply("Max limit is 50");
    for (let i = 0; i < count; i++) {
      await m.reply(msg.join(" "));
      await new Promise(res => setTimeout(res, 300));
    }
  }
};
