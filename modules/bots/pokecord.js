module.exports.run = async (client, msg, args) => {

    if(client.pokecord.has(client.user.id)) {
      client.pokecord.delete(client.user.id)
      return msg.channel.send('Turned off `pokecord` auto guess.')
    } 
    client.pokecord.set(client.user.id, true)
    return msg.channel.send('Turned on `pokecord` auto guess.')
}