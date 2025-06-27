// server.js or web.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send('🤖 Raganork-MD bot running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

// Start the bot
import('./index.js'); // or your main bot file
