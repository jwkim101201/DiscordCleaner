/**
 * 
 * @param {import('discord.js').Message} msg 
 */
module.exports = async (msg) => {
    (await msg.guild.fetchTemplates()).forEach((template) => {
        template.delete()
    })
}