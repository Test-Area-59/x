module.exports = {
    name: "ping",
    alias: ["ping"],
    desc: "get ms",
    category: "Mods",
    usage: "ping",
    react: "🎀",
    start: async (Xtroid, m, { text, prefix ,modStatus}) => {
        var start = new Date().getTime();
      await Xtroid.sendMessage(m.from, { text: '*Ping!*' }, { quoted: m });
        var end = new Date().getTime();
     await Xtroid.sendMessage(m.from, { text: '*Pong!*\n```' + (end - start) + 'ms```' }, { quoted: m });
    },
  };