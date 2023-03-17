module.exports = {
  name: "setgcname",
  alias: ["setnamegc", "changegcname", "setgroupname", "changegroupname"],
  desc: "Change the group name",
  category: "Group",
  usage: `setgcname <New group name>`,
  react: "🍁",
  start: async (
    Xtroid,
    m,
    { text, prefix, isBotAdmin, isAdmin, pushName, metadata, args, mime }
  ) => {
    if (!isAdmin && !isBotAdmin)
      return Xtroid.sendMessage(
        m.from,
        {
          text: `*Bot* and *${pushName}* both must be *Admin* in order to use this Command!`,
        },
        { quoted: m }
      );
    if (!args[0])
      return Xtroid.sendMessage(
        m.from,
        { text: `Please provide a new group name !` },
        { quoted: m }
      );

    var newGCName = args.join(" ");
    var oldGCName = metadata.subject;

    try {
      ppgc = await Xtroid.profilePictureUrl(m.from, "image");
    } catch {
      ppgc = "https://wallpapercave.com/wp/wp10524580.jpg";
    }

    await Xtroid.groupUpdateSubject(m.from, newGCName)
      .then((res) =>
        Xtroid.sendMessage(
          m.from,
          {
            image: { url: ppgc, mimetype: "image/jpeg" },
            caption: `*『 Group Name Changed 』*\n\n_🔶 Old Name:_\n*${oldGCName}*\n\n_🔷 New Name:_\n*${args.join(
              " "
            )}*\n`,
          },
          { quoted: m }
        )
      )
      .catch((err) => replay(jsonformat(err)));
  },
};
