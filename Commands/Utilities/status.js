module.exports = {
    name: "st",
    alias: ["⬇️"],
    desc: "To make sticker",
    category: "Utilities",
    usage: "sticker <reply to image>",
    react: "🍁",
    start: async (Xtroid, m, { text, prefix,quoted,pushName,mime,body }) => {
        if (/image/.test(mime)) {
            let mediaMess = await quoted.download();
           
           
            Xtroid.sendMessage(m.from, {image:mediaMess,caption : "X-Troid"}, { quoted: m })
        }
        else if (/video/.test(mime)) {
            let mediaMess = await quoted.download();
            if ((quoted.msg || quoted).seconds > 50)  return Xtroid.sendMessage(m.from,{text:'Please send video less than 50 seconds.'},{quoted:m})
           
            
             Xtroid.sendMessage(m.from, {video:mediaMess,caption : "X-Troid"}, { quoted: m })
    }else{
        Xtroid.sendMessage(m.from,{text:`Please mention an *image/video* and type *${prefix}s* to create sticker.`},{quoted:m})
    } 
}}