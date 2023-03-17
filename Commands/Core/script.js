const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "🍁",
    category: "Core",
    start: async(Xtroid, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/BG.jpg')
        let repoInfo = await axios.get('https://github.com/nxt-owner/Xtroid')
        let repo = repoInfo.data
        let txt = `      🧣 *${botName}'s Script* 🧣\n\n*🎀 Total Forks:* ${repo.forks_count}\n*⭐ Total Stars:* ${repo.stargazers_count}\n*📜 License:* ${repo.license.name}\n*📁 Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n*📅 Last Updated:* ${repo.updated_at}\n\n*🔗 Repo Link:* ${repo.html_url}\n\n❝ Dont forget to give a Star ⭐ to the repo. It's made with restless harkwork by *NXT-Tech*. ❞\n\n*©️ NXT-Tech - 2023*`
        await Xtroid.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}