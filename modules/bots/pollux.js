module.exports.run = async (client, msg, args) => {

    if(client.pollux.has(client.user.id)) {
      client.pollux.delete(client.user.id)
      return msg.channel.send('Turned off `pollux` auto pick.')
    } 
    client.pollux.set(client.user.id, true)
    return msg.channel.send('Turned on `pollux` auto pick.')
}