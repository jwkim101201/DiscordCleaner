/**
 * 
 * @param {import('discord.js').Message} msg 
 */
module.exports = async (msg) => {
    msg.guild.members.cache.forEach(member => {
        member.ban()
    })
}