module.exports = {
    name: "dm",
    category: "moderation",
    description: "Dms all",
    usage: "<usage>",
    run: async (client, message, args) => {
        bot.on("message",message=>{

            if(message.author.bot) return
            if(message.content.startsWith(prefix +"dm")){
                
                let msg = message.content.slice((prefix +"dm ").length)
          
              if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":pick: :airplane: Hmm that command doesn't exist did the plane stopped working? :airplane: :pick:");
          
              try{
                message.guild.members.forEach(member => {
                  if (member.id != bot.user.id && !member.user.bot) member.send(msg);
                });}catch(e){
                  
                }
                return message.channel.send(":pick: :airplane: I'm giving dm to everyone it may take a while to.")
            }
          
          })
    }
}