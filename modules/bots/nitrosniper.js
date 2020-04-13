module.exports.run = async (client, msg, args) => {

    if(client.nitrosniper.has(client.user.id)) {
        client.nitrosniper.delete(client.user.id)
        return msg.channel.send('Turned off `nitro` sniper.')
      } 
      client.nitrosniper.set(client.user.id, true)
      return msg.channel.send('Turned on `nitro` sniper.')

   
}