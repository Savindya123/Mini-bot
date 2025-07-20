
client.on('message', async (msg) => {
  const contact = await msg.getContact();
  const isInContacts = contact.isMyContact;

  if (!isInContacts) {
    const replyText = `*Hello !* ${pushname} 👋

🙏 *Welcome To Rajindu Nimsara Personal chat,*

*╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」───●●►*
 *|*
 *| 🤖 I am  :- Rajindu Nimsara Personal Assistant 🙂*
 *|*
 *|*👾 *My Name :-  NIMSARA-MD*
 *|*
 *| 👤 Owner :- R.Rajindu Nimsara*
 *|*
 *| ☎️ Contact :- +94766351670*
 *|*
*╰──────────●●►*

*🔢 Reply below number*

1 │❯❯◦ To Connect With *Rajindu Nimsara*

2 │❯❯◦ To Use The *NIMSARA-MD WHATSAPP BOT* 

> *CREATED BY MR.RAJINDU NIMSARA*
> ㋛ 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐍𝐈𝐌𝐒𝛥𝐑𝛥 〽️`;

    await msg.reply(replyText);
  }
});

