const maker = require('mumaker')

module.exports = {
    name: "blackpink",
    alias: ["bp"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Xtroid, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}blackpink Atlas Bot*`);
        maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${text}`,]).then((data) => Xtroid.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}