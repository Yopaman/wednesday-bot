const schedule = require('node-schedule')
const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()

client.login(config.discord_token)

client.on('ready', () => {
	console.log('Pret !')
})

let j = schedule.scheduleJob('0 0 * * 3', () => {
    client.channels.find('id', '410542320786735116').send({files: ['wednesday.jpg']})
})