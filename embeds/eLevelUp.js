module.exports.levelUpEmbed = function(client, message, Discord, level) {
    var embed = new Discord.RichEmbed()
        .setTitle(message.author.username)
        .setDescription(`**CONGRATS**\nYou are now level **${level}**!!!`)
        .setColor("#00000")
        .setImage("https://i.ibb.co/cJ5zPSg/L.png");

    message.channel.send({embed: embed});

}