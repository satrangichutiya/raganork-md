module.exports = {
    name: "spam",
    description: "Spam messages (Use carefully!)",
    async handle(client, message, args) {
        const count = parseInt(args[0]) || 5; // Default: 5 times
        const text = args.slice(1).join(" ") || "Spam testing! 🚀"; 

        if (count > 20) {
            return client.sendMessage(message.from, { 
                text: "❌ Max limit: 20 messages (to avoid ban/spam detection)" 
            });
        }

        for (let i = 0; i < count; i++) {
            await client.sendMessage(message.from, { text: `${i+1}. ${text}` });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay (1 second)
        }
    },
};
