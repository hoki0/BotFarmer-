let interval;
const { farmXP } = require('../../functions')
module.exports.run = async (client, msg, args) => {

    if(!interval) {
        client.amaribot.set(client.user.id, true)
        msg.channel.send('Now starting to farm xp with amaribot in ' + msg.channel + '.')
        interval = setInterval(async function() {  msg.channel.send(await farmXP()) }, 9000)
        return;
    }

    clearInterval(interval)
    interval = null;
    client.amaribot.delete(client.user.id)
    msg.channel.send('Stopped farming amaribot xp.')


}
