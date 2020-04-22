exports.run = (client, message, args, sql, Discord) => {
var embed = new Discord.RichEmbed()
    .setTitle("Selva Bot")
    .setDescription("If you are having difficulty with the bot please come by to our Support Server and we can help as much as we can!\n[**Click Here**](https://discord.gg/7AquY2K)")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    message.channel.send({embed: embed});
}