let {RichEmbed} = require("discord.js");
module.exports.run = (client) => {
    console.log(`
    Bot Account: ${client.user.tag}
    Bot ID: ${client.user.id}
    Server Count: ${client.guilds.size}
    Emoji Count: ${client.emojis.size}
    Channel Count: ${client.channels.size}
    User Count: ${client.users.size}
    `);
    client.user.setPresence({
        status: "Online",
        game: {
         name: "Kerblam is in ${client.guilds.size}Servers atm| Join Kerblam's Support Server https://discord.gg/cmymsAY",
         type: "PLAYING"
       }
    })
  let embed = new RichEmbed()
    .setAuthor(client.user.tag, client.user.displayAvatarURL)
    .setColor(`#FF000`)
    .setTitle(`Kerblam Online`)
    .setTimestamp()
    client.channels.get("521023970007449610").send(embed)
}
