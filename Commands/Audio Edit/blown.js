const { exec } = require("child_process");
const fs = require("fs");
const { getRandom } = require("../../lib/myfunc");

module.exports = {
  name: "blown",
  alias: ["blowneffect"],
  desc: "To add blown effect in a song",
  category: "Audio Edit",
  usage: "blown <reply to audio>",
  react: "🍁",
  start: async (Xtroid, m, { text, prefix, quoted, pushName, mime, body }) => {
    let media = await Xtroid.downloadAndSaveMediaMessage(quoted);
    let set = "-af acrusher=.1:1:40:0:log";
    let ran = getRandom(".mp3");
    try {
      exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
        fs.unlinkSync(media);
        if (err) return m.reply("An error Occurd !");
        let buff = fs.readFileSync(ran);
        Xtroid.sendMessage(
          m.from,
          { audio: buff, mimetype: "audio/mpeg" },
          { quoted: m }
        );
        fs.unlinkSync(ran);
      });
    } catch (e) {
      m.reply("An error Occurd ! Please mention an Audio!");
    }
  },
};