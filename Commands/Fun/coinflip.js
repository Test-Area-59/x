module.exports = {
    name: "coinflip",
    desc: "Flips a coin and returns the result.",
    alias: ["flipcoin", "coin"],
    category: "Fun",
    usage: "coinflip",
    react: "💰",
    start: async (Xtroid, m, { text, prefix, args }) => {
        let result = Math.floor(Math.random() * 2) + 1;
        if (result === 1) {
            return Xtroid.sendMessage(m.from, { text: "Heads" }, { quoted: m });
        } else {
            return Xtroid.sendMessage(m.from, { text: "Tails" }, { quoted: m });
        }
    }
}