const Discord = require('discord.js');
const client = new Discord.Client();

const chalk = require('chalk');
const moment = require('moment');

require('moment-timezone');
require('dotenv').config();

client.on('ready', () => {

    // Edit's the channel every 10 minutes
    setInterval(() => {
        const timeNowUpdate = moment().tz(process.env.TIME1).format('LT z');
        client.channels.cache.get(process.env.CHANNEL1).edit({ name: `${process.env.MEMBER1} ${timeNowUpdate}` }, 'Clock update').catch(() => { });

        const timeNowUpdate2 = moment().tz(process.env.TIME2).format('LT z');
        client.channels.cache.get(process.env.CHANNEL2).edit({ name: `${process.env.MEMBER2} ${timeNowUpdate2}` }, 'Clock update').catch(() => { });

        const timeNowUpdate3 = moment().tz(process.env.TIME3).format('LT z');
        client.channels.cache.get(process.env.CHANNEL3).edit({ name: `${process.env.MEMBER3} ${timeNowUpdate3}` }, 'Clock update').catch(() => { });

        const timeNowUpdate4 = moment().tz(process.env.TIME4).format('LT z');
        client.channels.cache.get(process.env.CHANNEL4).edit({ name: `${process.env.MEMBER4} ${timeNowUpdate4}` }, 'Clock update').catch(() => { });
    }, 600000);

    console.log(chalk.greenBright("[READY]"), `Logged in as ${client.user.tag} at ${moment().format("DD MMMM YYYY, HH:mm:ss")}`);
})

client.login(process.env.TOKEN);