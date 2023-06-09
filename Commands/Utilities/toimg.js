const {getRandom } =require("../../lib/myfunc");
const { exec } = require("child_process");
const fs = require("fs");

module.exports = {
  name: "toimg",
  alias: ["topic","topicture", "toimage"],
  desc: "To get image from sticker",
  category: "Utilities",
  usage: "toimg <reply to non-animated sticker>",
  react: "🍁",
  start: async (Xtroid, m, { text, prefix, quoted, pushName, mime, body }) => {
    if (/webp/.test(mime)) {
      let mediaMess = await Xtroid.downloadAndSaveMediaMessage(quoted)
      let ran = await getRandom(".png");
      exec(`ffmpeg -i ${mediaMess} ${ran}`, (err) => {
        fs.unlinkSync(mediaMess);
        if (err){
            Xtroid.sendMessage(m.from, { text: `Please mention a *Non-animated* sticker to process ! \n\nOr use *${prefix}togif* / *${prefix}tomp4*  to process *Animated* sticker !` }, { quoted: m });
            return;
        }
        let buffer = fs.readFileSync(ran);
        Xtroid.sendMessage(m.from, { image: buffer, caption:`_Converted by:_  *${botName}*\n` }, { quoted: m });
        fs.unlinkSync(ran);
      });
    } else {
      Xtroid.sendMessage(
        m.from,
        {
          text: `Please mention a *Non-animated* sticker and type *${prefix}toimg* to get image from sticker.`,
        },
        { quoted: m }
      );
    }
  },
};
