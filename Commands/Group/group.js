module.exports = {
  name: "group",
  alias: ["gc", "group open"],
  desc: "Set a group profile picture.",
  category: "Group",
  usage: `Tag an Image and type -setppgc}`,
  react: "🍁",
  start: async (
    Xtroid,
    m,
    {
      text,
      prefix,
      isBotAdmin,
      isAdmin,
      mentionByTag,
      args,
      pushName,
      mime,
      quoted,
    }
  ) => {
    if (!isAdmin && !isBotAdmin)
      return Xtroid.sendMessage(
        m.from,
        {
          text: `Bot and *${pushName}* both must be admin in order to use this command !`,
        },
        { quoted: m }
      );
    if (args[0] === "close") {
      await Xtroid.groupSettingUpdate(m.from, "announcement").then((res) =>
        m.reply(`Group has been closed!`)
      );
    } else if (args[0] === "open") {
      await Xtroid.groupSettingUpdate(m.from, "not_announcement").then((res) =>
        m.reply(`Group has been opened!`)
      );
    } else {
      let buttons = [
        {
          buttonId: "${prefix}group open",
          buttonText: { displayText: "Open" },
          type: 1,
        },
        {
          buttonId: "${prefix}group close",
          buttonText: { displayText: "Close" },
          type: 1,
        },
      ];
      let buttonMessage = {
        text: `\n*「 Group Message Settings 」*\n\nSelect an option below.\n`,
        footer: `${botName}`,
        buttons: buttons,
        headerType: 4,
      };
      Xtroid.sendMessage(m.from, buttonMessage, { quoted: m });
    }
  },
};
