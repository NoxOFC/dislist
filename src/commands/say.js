const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    let msg = args.join(" "); //setando....

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: | ${message.author} You dont have permission for this!`);

  message.delete().catch(O_o => {});

    if (!msg) return message.channel.send(`:x: | ${message.author} Você precisa escrever algo para eu falar!`); //verificando se há alguma mensagem

    message.channel.send(`${msg}`) //comando para o bot falar sua mensagem
}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
};

exports.help = {
    name: "say",
    description: "",
    usage: ""
};

