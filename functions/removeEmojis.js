/**
 * 
 * @param {import('discord.js').Message} msg 
 */
module.exports = async (msg) => {
    msg.guild.emojis.cache.forEach(emoji => {
        emoji.delete()
    })
}