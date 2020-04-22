exports.run = (client, message, args, sql, Discord) => {
var embed = new Discord.RichEmbed()
    .setTitle("Selva Bot")
    .setDescription("Thank you for choosing SelvaBot! We are still in production so please report any bugs. [**Click Here**](https://discordapp.com/api/oauth2/authorize?client_id=702569776819601488&permissions=8&scope=bot) to add to your server.")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    message.channel.send({embed: embed});
}