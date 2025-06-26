const { Module } = require('../main');

const GALI_LIST = [
  "अबे तेरी माँ की चप्पल का साइज तेरा आत्मसम्मान से बड़ा है!",
  "तेरे जैसे तो गलती से पैदा हो गए होते हैं!",
  "अबे ओ माइक्रोवेव में पापड़ सेंकने वाले इंसान!",
  "तेरा दिमाग रद्दी में भी नहीं बिकेगा!",
  "तेरी सोच में उतना दम नहीं जितना चाय के बर्तन में होता है!",
  "तेरे जैसे लोग पैदा नहीं होते, सर्वर एरर से generate होते हैं!",
  "अबे तेरी शक्ल देख के तो CAPTCHA भी confuse हो जाए!",
  "तेरे जैसे को तो keyboard के ESC button से भी बाहर निकालना पड़े!",
  "अबे ओ दो रुपए की औकात वाले!",
  "तेरे जैसे नालायक के लिए तो autocorrect भी हार मान जाए!",
  "तेरा जन्म देख के तो भगवान भी बोले, 'control + Z चाहिए था!'",
  "तू तो उस इंटरनेट की तरह है जो slow भी है और irritate भी करता है!",
  "तेरे दिमाग में RAM नहीं, बस lag है!",
  "तेरे जैसे को देख के तो virus भी uninstall हो जाए!",
  "तेरे दिमाग में घोड़ा दौड़ाओ तो भी दौड़ के गिर जाएगा!",
  "अबे जा, तेरे नाम से तो गूगल भी search करने से मना करता है!",
  "तेरे जैसी शक्ल देख के तो Instagram filter खुद ब खुद बंद हो जाए!",
  "तेरा IQ microwave timer से भी कम है!",
  "तेरे बिना तो boredom भी interesting लगती है!",
  "तू इतना फालतू है कि recycle bin भी तुझे accept ना करे!",
  "तेरी बातों से ज्यादा तो गूगल पे ads useful हैं!",
  "अबे जा तेरे ऊपर तो pop-up ads भी तरस खाएं!",
  "तू तो ऐसा bug है जो patch से भी ठीक ना हो!",
  "तेरे जैसे बेकार लोग WhatsApp group से भी बाहर निकाल दिए जाते हैं!",
  "तू पैदा हुआ या किसी ने router reset कर दिया?",
  "तेरे चेहरे पे mask नहीं, format चाहिए!"
  // 🔁 Add more if you want extreme burns!
];

Module({
  pattern: "gali ?(.*)",
  fromMe: false,
  desc: "Targeted random gali spam",
  type: "fun"
}, async (message, match) => {
  const target = match[1] || "लौंडे";
  for (let i = 0; i < 10; i++) {
    const gali = GALI_LIST[Math.floor(Math.random() * GALI_LIST.length)];
    await message.sendMessage({ text: `😡 ${target}, ${gali}` });
    await new Promise(res => setTimeout(res, 1000));
  }

  await message.sendMessage({ text: `🔥 ${target} ka insult successfully complete हुआ भाई! 😎` });
});
