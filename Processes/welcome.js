const { mk } = require("../Database/dataschema.js");
require("../Core.js");

module.exports = async (Xtroid, anu) => {
  try {
    let metadata = await Xtroid.groupMetadata(anu.id);
    let participants = anu.participants;
    let desc = metadata.desc;
    if (desc == undefined) desc = "No Description";

    for (let num of participants) {
      try {
        ppuser = await Xtroid.profilePictureUrl(num, "image");
      } catch {
        ppuser = botImage4;
      }

      if (anu.action == "add") {
        let WELstatus = await mk.findOne({ id: m.from });

        var WelcomeFeature = "false";
        if (WELstatus) {
          WelcomeFeature = WELstatus.switchWelcome || "false";
        }
        let WAuserName = num;
        console.log(
          `\n+${WAuserName.split("@")[0]} Joined/Got Added in: ${
            metadata.subject
          }\n`
        );
        Xtext = `
Hello @${WAuserName.split("@")[0]} Senpai,

Welcome to *${metadata.subject}*.

*🧣 Group Description 🧣*

${desc}

*Thank You.*
  `;
        if (WelcomeFeature == "true") {
          Xtroid.sendMessage(anu.id, {
            image: { url: ppuser },
            caption: Xtext,
            mentions: [num],
          });
        }
      } else if (anu.action == "remove") {
        let WELstatus = await mk.findOne({ id: m.from });

        var WelcomeFeature = "false";
        if (WELstatus) {
          WelcomeFeature = WELstatus.switchWelcome || "false";
        }
        let WAuserName = num;
        console.log(
          `\n+${WAuserName.split("@")[0]} Left/Got Removed from: ${
            metadata.subject
          }\n`
        );
        Xtext = `
  @${WAuserName.split("@")[0]} Senpai left the group.
  `;
        if (WelcomeFeature == "true") {
          Xtroid.sendMessage(anu.id, {
            image: { url: ppuser },
            caption: Xtext,
            mentions: [num],
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
