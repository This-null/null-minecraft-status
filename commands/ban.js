const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const moment = require("moment");
moment.locale("tr")

var prefix = config.prefix;

exports.execute = async (client, message, args) => {

  if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("Yeterli yetkiniz yok.")
	  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
   if(!user) return message.channel.send("Banlamak istediğiniz kişiyi belirtin.")
	   
   
const üye = message.guild.members.cache.get(user.id)


üye.ban()




const ban = new MessageEmbed()
.setColor("#5865F2")
.setDescription(`${user}, isimli kişi sunucudan uzaklaştırıldı.`)




message.channel.send({embeds:[ban]})
   
  message.react("☑️"); 

};
exports.conf = {
  command: "ban",
  description: "",
  aliases: []
}