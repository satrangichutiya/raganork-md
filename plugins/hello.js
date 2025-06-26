const { Module } = require("../main");

Module({
  pattern: "hello",
  fromMe: false,
  desc: "Sends hello message",
  type: "misc"
}, async (message) => {
  await message.sendMessage({ text: "👋 Hello bhai! I'm alive and ready 🚀" });
});
