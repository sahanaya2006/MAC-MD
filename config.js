const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94720797915")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Sahan:Sahan123456@cluster0.2s8k9t2.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/sahanaya2006/MAC-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '256705036288'
global.devs = '256705036288';
global.website = 'https://github.com/sahanaya2006/MAC-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/8ec95da555e8347af71bd.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Sahan 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Sahan Maduwantha' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? true : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'mac' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'MAC-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hellow' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '5c3c4bfe-f065-48d0-819c-7a2b2a89b105' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'macsahanaya250' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'MAC',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
