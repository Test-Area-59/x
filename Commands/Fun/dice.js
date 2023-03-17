module.exports = {
  name: "roll",
  alias: ["dice"],
  desc: "Rolls a dice with the maximum number of sides specified",
  category: "fun",
  usage: "roll <maximum number>",
  react: "🎲",
  start: async (Xtroid, m, { text, prefix, args }) => {
    let max = parseInt(args[0]);
    if (!max)
      return Xtroid.sendMessage(
        m.from,
        { text: "Please provide a maximum number of sides for the dice." },
        { quoted: m }
      );
    let roll = Math.floor(Math.random() * max) + 1;
    Xtroid.sendMessage(m.from, { text: `You rolled a ${roll}!` }, { quoted: m });
  },
};
