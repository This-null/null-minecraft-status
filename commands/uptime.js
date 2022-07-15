const { MessageEmbed } = require("discord.js");
const config = require('../config.json');
const moment = require("moment");
moment.locale("tr")

var prefix = config.prefix;

exports.execute = async (client, message, args) => {

  var d = Math.floor(client.uptime / 86400000);
  var h = Math.floor(client.uptime / 3600000) % 24;
  var m = Math.floor(client.uptime / 60000) % 60;
  var s = Math.floor(client.uptime / 1000) % 60;
    
    const output = `${d} gün, ${h} saat, ${m} dakika, ${s} saniye`;
     
  const uptime = new MessageEmbed()
  .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 })})
  .setDescription(`<@${client.user.id}> adlı bot "\`${output}\`"dir çalışmakta.`)
  .setFooter({ text: message.author.tag, iconURL: message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 })})
  .setTimestamp()
  message.channel.send({ embeds: [uptime] })
  message.react("✅"); 

};
exports.conf = {
  command: "uptime",
  description: "",
  aliases: []
}
