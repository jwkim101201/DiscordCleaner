/**
 * 
 * @param {import('discord.js').Message} msg 
 */
module.exports = async (msg) => {
    msg.guild.fetchWebhooks().then(wh => {
        wh.delete()
    })
}