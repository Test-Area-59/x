module.exports = {
  name: "tg",
  alias: ["htag",],
  desc: "Tag all group member without @ mention",
  category: "Group",
  usage: "htag <your message>",
  react: "🍁",
  start: async (
    Xtroid,
    m,
    { text, prefix, isAdmin, participants, args }
  ) => {
    if (!isAdmin)
      return Xtroid.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

      var message = "*『 Attention Here 』*";

    if(m.quoted){
        message = "*『 Attention Here 』*";
      }
    else if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ''}`;
    }
    else if(args[0]){
      message = args.join(' ');
    }
    else if(text ===''){
      message = "*『 Attention Here 』*";
    }
   
    else{
      message = "*『 Attention Here 』*";
    }
    await Xtroid.sendMessage(
      m.from,
      { text: message, mentions: participants.map((a) => a.id) },
      { quoted: m }
    );
  },
};
