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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94727323719";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_18_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICA3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MixcbiAgICAgICAgMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA5MCxcbiAgICAgICAgODksXG4gICAgICAgIDQyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcxLFxuICAgICAgICA3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4OSxcbiAgICAgICAgODIsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICA3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRenJOdWdhNjZGaHVNVWp5VlhHcjlqMmRlWVpOU2g5bXhnN21jd3Z5djcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5cW4yRkVaWFFxT3U5aURmTWZIZjJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiNDNmNWRhLWQzNjEtNDE1Mi1iNjk2LTA3ZjdkMmE1Y2RjMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAxMSxcbiAgICAgIDE5OSxcbiAgICAgIDE3MSxcbiAgICAgIDAsXG4gICAgICA1NSxcbiAgICAgIDIwMCxcbiAgICAgIDE5MyxcbiAgICAgIDE5MCxcbiAgICAgIDE0NSxcbiAgICAgIDMyLFxuICAgICAgMTg5LFxuICAgICAgMTE2LFxuICAgICAgMTM3LFxuICAgICAgMTk0LFxuICAgICAgMTgyLFxuICAgICAgMTEwLFxuICAgICAgNDUsXG4gICAgICA4NyxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgMjM2LFxuICAgICAgMzgsXG4gICAgICAxMDUsXG4gICAgICAyNTEsXG4gICAgICAxMTgsXG4gICAgICAyNDgsXG4gICAgICAxMzMsXG4gICAgICAxNSxcbiAgICAgIDM4LFxuICAgICAgMjM2LFxuICAgICAgMjQzLFxuICAgICAgOTQsXG4gICAgICAxNTYsXG4gICAgICAzOSxcbiAgICAgIDcyLFxuICAgICAgNjEsXG4gICAgICA2NCxcbiAgICAgIDIxNixcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIRFpUVDhGRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjczMjM3MTk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU2MzYyNzU1OTQwNDI1OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hMNk5zQ0VOSCtqck1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxRHBWZUQrY2pNUGFPeTUrZ0UyOUZWR1NHb3lMdFo0dE5PWkJDZ1ZnY1RjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxxZEF1ZjVXdmIrWkxnLzBra1dKVVNCN20yZXk3VEFUZlFhMllDSXpVTm90aXVXNFBBSzJXdE9WRXRBeERPcmdJcWthYy9OUUNobmFaQmg5RVlaU0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllXekNrZnpNVjJrQkRpbjlnNWE0aDdWWW9ibWtvTmNxNk5ldmExYTU0WWJ3b2hLc0VqZlVuSVdXY1lrZWNUNHNFTmhRUmNtMzNic0h0SjJSY3JyS2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI3MzIzNzE5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODEzMDc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEUvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQRS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
