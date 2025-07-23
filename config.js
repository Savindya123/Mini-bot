const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "utp13AYb#RdMr2GERp3r-QwUfSJOZKUchDSGOJPBufDeS-s1H1sQ",
ALIVE_IMG : process.env.ALIVE_IMG || "https://pomf2.lain.la/f/uzu4feg.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "👋 *HI* ${pushname} 😎\n\n\n✅ *Hello, I am Alive Now!*\n\n*╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」*\n* | 🤖 Bot :- 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃 *\n* | 👤 Owner :- R.Rajindu Nimsara *\n* | ☎️ Contact :- +94766351670 *\n* | ✒️ Prefix :- . *\n* | 🧬 Version :- 1.0.5 *\n*╰──────────●●►*\n\n💬 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 © NIMSARA-MD❤️🩹 ✨\n\n*🔢 Reply below number*\n\n.1 │❯❯◦ MENU\n.2 │❯❯◦ SPEED\n\n> Developed by MR.Rajindu Nimsara\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃",
ALIVE_VOICE : process.env.ALIVE_VOICE || "",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
