module.exports = {
  name: "block",
  alias: ["blockuser"],
  desc: "To block an user from bot's account",
  category: "Mods",
  usage: "block @user",
  react: "🎀",
  start: async (
    Xtroid,
    m,
    { args, text, prefix, isCreator, pushName, modStatus }
  ) => {
    if (modStatus == "false" && !isCreator)
      return Xtroid.sendMessage(
        m.from,
        { text: "Sorry, only my *Owner* and *Mods* can use this command !" },
        { quoted: m }
      );

    if (!text && !m.quoted) {
      return Xtroid.sendMessage(
        m.from,
        { text: `Please tag a user to *Block*!` },
        { quoted: m }
      );
    } else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }

    await Xtroid.updateBlockStatus(mentionedUser, "block")
      .then(async (res) => {
        Xtroid.sendMessage(
          m.from,
          {
            text: `Successfully *Blocked* @${
              mentionedUser.split("@")[0]
            } Senpai !`,
            mentions: [mentionedUser],
          },
          { quoted: m }
        ).catch((e) => {
          Xtroid.sendMessage(
            m.from,
            {
              text: `Failed to block @${
                mentionedUser.split("@")[0]
              } Senpai ! Maybe he is already blocked !`,
              mentions: [mentionedUser],
            },
            { quoted: m }
          );
        });
      })
      .catch((e) => {
        Xtroid.sendMessage(
          m.from,
          {
            text: `Failed to block @${
              mentionedUser.split("@")[0]
            } Senpai ! Maybe he is already blocked !`,
            mentions: [mentionedUser],
          },
          { quoted: m }
        );
      });
  },
};
