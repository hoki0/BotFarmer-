


const Discord = require('discord.js')
const fs = require('fs')
const pokemons = require('./json/pokemons.json')
let client = new Discord.Client()
const chalk = require('chalk')
const { animateString } = require('./functions')
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

  if(msg.content.match(/(Hurry and pick it up with `~grab`)/)) {
      console.log(msg.author.tag)
  }
  if(client.slotbot.has(client.user.id) && msg.author.id === "346353957029019648" && msg.content.match(/(Hurry and pick it up with `~grab`)/)) {
      msg.channel.send('~grab')
  }

  if(client.pollux.has(client.user.id) && msg.author.id === "578913818961248256" && msg.content.match(/(Type `pick` for a chance)/)) {
    msg.channel.send('pick')
    }

  if(client.pokecord.has(client.user.id) && msg.author.id === "365975655608745985" && msg.embeds[0].description.match(/(Guess the pokémon and type)/)) {
      msg.channel.send(`p!catch ` + pokemons[Math.floor(Math.random() * pokemons.length)].toLowerCase())
  }

  if (!client.commands.get(cmd)) return;

  client.commands.get(cmd).run(client, msg, args);
})

client.on('ready', async () => {
    
    client.slotbot = new Discord.Collection()
    client.pokecord = new Discord.Collection()
    client.pollux = new Discord.Collection()

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
    console.log(chalk.rgb(255,20,147)('───────────────────────────────────────────────────────────────────────────────────'))
    console.log(chalk.hex("#FFB6C1")("Bot Farmer") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`${client.user.tag}`))

    



})
client.login('Insert Token')
