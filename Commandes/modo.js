const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
const modoEmbed = new Discord.MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('⚒ ・Liste des commandes de modération.')
	.setURL('https://twitter.com/kretzouu')
	.setAuthor(config.Speudo, config.Image, 'https://twitter.com/kretzouu')
	.setThumbnail(config.Image)
	.addFields(
    { name: '🗑-clear', value: '(Pour supprimer des messages.)' },
	{ name: '💬-msg', value: '(Pour envoyer un message avec le bot.)' },
    { name: '⚠️-kick', value: '(Pour kick.)' },
    { name: '❌-ban', value: '(Pour ban.)' },

    )
	.setTimestamp()
    .setFooter(config.Speudo, config.Image);
    message.channel.send(modoEmbed)
}

module.exports.help = {
    name:"modo"
}