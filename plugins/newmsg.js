
client.on('message', async msg => {
  const contact = await msg.getContact();

  if (!contact.isMyContact) {
    const buttons = new Buttons(
      `*Hello !* ${pushname}👋\n\n🙏 *Welcome To Rajindu Nimsara Personal chat,*\n\n╭─「 ꜱᴛᴀᴛᴜꜱ 」───●●►\n| 🤖 I am :- Rajindu Nimsara Assistant\n| 👾 My Name :- NIMSARA-MD\n| 👤 Owner :- R.Rajindu Nimsara\n| ☎️ Contact :- +94766351670\n╰──────────●●►\n\n To Connect With *Rajindu Nimsara* - [Connect owner]\n\nTo Use The *NIMSARA-MD WHATSAPP BOT* - [.alive👋]\n\n🔘 Choose an option below:\n\n\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️`,
      [
        { body: 'Connect Owner' },
        { body: '.alive 👋' }
      ],
      '*Please wait a few minutes to Connect with Rajindu Nimsara.* 💬\n\n\n*රජිඳු නිම්සර සමඟ සම්බන්ධ වීමට කරුණාකර මිනිත්තු කිහිපයක් රැඳී සිටින්න.* 💬',
      '👋 *HI* ${pushname} 😎\n\n\n✅ *Hello, I am Alive Now!*\n\n*╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」*\n* | 🤖 Bot :- 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃 *\n* | 👤 Owner :- R.Rajindu Nimsara *\n* | ☎️ Contact :- +94766351670 *\n* | ✒️ Prefix :- . *\n* | 🧬 Version :- 1.0.5 *\n*╰──────────●●►*\n\n💬 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 © NIMSARA-MD❤️🩹 ✨\n\n*🔢 Reply below number*\n\n.1 │❯❯◦ MENU\n.2 │❯❯◦ SPEED\n\n> Developed by MR.Rajindu Nimsara\n> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️𝐃'
    );
    
    await client.sendMessage(msg.from, buttons);
  }
});
