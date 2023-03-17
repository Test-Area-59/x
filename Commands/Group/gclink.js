require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "grouplink",
  alias: ["gclink"],
  desc: "To get concurrent group link.",
  category: "Group",
  usage: "gclink",
  react: "🍁",
  start: async (Xtroid, m, { prefix, isBotAdmin, isAdmin, metadata, mime }) => {
    if (!isAdmin)
      return Xtroid.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    var link = await Xtroid.groupInviteCode(m.from);
    var linkcode = `https://chat.whatsapp.com/${link}`;

    try {
      ppgc = await Xtroid.profilePictureUrl(m.from, "image");
    } catch {
      ppgc = botImage1;
    }

    try {
      await Xtroid.sendMessage(
        m.from,
        {
          image: { url: ppgc, mimetype: "image/jpeg" },
          caption: `\n_🎀 Group Name:_ *${metadata.subject}*\n\n_🔷 Group Link:_\n${linkcode}\n`,
        },
        { quoted: m }
      );
    } catch (err) {
      Xtroid.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
