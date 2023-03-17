module.exports = {
  name: "demote",
  alias: ["dem"],
  desc: "Demote a member",
  category: "Group",
  usage: "demote @user",
  react: "🍁",
  start: async (
    Xtroid,
    m,
    { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, groupAdmin }
  ) => {
    if (!isAdmin) {
      return Xtroid.sendMessage(
        m.from,
        { text: `${mess.useradmin}` },
        { quoted: m }
      );
    }

    if (!text && !m.quoted) {
      return Xtroid.sendMessage(
        m.from,
        { text: `Please tag an user to *Demote*!` },
        { quoted: m }
      );
    } else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }

    let userId = (await mentionedUser) || m.msg.contextInfo.participant;
    if (!groupAdmin.includes(userId)) {
      return Xtroid.sendMessage(
        m.from,
        {
          text: `@${mentionedUser.split("@")[0]} Senpai is not an *Admin* !`,
          mentions: [mentionedUser],
        },
        { quoted: m }
      );
    }

    try {
      await Xtroid.groupParticipantsUpdate(m.from, [userId], "demote").then(
        (res) =>
          Xtroid.sendMessage(
            m.from,
            {
              text: `Sorry @${
                mentionedUser.split("@")[0]
              } Senpai, you have been *Demoted* by *${pushName}* !`,
              mentions: [mentionedUser],
            },
            { quoted: m }
          )
      );
    } catch (error) {
      Xtroid.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
