let interval;
const { farmXP } = require('../../functions')
module.exports.run = async (client, msg, args) => {

    
    if(!interval) {
        client.mee6.set(client.user.id, true)
        msg.channel.send('Now starting to farm xp with MEE6 in ' + msg.channel + '.')
        interval = setInterval(async function() {  msg.channel.send(await farmXP()) }, 5000)
        return;
    }

    clearInterval(interval)
    interval = null;
    client.mee6.delete(client.user.id)
    msg.channel.send('Stopped farming MEE6 xp.')


}
