
const chalk = require('chalk')
const ignoreChars = /[^!-~]/g;
const delay = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));

module.exports = class Functions {


    static intOnly(str) {
            let characters = str.split("")
            
            for (let i = characters.length - 1; i >= 0; i--) {
              
              if (isNaN(Number(characters[i]))) {
               let index = characters.findIndex(t => t == characters[i])
                       characters.splice(index, 1)
              }
            }
            
            let toInt = parseInt(characters.join(""))
            
            return toInt;
            }
             static depAll(msg, client) {

              setInterval(() => {
                msg.channel.send('pls dep all')
              }, 2000000);
            
            }

             static async intervals(msg) {


              setInterval(() => {
                msg.channel.send('pls beg')
              }, 62000);
            
            
              setInterval(async () => {
                msg.channel.send('pls search')
                const response = await msg.channel.awaitMessages(res => res.author.id === "270904126974590976", {
                    max: 1,
                    time: 10000,
                })


                const words = response.first().content.split("\n").slice(1).join(" ").split("`").slice(1)
                let newArr = []
                for(let i = 0; i < words.length; i++) {
                if(words[i].length && !words[i].includes(",")) {
                    newArr.push(words[i])
                }
                }
                msg.channel.send(newArr[Math.floor(Math.random() * newArr.length)])
              }, 64000);

            }

  

            static async owobot(channel) {
     

            
              setInterval(async () => {
      
              await channel.send('owo crate')

              sleep(Math.random() * (2000 - 1000) + 1000)
      
              await channel.send('owo daily')
      
              sleep(Math.random() * (2000 - 1000) + 1000)
      
              await channel.send('owo lootbox')
      
              sleep(Math.random() * (2000 - 1000) + 1000)
      
              await channel.send('owo hunt')
      
              let hunt = await channel.awaitMessages(res => res.author.id === "408785106942164992", {
                  max: 1, 
                  time: 10000,
              })
       
          
              if (!hunt.size) return;
      
      
              sleep(Math.random() * (2000 - 1000) + 1000)
             await channel.send('owo sell ' + hunt.first().content.split("**")[3])
      
      
      
      
            
             sleep(Math.random() * (2000 - 1000) + 1000)
      
      
             await channel.send('owo battle')



      
      
      
      
              /*
                  channel.send('owo balance')
      
                  let responseBal = await channel.awaitMessages(res => res.author.id === "408785106942164992", {
                      max: 1,
                      time: 30000,
                  })
      
                  if(!responseBal.size) return;
      
                  let balance = removeLetters(responseBal.first().content.split(",")[1])
                  */
                 sleep(Math.random() * (2000 - 1000) + 1000)
                
            
                  await channel.send('owo weapons')
                  let weapons = await channel.awaitMessages(res => res.author.id === "408785106942164992", {
                      max: 1,
                      time: 30000,
                  })
          
                  if(weapons.first().content.match(/(you do not have)/)) return;
                  let actualWeapons = weapons.first().embeds[0].description.split("\n").slice(7).join(" ")
          
                  sleep(Math.random() * (2000 - 1000) + 1000)
      
                  if(actualWeapons.match(/(epic)/)) {
                      await channel.send('owo sell epicweapons')
                  } else if(actualWeapons.match(/(rare)/)) {
                      await channel.send('owo sell rareweapons')
                  } else if(actualWeapons.match(/(uncommon)/)) {
                      await channel.send('owo sell uncommonweapons')
                  } else if(actualWeapons.match(/(common)/)) {
                      await channel.send('owo sell commonweapons')
                  } 
      
      
      
      
              }, 45000)
      
          }
}

function sleep(delay) {
  var start = new Date().getTime()
  while (new Date().getTime() < start + delay);
}

function rainbow(string, offset) {
  if (!string || string.length === 0) {
    return string;
  }

  const hueStep = 360 / string.replace(ignoreChars, '').length;

  let hue = offset % 360;
  const characters = [];
  for (const character of string) {
    if (character.match(ignoreChars)) {
      characters.push(character);
    } else {
      characters.push(chalk.hsl(hue, 100, 50)(character));
      hue = (hue + hueStep) % 360;
    }
  }

  return characters.join('');
}