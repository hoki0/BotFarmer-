const { owobot } = require('../../functions')
module.exports.run = async (client, msg, args) => {

    msg.channel.send('Started farming with the `OwO` bot in ' + msg.channel)
    owobot(msg.channel)
   
}