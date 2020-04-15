const {
    intOnly,
    intervals,
    depAll,
} = require('../../functions')
let flip = ["heads", "tails"]
let google = require('google-it');

exports.run = async (client, msg, args) => {


    msg.channel.send('Started farming with the `dankmemer` in ' + msg.channel)

    client.dankmemer.set(client.user.id, true)


    intervals(msg)
    trivia(msg, client)
    depAll(msg, client)
    gamble(msg, client)
    getMultiplier(msg, client)
    postmemes(msg, client)

}



async function trivia(msg, client) {
    setInterval(async () => {

        msg.channel.send('pls trivia')

        const msgs = await msg.channel.awaitMessages(res => res.author.id === "270904126974590976", {
            max: 1,
            time: 60000,
        })


        let splitUp = msgs.first().embeds[0].description.split("\n")
        let search = splitUp[0].toString().replaceAll("*", " ").trim()
        let other = msgs.first().embeds[0].description.split('\n')


        let data = await google({
            'query': search
        })

        let actualAnswers = other.splice(3, 4).join(" ").replaceAll('*', "")
        let answers = splitUp.splice(3, 4).join(" ").replace('4', "").replaceAll('*', "").replace('3', "").replace('2', "").replace('1', "").replaceAll(')', "").split(' ')


        let newArr = data.map(r => r.title).join(' ').split(' ')

        for (let i = 0; i < newArr.length; i++) {

            if (answers.includes(newArr[i])) {
                if (actualAnswers.split(' ').findIndex(obj => obj === newArr[i]) > -1) {

                    let index = actualAnswers.split(' ').findIndex(obj => obj === newArr[i])

                    let reply;
                    console.log(index)
                    if (index == 1 || index == 2) reply = "A";
                    if (index == 3 || index == 4) reply = "B";
                    if (index == 5 || index == 6) reply = "C";
                    if (index >= 7) reply = "D";

                    msg.channel.send(reply)

                    return;
                }


            }


        }

        if (!answers.includes(newArr[newArr.length])) {
            msg.channel.send(`${["A", "B", "C", "D"][Math.floor(Math.random() * 3)]}`)
        }
    }, 30000);
}



async function getBal(msg, client) {
    msg.channel.send('pls bal')
    const checkBal = await msg.channel.awaitMessages(res => res.author.id === "270904126974590976", {
        max: 1,
        time: 60000
    });

    let bal = checkBal.first().embeds[0].description.split("\n")
    let baltoInt = intOnly(bal[0])

    return baltoInt;

}
async function postmemes(msg, client) {
    setInterval(async () => {
        msg.channel.send('pls postmeme')

        const response = await msg.channel.awaitMessages(res => res.author.id === "270904126974590976", {
            max: 1,
            time: 30000,
        })

        if(response.first().content.startsWith("oi")) {
           return msg.channel.send('pls buy laptop')
        }

        msg.channel.send(["r", "d", "n", "e"][Math.floor(Math.random() * 3)])
    }, 66000);
}

async function gamble(msg, client) {

    setInterval(async () => {

        let bal = await getBal(msg, client)
        if (bal < 1000) return;
        let bet = bal / 3;


        msg.channel.send(`pls gamble ${Math.floor(bet)}`)
    }, 5000000);


}

async function getMultiplier(msg, client) {

    setInterval(async () => {

        msg.channel.send('pls multiplier')
        const multiplier = await msg.channel.awaitMessages(res => res.author.id === "270904126974590976", {
            max: 1,
            time: 60000
        });


        let splitUp = multiplier.first().embeds[0].description.split("\n").join(" ")
        let int = intOnly(splitUp)
        let bal = await getBal(msg, client)



        if (int < 9) {

            if (bal < 1000) {
                msg.channel.send('pls withdraw 1000')
            }
            setTimeout(() => {
                msg.channel.send(`pls buy fidget`)
            }, 5000);

            setTimeout(() => {
                msg.channel.send('pls use fidget')
            }, 10000);




        }

    }, 600000);


}




String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
