const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_22_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDU4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICA0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDY2LFxuICAgICAgICA2OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICA5NixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIck9oOWdyMGRBb3hyamFXNVBVdDBnNk9NTXVkTmVNRnlkNlVBM1NrZFJJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0MTY0NDMyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTM4MzBCNTg1QjE4MkQ5NzczMjExNERDRkNCMTdCMDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NzU1NzIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQxNjQ0MzI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NTBENzk3RDVGMzFERUY2ODNDM0ExOUU0ODJENUI2RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc3NTU3MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODF0bUNvWlJRRFMyclFjVTI0d0FId1wiLFxuICBcInBob25lSWRcIjogXCI2NWNiMGQxYS01ZDAzLTRmZjQtODI1Ny00M2IwZDNmOWE2ODNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTYsXG4gICAgICAyMTQsXG4gICAgICAzNyxcbiAgICAgIDU2LFxuICAgICAgMTUyLFxuICAgICAgMjMwLFxuICAgICAgMjI3LFxuICAgICAgMTgwLFxuICAgICAgMjIsXG4gICAgICAzNixcbiAgICAgIDE4NixcbiAgICAgIDUwLFxuICAgICAgNDgsXG4gICAgICA0NyxcbiAgICAgIDIxNyxcbiAgICAgIDQ1LFxuICAgICAgOTYsXG4gICAgICAyMTMsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMjAsXG4gICAgICAyNDgsXG4gICAgICA1MyxcbiAgICAgIDEwNCxcbiAgICAgIDMxLFxuICAgICAgMTU4LFxuICAgICAgNzYsXG4gICAgICAxOTAsXG4gICAgICAxNDMsXG4gICAgICAxMDUsXG4gICAgICA3MixcbiAgICAgIDcwLFxuICAgICAgMjM0LFxuICAgICAgMjQ4LFxuICAgICAgMTc1LFxuICAgICAgMTIxLFxuICAgICAgMTYyLFxuICAgICAgMTIyLFxuICAgICAgMTc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldUNEVMSE1HXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDE2NDQzMjg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjY0NjkyOTk3Nzc2NjU6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEZWJiaSDwn6WwXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm4veE1JRUVNSytpN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiWEZuSWlCUjRZaVNOTit5azJOaUcvMWdMYjRTYjBVdHRvSU1wbWh1UmtJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm41dnJyc1E4cTR0bERKN0REYlBjWmduVTlVUGx1T29pZ2VCaVF5a0Izbm1qQysvbUluMWRwWjJaZnByK1ppdzgxeVpJd0llNWN6U2ZNWFBWZFllVkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhVaTk4WHVBMWRkQmVVQTZxVVJ6VSt5OUtkMEFOREhacG03TGNOTndvZlVxRGNtYTVaRTRyNis3UnBPWVVsU3NYMW9CV091ZElGTWRxbEZzRjkyNkNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MTY0NDMyODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NzU1NzE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWdmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZ2YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxMENCeHF5SnU0S1BzNkJHdHE5R2s0SzBBM3JGak1IdHpPNXRNR0hNeExzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMTMyODQzMTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzc1NTcxOTk3M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Debrah",
  ownername:process.env.OWNER_NAME|| "Debrah",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
