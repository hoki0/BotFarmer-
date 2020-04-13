module.exports.run = async (client, msg, args) => {

    if(client.giveaways.has(client.user.id)) {
        client.giveaways.delete(client.user.id)
        return msg.channel.send('Turned off `giveaway` sniper.')
      } 
      client.giveaways.set(client.user.id, true)
      return msg.channel.send('Turned on `giveaway` sniper.')

   
}