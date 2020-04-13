const Discord = require('discord.js')
const fs = require('fs')
const opn = require('opn');
const pokemons = require('./json/pokemons.json')
let client = new Discord.Client()
const request = require('axios')
const chalk = require('chalk')
const regex = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/
client.commands = new Discord.Collection()
fs.readdirSync("./modules").forEach(folders => {
    fs.readdirSync(`./modules/${folders}`).forEach(i => { 
     if (!i.endsWith(".js")) return;
     let commandFile = i.split(".")[0].trim()
     client.commands.set(commandFile, require(`./modules/${folders}/${commandFile}.js`))
    })

})

client.on('message', (msg) => {
    

  const args = msg.content.slice("?".length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  
  if(msg.content.match(regex) && client.nitrosniper.has(client.user.id)) {
      let nitrogift = msg.content.match(regex)[0].split("/")
      let url = `https://discordapp.com/api/v6/entitlements/gift-codes/${nitrogift[nitrogift.length - 1]}/redeem`
          request({
              method:"POST",
              url: url,
              headers: {
                  'authorization': client.token,
              }
          }).then(() => {
            console.log(chalk.rgb(70, 181, 15).bold("NITRO SNIPED (VALID CODE)"))
            console.log(chalk.hex("#FFB6C1")("User") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`${msg.author.tag} `))
            console.log(chalk.hex("#FFB6C1")("Guild") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`${msg.guild.name} `))
            console.log(chalk.hex("#FFB6C1")("Channel") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(msg.channel.name + ` (${msg.channel.id})`))
            console.log(chalk.hex("#FFB6C1")("URL") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(msg.content.match(regex)[0]))
            console.log(chalk.hex("#FFB6C1")("Go To") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}`))
            console.log(chalk.rgb(255,20,147)('───────────────────────────────────────────────────────────────────────────────────'))
        }).catch(e => {
            console.log(chalk.rgb(70, 181, 15).bold("NITRO SNIPED (INVALID GIFT-CODE)"))
            console.log(chalk.hex("#FFB6C1")("User") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`${msg.author.tag} `))
            console.log(chalk.hex("#FFB6C1")("Guild") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`${msg.guild.name} `))
            console.log(chalk.hex("#FFB6C1")("Channel") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(msg.channel.name + ` (${msg.channel.id})`))
            console.log(chalk.hex("#FFB6C1")("URL") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(msg.content.match(regex)[0]))
            console.log(chalk.hex("#FFB6C1")("Go To") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}`))
            console.log(chalk.rgb(255,20,147)('───────────────────────────────────────────────────────────────────────────────────'))
        })
  }


  if(msg.author.id === "408785106942164992" && msg.content.match(/(Are you a real human?)/) && msg.channel.type === "dm") {
      opn("verification.txt")
  }

  
  if(msg.embeds.length && msg.author.id === "294882584201003009" && client.giveaways.has(client.user.id)) {
      if(msg.embeds[0].description.match("React with")) {
          msg.react("🎉")
          console.log(chalk.rgb(70, 181, 15).bold("GIVEAWAY SNIPED"))
          console.log(chalk.hex("#FFB6C1")("Guild") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`${msg.guild.name} `))
          console.log(chalk.hex("#FFB6C1")("Channel") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(msg.channel.name + ` (${msg.channel.id})`))
          console.log(chalk.hex("#FFB6C1")("Go To") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}`))
          console.log(chalk.rgb(255,20,147)('───────────────────────────────────────────────────────────────────────────────────'))

      }

  }

  if(msg.content.match(/(Hurry and pick it up with `~grab`)/)) {
      console.log(msg.author.tag)
  }
  if(client.slotbot.has(client.user.id) && msg.author.id === "346353957029019648" && msg.content.match(/(Hurry and pick it up with `~grab`)/)) {
      msg.channel.send('~grab')
  }

  if(client.pollux.has(client.user.id) && msg.author.id === "578913818961248256" && msg.content.match(/(Type `pick` for a chance)/)) {
    msg.channel.send('pick')
    }


    if (msg.embeds.length && msg.author.id === '365975655608745985') {
        if(client.pokecord.has(client.user.id) && msg.embeds[0].description.match(/(Guess the pokémon and type)/)) {
            msg.channel.send(`p!catch ` + pokemons[Math.floor(Math.random() * pokemons.length)].toLowerCase())
        }
    }

  if (!client.commands.get(cmd)) return;

  msg.delete()
  client.commands.get(cmd).run(client, msg, args);
})

client.on('ready', async () => {

    
    client.slotbot = new Discord.Collection()
    client.pokecord = new Discord.Collection()
    client.dankmemer = new Discord.Collection()
    client.owobot = new Discord.Collection()
    client.giveaways = new Discord.Collection()
    client.pollux = new Discord.Collection()
    client.nitrosniper = new Discord.Collection()

    console.log();
    console.log(chalk.cyan(`
    ██████╗  █████╗ ████████╗  ███████╗ █████╗ ██████╗ ███╗  ███╗███████╗██████╗
    ██╔══██╗██╔══██╗╚══██╔══╝  ██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝██╔══██╗
    ██████╦╝██║  ██║   ██║     █████╗  ███████║██████╔╝██╔████╔██║█████╗  ██████╔╝
    ██╔══██╗██║  ██║   ██║     ██╔══╝  ██╔══██║██╔══██╗██║╚██╔╝██║██╔══╝  ██╔══██╗
    ██████╦╝╚█████╔╝   ██║     ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██║  ██║
    ╚═════╝  ╚════╝    ╚═╝     ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝ `))

    console.log(chalk.red("                                                     Created By intelligence#5555 "))
    console.log();
    console.log();
    console.log(chalk.rgb(255,20,147)(`
    ███╗   ███╗███████╗███╗  ██╗██╗   ██╗
    ████╗ ████║██╔════╝████╗ ██║██║   ██║
    ██╔████╔██║█████╗  ██╔██╗██║██║   ██║
    ██║╚██╔╝██║██╔══╝  ██║╚████║██║   ██║
    ██║ ╚═╝ ██║███████╗██║ ╚███║╚██████╔╝
    ╚═╝    ╚═╝╚══════╝╚═╝   ╚══╝ ╚═════╝ `));
    console.log();
    console.log();
    console.log(chalk.rgb(255,20,147)('───────────────────────────────────────────────────────────────────────────────────'))
    console.log(chalk.hex("#FFB6C1")("?slotbot") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")("Enables auto ~grab for slotbot."))
    console.log(chalk.hex("#FFB6C1")("?owobot") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")("Starts playing OwO Bot in the channel you use the command in."))
    console.log(chalk.hex("#FFB6C1")("?pollux") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")("Enables auto pick for pollux."))
    console.log(chalk.hex("#FFB6C1")("?dankmemer") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")("Starts playing DankMemer Bot in the channel you use the command in."))
    console.log(chalk.hex("#FFB6C1")("?pokecord") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")("Enables auto guessing for pokecord spawns."))
    console.log(chalk.hex("#FFB6C1")("?giveaways") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")("Snipe reacts giveaways with the giveaway bot when one is created."))
    console.log(chalk.hex("#FFB6C1")("?nitrosniper") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")("Snipes nitro codes sent in chats and gives you a detailed message in console."))
    console.log(chalk.hex("#FFB6C1")("?status") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")("Shows which modules you have enabled and which are disabled."))

    console.log(chalk.rgb(255,20,147)('───────────────────────────────────────────────────────────────────────────────────'))
    console.log(chalk.hex("#FFB6C1")("Bot Farmer") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`${client.user.tag}`))
    console.log(chalk.rgb(255,20,147)('───────────────────────────────────────────────────────────────────────────────────'))

    



})
