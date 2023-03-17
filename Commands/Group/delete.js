module.exports = {
  name: "delete",
  alias: ["del"],
  desc: "To delete a message",
  category: "Group",
  usage: `Tag a message and type *del*`,
  react: "🍁",
  start: async (Xtroid, m, { isAdmin, isBotAdmin, pushName }) => {
    if (!m.quoted)
      return Xtroid.sendMessage(
        m.from,
        { text: `Please mention a message to delete !` },
        { quoted: m }
      );
    if (!isAdmin && !isBotAdmin)
      return Xtroid.sendMessage(
        m.from,
        {
          text: `Bot and *${pushName}* both must be admin in order to use this command !`,
        },
        { quoted: m }
      );
    
    var { from, fromMe, id } = m.quoted;

    const key = {
      remoteJid: m.from,
      fromMe: false,
      id: m.quoted.id,
      participant: m.quoted.sender,
    };

    await Xtroid.sendMessage(m.from, { delete: key });
  },
};
