
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    ChatModification,
    prepareMessageFromContent, 
    relayWAMessage,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown } = require('./lib/leveling.js')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const request = require('request')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const qrkode = require("qrcode")
const yts = require( 'yt-search')
const ytdl = require("ytdl-core")
const { removeBackgroundFromImageFile } = require('remove.bg')
const os = require('os')
const cheerio = require('cheerio')
const util = require('util');
const lolis = require('lolis.life')
const axios = require('axios')
const loli = new lolis()
const { yta, ytv} = require('./lib/y2mate.js')
const { webp2gifFile } = require("./lib/gif.js")
const antifake = JSON.parse(fs.readFileSync('./new/antifake.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const antilink = JSON.parse(fs.readFileSync('./new/antilink.json'))
const samih = JSON.parse(fs.readFileSync('./new/simi.json'))
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const ban = JSON.parse(fs.readFileSync('./datauser/banned.json'))
const imgbb = require('imgbb-uploader');
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'))
const { uploadImages } = require('./lib/uploadimage')
const _leveling = JSON.parse(fs.readFileSync('./new/leveling.json'))
const { addMetadata } = require('./lib/exif.js')
const suprabot = new WAConnection()
const ownername = 'supra-ofc'
const botname = 'LhannaBot'
antidelete = false
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
 thumbnail = fs.readFileSync('./image/odc.jpeg')

prefix = '#'
blocked = []
const vcard = 'BEGIN:VCARD\n'

+ 'VERSION:3.0\n'

+ 'FN: SUPRA \n' // Nome 

+ 'ORG:SUPRA;\n' // Nome bot

+ 'TEL;type=CELL;type=VOICE;waid=559391919748:+55 93 9191-9748\n' // Nomor bot

+ 'END:VCARD' 


const  { ind } = require(`./help`)
lang = ind 

//times
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const salam = moment(Date.now()).tz('America/Sao_Paulo').locale('id').format('a')
const dataa = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
 
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

async function starts() {
	const supra = new WAConnection()
	supra.logger.level = 'warn'
	console.log(banner.string)
	supra.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Digitalize o c??digo qr acima'))
	})

	fs.existsSync('./Suprazi.json') && supra.loadAuthInfo('./Suprazi.json')
	supra.on('connecting', () => {
		start('2', 'LHANNA CONNECTING...')
	})
	supra.on('open', () => {
		success('2', 'LHANNA CONECTADO')
	})
	await supra.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Suprazi.json', JSON.stringify(supra.base64EncodedAuthInfo(), null, '\t'))
supra.on('group-participants-update', async(anu) => {
					try {
						const sendSupImg = async (id, text1, desc1, gam1, but = [], options = {}) => {
							const mediaxxaaaa = await supra.prepareMessage(id, gam1, MessageType.location, {thumbnail: gam1})
							var mhan = mediaxxaaaa.message["ephemeralMessage"] ? mediaxxaaaa.message.ephemeralMessage : mediaxxaaaa
							const buttonMessages = {
								locationMessage: mhan.message.locationMessage,
								contentText: text1,
								footerText: desc1,
								buttons: but,
								headerType: 6
								}
							supra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
						if(antifake.includes(anu.jid)) {
	const mdata = await supra.groupMetadata(anu.jid)
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
				supra.sendMessage(mdata.id, 'Aqui n??o ?? permitido n??meros estrangeiros bye bye???? ??????', MessageType.text)							
				setTimeout(async function () {
							console.log(color('[','white'), color('!','red'), color(']','white'), color('BANINDO O N??MERO FAKE...','red'))
				supra.groupRemove(mdata.id, [num])
					}, )
				}
			}
		}		
if (!welkom.includes(anu.jid)) return
     
						
						const mdata = await supra.groupMetadata(anu.jid)
						console.log(anu)
						num = anu.participants[0]
						let v = supra.contacts[num] || { notify: num.replace(/@.+/, "") };
						anu_user = v.vname || v.notify || num.split("@")[0];
			
						try {
							var ppimg = await supra.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
							} catch (e) {
								ppimg = 'https://i.ibb.co/9YyrL6Y/268fd10a1be6.jpg'
								}
							
						try {
							var byebye = await supra.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`);
							} catch (e) {
								byebye = 'https://i.ibb.co/5sGNF5h/3b01a633dc8f.jpg'
								}		
						try {
							ppgc = await supra.getProfilePicture(anu.jid);
							} catch (e) {
								ppgc = 'https://i.pinimg.com/736x/eb/99/ff/eb99ff0be150691f744183e690f848ce.jpg'
								}
						        imgperfil = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
						      imgperfil2 = await axios.get(`https://tinyurl.com/api-create.php?url=${byebye}`)  
                               shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)				
						let gakloo = [{
										"buttonId": `.owner`,
										"buttonText": {
											"displayText": "Welcome ????"
											},
										"type": "RESPONSE"
										}]
						if (anu.action == 'add' && !num.includes(supra.user.jid)) {
							welcome = await getBuffer(imgperfil.data)						
							try{
							await sendSupImg(mdata.id, `Bem vindo @${num.split('@')[0]} ao grupo ${mdata.subject}`, `??${ownername}`,welcome, [{"buttonId": `.owner`,"buttonText": {"displayText": "Welcome ????"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
								await sendSupImg(mdata.id, `Bem vindo @${num.split('@')[0]} ao grupo ${mdata.subject}`, `??${ownername}`,welcome, [{"buttonId": `.owner`,"buttonText": {"displayText": "Welcome ????"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
						} else if (anu.action == 'remove' && !num.includes(supra.user.jid)) {
							adeus = await getBuffer(imgperfil2.data)
							try{
							await sendSupImg(mdata.id, `Adeus @${num.split('@')[0]}\nN??o volte mas.`, `??${ownername}`,adeus, [{"buttonId": `.owner`,"buttonText": {"displayText": "Bye ????"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							} catch {
							await sendSupImg(mdata.id, `Adeus @${num.split('@')[0]}\nN??o volte mas.`, `??${ownername}`,`Adeus`, [{"buttonId": `.owner`,"buttonText": {"displayText": "Bye ????"},"type": "RESPONSE"}], {contextInfo: { mentionedJid: [num]}})
							}
							
						}
				} catch (e) {
					console.log('Error : %s', color(e, 'red'))
					}
				})
				
	        
	supra.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	supra.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			supra.sendMessage(call, '[???] Sistema de auto block ativo\nmeu criador n??o gosta que me ligu??m\nse deseja ser desbloqueado converse com o supra!!\nhttps//wa.me/559391919748', MessageType.text)
			.then(() => supra.blockUser(call, "add"))
			}, 100);
		})
	
	 supra.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		supra.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    }) 
	  
	    
	supra.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			
			const type = Object.keys(mek.message)[0]
			const insom = from.endsWith('@g.us')		
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = supra.contacts[nameReq] != undefined ? supra.contacts[nameReq].vname || supra.contacts[nameReq].notify : undefined
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType	
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const autoRespost = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
		//fake reply
			let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `${botname} ???????\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},sendEphemeral: true}
      	  let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `?? ${ownername}`,jpegThumbnail: thumbnail}}}
   	     let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
	        let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`?? ${ownername}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botname} ???????\nBy ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `?? ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `?? ${botname}`, 'jpegThumbnail': thumbnail}}}
			let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`?? ${ownername}`, "h": `Hmm`,'seconds': '99999', 'caption': `?? ${ownername}`, 'jpegThumbnail': thumbnail}}}
			let floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': 'B826873620DD5947E683E3ABE663F263', 'participant':`0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": botname , 'jpegThumbnail':thumbnail}}}}
	
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname2}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname2}`,
                            thumbnail: thumbnail, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }			
							
	const addRegisteredUser = (userid, sender, time, serials) => {
				const obj = { id: userid, name: sender, time: time, serial: serials }
				_registered.push(obj)
				fs.writeFileSync('./datauser/registered.json', JSON.stringify(_registered))
			}		
			const createSerial = (size) => {
				return crypto.randomBytes(size).toString('hex').slice(0, size)
			}	
	const checkRegisteredUser = (sender) => {
				let status = false
				Object.keys(_registered).forEach((i) => {
					if (_registered[i].id === sender) {
						status = true
						}
					})
				return status
			}			
			
			mess = {
				wait: 'AGUARDE UM POUCO????',
				success: 'PRONTINHO??????',
				error: {
					stick: 'ERROR!!! TENTE MAS TARDE????',
					Iv: 'LINK INCORRETO! MANDA LINK V??LIDO POHA...'
				},
				only: {
					group: '??? ESSE COMADO S?? PODE SER USADO EM GRUPOS???',					
					ownerB: '??? COMANDO S?? PODE SER USADO PELO *SUPRA*',
					admin: '???ESSE COMANDO ?? APENAS PARA ADM DO GRUPO???',
					Badmin: 'PRECISO SER ADM PARA RESPONDER ESSE COMANDO'
				}
			}
			
			
					
			
			const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
					const buttonMessage = {
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 1,
						};
						supra.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
					};
				const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
					them = gam1
					mediaxxaa = await supra.prepareMessage(id, them, MessageType.location, {thumbnail: them})
					locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						locationMessage: locmhan.message.locationMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 6
						}
						supra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await supra.prepareMessage(id, them, MessageType.video)
					vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						videoMessage: vimhan.message.videoMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 5
						}
						supra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
						}
				const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {
					them = vid1
					mediaxxaa = await supra.prepareMessage(id, them, MessageType.image, {thumbnail: Buffer.alloc(0)})
					imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
					const buttonMessages = {
						imageMessage: imgmhan.message.imageMessage,
						contentText: text1,
						footerText: desc1,
						buttons: but,
						headerType: 4
						}
					supra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
				}
				
				
		//WAKTU
			const sekarang = new Date().getTime();
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Meia-noite ????"; break;
                case 1: jamss = "Madrugada ????"; break;
                case 2: jamss = "Madrugada ????"; break;
                case 3: jamss = "madrugada ????"; break;
                case 4: jamss = "Madrugada ????"; break;
                case 5: jamss = "Alvorecer ????"; break;
                case 6: jamss = "Bomdia ????"; break;
                case 7: jamss = "Bomdia ????"; break;
                case 8: jamss = "Bomdia ??????"; break;
                case 9: jamss = "Bomdia ??????"; break;
                case 10: jamss = "Bomdia ??????"; break;
                case 11: jamss = "Bomdia ????"; break;
                case 12: jamss = "Meio-dia ????"; break;
                case 13: jamss = "Boatarde ????"; break;
                case 14: jamss = "Boatarde ????"; break;
                case 15: jamss = "Boatarde ????"; break;
                case 16: jamss = "Boatarde ??????"; break;
                case 17: jamss = "Boatarde ????"; break;
                case 18: jamss = "Boatarde ????"; break;
                case 19: jamss = "Boanoite ????"; break;
                case 20: jamss = "Boanoite ????"; break;
                case 21: jamss = "Boanoite ????"; break;
                case 22: jamss = "Boanoite ????"; break;
                case 23: jamss = "Boanoite ????"; break;
            }
            var tampilUcapan = '' + jamss;				
				
					
	const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        supra.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }				
	            const nay1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `Supra(Newton)`, 'jpegThumbnail': fs.readFileSync('image/odc.jpeg')} } }					
	const supra2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556181496039-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fs.readFileSync('image/odc.jpeg'), surface: 200, message: `???NEWTON (SUPRA)?????????`, orderTitle: 'supra', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}	
	        const totalchat = await supra.chats.all()          
			const botNumber = supra.user.jid
			const ownerNumber = ["559391919748@s.whatsapp.net"] // COLOQUE SEU N??MERO AQUI SEM ESPA??OS
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await supra.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''	
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isBanned = ban.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false	
			const isAntiFake = isGroup ? antifake.includes(from) : false 
			const isLevelingOn = isGroup ? _leveling.includes(from) : true
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				supra.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				supra.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? supra.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : supra.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
					/******** PUXAR FOTO DO CAT??LOGO ***********/
			try {
		pporang = await supra.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i.pinimg.com/736x/eb/99/ff/eb99ff0be150691f744183e690f848ce.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		try {
		pporang2 = await supra.getProfilePicture(from)
		      } catch {
		pporang2 = 'https://i.pinimg.com/736x/eb/99/ff/eb99ff0be150691f744183e690f848ce.jpg'
		      }
		const ofrply2 = await getBuffer(pporang2)
		try {
		pporang3 = await supra.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang3 = 'https://i.pinimg.com/736x/eb/99/ff/eb99ff0be150691f744183e690f848ce.jpg'
		      }
		const suprazs = await getBuffer(pporang3)
	/************************************************/
			        const fotothumb = {text: 'oi', sendEphemeral: true,"externalAdReply": {"title": `?????? N??O CLIQUE AQUI!!!???`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": suprazs, "sourceUrl": `oi https://api.whatsapp.com/send?phone=5593991919748&text=Salva a?? Supra`},mentionedJid:[sender]
        }
        //_PATENTE 
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I????'
if (nivelAtual === 1) {patt = 'Bronze  I????' } else if (nivelAtual === 2) {patt = 'Bronze II????'} else if (nivelAtual === 3) {patt = 'Bronze  III????'} else if (nivelAtual === 4) {patt = 'Bronze  IV????'} else if (nivelAtual === 5) {patt = 'Bronze  V????'} else if (nivelAtual === 6) {patt = 'Prata I????'} else if (nivelAtual === 7) {patt = 'Prata II????'} else if (nivelAtual === 8) {patt = 'Prata III????'} else if (nivelAtual === 9) {patt = 'Prata IV????'} else if (nivelAtual === 10) {patt = 'Prata V????'} else if (nivelAtual === 11) {patt = 'Ouro I????'} else if (nivelAtual === 12) {patt = 'Ouro II????'} else if (nivelAtual === 13) {patt = 'Ouro III????'} else if (nivelAtual === 14) {patt = 'Ouro IV????'} else if (nivelAtual === 15) {patt = 'Ouro V????'} else if (nivelAtual === 16) {patt = 'Campe??o I????'} else if (nivelAtual === 17) {patt = 'Campe??o II????'} else if (nivelAtual === 18) {patt = 'Campe??o III????'} else if (nivelAtual === 19) {patt = 'Campe??o IV????'} else if (nivelAtual === 20) {patt = 'Campe??o V????'} else if (nivelAtual === 21) {patt = 'Diamante I ????'} else if (nivelAtual === 22) {patt = 'Diamante II ????'} else if (nivelAtual === 23) {patt = 'Diamante III ????'} else if (nivelAtual === 24) {patt = 'Diamante IV ????'} else if (nivelAtual === 25) {patt = 'Diamante V ????'} else if (nivelAtual === 26) {patt = 'Mestre I ????'} else if (nivelAtual === 27) {patt = 'Mestre II ????'} else if (nivelAtual === 28) {patt = 'Mestre III ????'} else if (nivelAtual === 29) {patt = 'Mestre IV ????'} else if (nivelAtual === 30) {patt = 'Mestre V ????'} else if (nivelAtual === 31) {patt = 'M??tico I ????'} else if (nivelAtual === 32) {patt = 'M??tico II ????'} else if (nivelAtual === 33) {patt = 'M??tico III ????'} else if (nivelAtual === 34) {patt = 'M??tico IV ????'} else if (nivelAtual === 35) {patt = 'M??tico V ????'} else if (nivelAtual === 36) {patt = 'God I????'} else if (nivelAtual === 37) {patt = 'God II????'} else if (nivelAtual === 38) {patt = 'God III????'} else if (nivelAtual === 39) {patt = 'God IV????'} else if (nivelAtual === 40) {patt = 'God V????'} else if (nivelAtual > 41) {patt = '????Grande Mestre????'}
          
//_XP COM LEVELING ATIVO
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
const requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
const getLevel = getLevelingLevel(sender)
const namelv = checkId
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
const lvup = {
text:
`    ??????????????? LEVEL ???????????????

  ????????????????????????
  ?????? Nome: @${namelv.split('@')[0]}
  ????????????????????????
  ?????? XP: ${getLevelingXp(sender)}
  ????????????????????????
  ?????? Level: ${getLevel} -> ${getLevelingLevel(sender)}
  ????????????????????????
  ?????? Patente: ${patt}
  ????????????????????????
  
   ???????????????LEVEL ???????????????`,
contextInfo: {mentionedJid: [namelv]}}
supra.sendMessage(from, lvup, text, {quoted: mek})

}
} catch (err) {
console.error(err)
}
} 


 const isSupraReg = checkRegisteredUser(sender)

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))


if (budy.includes(`alpin`)) {
                const alpin = fs.readFileSync('./alpinstiker/alpin');
                suprabot.sendMessage(from, alpin, MessageType.sticker, {quoted: mek})
                  }

		if (budy.includes(`alpin`)) {
                const alpin = fs.readFileSync('./alpinstiker/Dappa');
                suprabot.sendMessage(from, alpin, MessageType.sticker, {quoted: mek})
                  }



//--Member limit

		
		 supra.chatRead(from)
		 
if (!mek.key.fromMe) {
switch(autoRespost) {


case '=>':
if (!isOwner) return 
var konsol = budy.slice(3)
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
break
}
}
			switch(command) {
				case 'menu22': //@SUPRA ???
            case 'help':  
               if (isBanned) return
                runtime = process.uptime()
                teks = `${kyun(runtime)}`
                 
                const uLevel = getLevelingLevel(sender)
                const uXp = getLevelingXp(sender)
                const requirdXp = 20 * Math.pow(uLevel, 2) + 150 * uLevel + 1000
                var itsme = `$supra@s.whatsapp.net`
                var split = `zuras`
               wew = fs.readFileSync('image/odc.jpeg')
                    //var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                //const uangkau = checkATMuser(sender)
                const bruhhhh = {
                    contextInfo: {
                        participant: itsme,
                        quotedMessage: {
                extendedTextMessage: {
                                text: split,
                            }
                        }
                    }
                }

                mansss = `??????????????? *LHANNA-BOT* ????????????
????????????????????????????????????????????????
??????????????? Vers??o: *1.0*
??????????????? Nome : *Lhanna-BOT*
??????????????? Conectado : *Baileys*
??????????????? Criador : *@SUPRA*
??????????????? Level: *${uLevel}*
??????????????? XP: *${uXp}/${requirdXp}*
??????????????? Patente: *${patt}* 
????????????????????????????????????????????????
???????????? *CMD INICIAL* ??????
?????????????????????????????????????????????
???????????? ${prefix}info
???????????? ${prefix}restapi
???????????? ${prefix}sorteiopix
???????????? ${prefix}github
???????????? ${prefix}criador
???????????? ${prefix}owner
???????????? ${prefix}covidbr
???????????? ${prefix}ping
???????????? ${prefix}profile
???????????? ${prefix}wame
???????????? ${prefix}traduzir <texto>
???????????? ${prefix}stickera
???????????? ${prefix}simi <texto>
???????????? ${prefix}sticker <img/gf>
???????????? ${prefix}trigger <img>
???????????? ${prefix}semoji  <emoji>
???????????? ${prefix}attp <texto>
???????????? ${prefix}attp1 <texto>
???????????? ${prefix}attp2 <texto>
???????????? ${prefix}attp3 <texto>
???????????? ${prefix}stickerwa <nome>
???????????? ${prefix}tomp3 <marcar>
???????????? ${prefix}linkimg <img>
????????????????????????????????????????????????
???????????? *CMD GRUPOS* ??????
?????????????????????????????????????????????
???????????? ${prefix}welcome [1/0]
???????????? ${prefix}leveis [1/0]
???????????? ${prefix}level
???????????? ${prefix}infogp
???????????? ${prefix}online
???????????? ${prefix}delete <marcar>
???????????? ${prefix}fotogp <ft>
???????????? ${prefix}setname <nome>
???????????? ${prefix}abrirgp
???????????? ${prefix}fechargp
???????????? ${prefix}kick @
???????????? ${prefix}kick1 
???????????? ${prefix}add [nume]
???????????? ${prefix}listadmin
???????????? ${prefix}promover @
???????????? ${prefix}demitir @
???????????? ${prefix}antilink [1/0]
???????????? ${prefix}antifake [1/0]
???????????? ${prefix}simih [1/0]
????????????????????????????????????????????????
???????????? *CMD CONSULTA* ??????
????????????????????????????????????????????????
???????????? ${prefix}img <nome>
???????????? ${prefix}github <nome>
???????????? ${prefix}google <nome>
???????????? ${prefix}Igstalk <nome>
???????????? ${prefix}letra <nome>
???????????? ${prefix}gplaystore <no>
???????????? ${prefix}xvideos <txt>
???????????? ${prefix}idanime <nome>
???????????? ${prefix}wait <img>
???????????? ${prefix}ddd <ddd>
???????????? ${prefix}cep <cep>
????????????????????????????????????????????????
???????????? *IMG MARKER* ??????
?????????????????????????????????????????????
???????????? ${prefix}cinzav <img>
???????????? ${prefix}borrar <img>
???????????? ${prefix}police <img>
???????????? ${prefix}= <img>
???????????? ${prefix}camara <img>
???????????? ${prefix}viga <texto>
????????????????????????????????????????????????
???????????? *VID ALEAT??RIOS* ??????
????????????????????????????????????????????????
???????????? ${prefix}saycat
???????????? ${prefix}blackpinkv
???????????? ${prefix}porno
???????????? ${prefix}
????????????????????????????????????????????????
???????????? *CMD DIVERS??O* ??????
????????????????????????????????????????????????
???????????? ${prefix}casal 
???????????? ${prefix}plaquinha<nome>
???????????? ${prefix}cornot
???????????? ${prefix}soucorno?
???????????? ${prefix}conselho
???????????? ${prefix}dado
???????????? ${prefix}gados 
???????????? ${prefix}gay
???????????? ${prefix}shipp
????????????????????????????????????????????????
???????????? *CMD IMAGEM* ??????
?????????????????????????????????????????????
???????????? ${prefix}loli
???????????? ${prefix}waifu
???????????? ${prefix}meme
???????????? ${prefix}belle
???????????? ${prefix}hentai
???????????? ${prefix}wappanime
????????????????????????????????????????????????
???????????? *CMD DE BAIXAR* ???
?????????????????????????????????????????????
???????????? ${prefix}play <nome>
???????????? ${prefix}play2 <nome>
???????????? ${prefix}vid <nome>
???????????? ${prefix}tiktok <link>
???????????? ${prefix}xvideosd <link>
????????????????????????????????????????????????
???????????? *GERADOR E DD* ??????
????????????????????????????????????????????????
???????????? ${prefix}dadosfake
???????????? ${prefix}pessoas
???????????? ${prefix}nickff
???????????? ${prefix}
????????????????????????????????????????????????
??????????????? *E DE VOZ* ?????????
?????????????????????????????????????????????
???????????? ${prefix}slow <audio>
???????????? ${prefix}esquilo <audio>
???????????? ${prefix}raposa <audio>
???????????? ${prefix}bass <audio>
???????????? ${prefix}audiomeme <nome>
???????????? ${prefix}tts <txt>
????????????????????????????????????????????????
???????????? *CMD CRIADOR* ??????
????????????????????????????????????????????????
???????????? ${prefix}ban @
???????????? ${prefix}unban @
???????????? ${prefix}block @
???????????? ${prefix}unblock @
???????????? ${prefix}bc <texto>
???????????? ${prefix}entrargp <link>
???????????? ${prefix}addsticker <mar>
????????????????????????????????????????????????`,
wew = fs.readFileSync('./image/odc.jpeg')
 supra.sendMessage(from, wew, image, { quoted: supra2, thumbnail: fs.readFileSync('./image/supraf.jpg'), caption: mansss })
  break
case 'menu':
  case 'help':  
  if (isBanned) return  
 if (!isSupraReg) return sendButMessage(from, lang.noregis(pushname2), `Clique no bot??o para verificar`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif}); 
sendButImage(from, lang.menu(prefix, salam, pushname2), '?? ' + ownername, thumbnail, [{buttonId: `${prefix}owner`, buttonText: {displayText: '???? ????????????????????'}, type: 1},{buttonId: `${prefix}info`, buttonText:{displayText: '???? ????????????????'}, type: 1}], {quoted: supra2})
				break
				
 case 'waifu':
  if (isBanned) return 
 sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
   data = await fetchJson(`https://supra-api.herokuapp.com/api/waifu2?&apikey=supraz`)
   sads = await getBuffer(data.image)   
   shaa = `Waifu???`
  sendButImage(from, shaa, 'Clique no bot??o abaixo para obter uma imagem aleat??ria de waifu ', sads, [{buttonId: `${prefix}waifu`, buttonText: {displayText: 'Outra imagem'}, type: 1}], {quoted: supra2})			
  break	
  
case 'pornos':

 sendButMessage(from, `${hentai}`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
 break  
  
                case 'antidelete':
      if (!isOwner && !mek.key.fromMe) return 
      var c = args.join(' ')
           if (c === 'on'){
             antidelete = false
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                    antidelete = true
                    reply(`Berhasil menonaktifkan antidelete`)
                } else if (!c) {
                    anu =`Selecione um\n\on: para habilitar\noff: para desabilitar`
const buttons = [{buttonId: '${prefix}antidelete on', buttonText: {displayText: 'ON??????'}, type: 1},{buttonId: '${prefix}antidelete off', buttonText: {displayText: 'OFF??????'}, type: 1}]
const buttonMessage = {
    contentText: `${anu}`,
    footerText: '*_??SUPRA-OFC_*',
    buttons: buttons,
    headerType: 1
}
await supra.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break  
  
   case 'loli':
  if (isBanned) return   
 sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
   data = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=FuckBitch`)
   sads = await getBuffer(data.link)   
   shaa = `Loli???`
  sendButImage(from, shaa, 'Clique no bot??o abaixo para obter uma imagem aleat??ria de loli ', sads, [{buttonId: `${prefix}loli`, buttonText: {displayText: 'Outra imagem'}, type: 1}], {quoted: supra2})			
  break	
  
     case 'img':
  if (isBanned) return     
     sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
  var hay= args.join(' ')  	
   data = await fetchJson(`https://bx-hunter.herokuapp.com/api/image-search?text=${hay}&apikey=FuckBitch`)
    sads = await getBuffer(data.url)   
    supra.sendMessage(from, sads, image, {quoted:mek, caption: `Imagem sobre ${hay}`})            
      break	   
  
  case 'gore':
   if (isBanned) return 
 sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
  var hay= args.join(' ')  	
   data = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomgore?query=${hay}&apikey=FuckBitch`)
   sads = await getBuffer(data.data.link)   
   shaa = `*Dados obtidos com sucesso!!!*
Titulo: ${data.data.judul}
Views: ${data.data.views}
Coment??rios:??? ${data.data.comment}`
  sendButVideo(from, shaa, 'Clique no bot??o abaixo para obter um video aleat??rio de Gore ', sads, [{buttonId: `${prefix}Gore ${hay}`, buttonText: {displayText: '???Proximo'}, type: 1}], {quoted: supra2})			
  break	
 b37802bfba
//f216290a2c23  
  case 'hentaivideo':
  if (isBanned) return  
 sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
   data = await fetchJson(`https://zenzapi.xyz/downloader/hentaivid?apikey=b37802bfba`)
   sads = await getBuffer(data.result.video_1)   
   shaa = `*Random Hentai*
Titulo: ${data.result.title}
Categoria: ${data.result.category}
Views: ${data.result.views_count}
Tranf:??? ${data.result.share_count}
Formato: ${data.result.type}`
  sendButVideo(from, shaa, 'Clique no bot??o abaixo para obter um video aleat??rio de Hentai\n??supra-ofc ', sads, [{buttonId: `${prefix}hentaivideo`, buttonText: {displayText: '???Proximo'}, type: 1}], {quoted: supra2})			
  break	
    
    
  case 'xvideos':  
  
  if (isBanned) return  
 var hay= args.join(' ')  	
   data = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideosearch?query=${hay}&apikey=FuckBitch`)
   n = JSON.parse(JSON.stringify(data.result));
supragost = n[Math.floor(Math.random() * n.length)];
   respf = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${supragost.link}&apikey=FuckBitch`)
   sads = await getBuffer(respf.result.image)   
shaa = `*Dados obtidos??? com sucesso!!*
Titulo: ${supragost.title}
Dura????o: ${respf.result.duration}
Info: ${supragost.info}`
  sendButImage(from, shaa, '*Fiz para Elaine*\n_Se deseja baixar clique no bot??o abaixo_ ', sads, [{buttonId: `${prefix}baixarxvideos ${supragost.link}`, buttonText: {displayText: 'Baixar'}, type: 1}], {quoted: supra2})			
  break	
  
   case	'baixarxvideos':
  if (isBanned) return   
  sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
   var hay= args.join(' ')   			 
  	respf = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${supragost.link}&apikey=FuckBitch`)					
  baixarr = await getBuffer(respf.result.files.low)
  supra.sendMessage(from, baixarr, video, {mimetype: 'video/mp4', quoted: mek})
   break
   
  case 'ok':
  const dkk = fs.readFileSync('./sticker/ok.webp');
  supra.sendMessage(from, dkk, sticker, {quoted:mek})
  break
			
			
case 'menu6000':
const buttons24 = [
  {buttonId: `${prefix}owner`, buttonText: {displayText: 'menu'}, type: 1},
  {buttonId: `${p??efix}owner`, buttonText: {displayText: '???? DONO ????'}, type: 1},
  {buttonId: `${prefix}menu`, buttonText: {displayText: '???? GRUPO DA IGREJA ????'}, type: 1},
  ]
  wew = fs.readFileSync('./image/odc.jpeg') 
  mhan = await supra.prepareMessage(from, wew, image, {thumbnail: null})
const buttonMessage = {
	imageMessage: mhan.message.imageMessage,
    contentText: `teste`,
    footerText: `aqui bota o texto que fica cinza`,
    buttons: buttons24,
    headerType: 4
}
supra.sendMessage(from, buttonMessage, MessageType.buttonsMessage,
{"contextInfo": {
            "forwardingScore": 3,
            isForwarded: true,
            mentionedJid: [sender],
            externalAdReply: {
            "title": `ola ${pushname}`,
            "body": `seja bem vindo(a) ao menu de comandos`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnailUrl": `https://i.imgur.com/rra3IaP.png`,
            "mediaUrl": `arroz`
        }}, quoted: supra2})
break

case 'daftar': case 'registrar':
  if (isBanned) return
			if (isSupraReg) return  reply(lang.regis())
			try {
					ppregis = await supra.getProfilePicture(sender)
				} catch {
					ppregis = 'https://i.pinimg.com/736x/eb/99/ff/eb99ff0be150691f744183e690f848ce.jpg'
				}
			const serialUser = createSerial(20)
			await addRegisteredUser(sender, pushname2, time, serialUser)
			await sendButImage(from, lang.daftar(sender, pushname2, time, serialUser, _registered), `?? ${botname}`,await getBuffer(ppregis), [{buttonId: '.menu',buttonText: {displayText: `????MENU`,},type: 1,}], {thumbnail: Buffer.alloc(0), quoted : mek})
break


			
case 'info': //@SUPRA ???
  if (isBanned) return
var groups = supra.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = supra.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var math = (teks) => {
				return Math.floor(teks)
		}
var total = math(`${groups.length} ${privat.length}`)
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = supra.user.phone
uptime = process.uptime();
  let bateryy = global.batrei[global.batrei.length - 1]
   wew = fs.readFileSync(`./image/odc.jpeg`)
  teks = `??? *??? ???? ???? ???? ????  ???? ???? ???? ???? ???? ???*
??? *??? Nome* : Lhanna
??? *??? Vers??o* : 1.0
??? *??? Criador* : SUPRA
??? *??? Prefix* : ${prefix}
??? *??? Bateria* : ${bateryy}%
??? *??? Uso de RAM* : ${ram2}
??? *??? Conectado* : ${os.hostname()}
??? *??? Plataforma* : ${os.platform()}
??? *??? MNC* : ${mnc}
??? *??? MCC* : ${mcc}
??? *??? Modelo do disp* : ${supra.user.phone.device_model}
??? *??? Fabrica????o de disp* : ${device_manufacturer}
??? *??? Wa Version* : ${supra.user.phone.wa_version}
??? *??? Os Version* : ${supra.user.phone.os_version}
??? *??? Contatos bloqueados* : ${blocked.length}
??? *??? Total de chats* : ${totalchat.length}
??? *??? Online a* : ${kyun(uptime)}
??????????????????????????????????????????????????????`
 supra.sendMessage(from, wew, image, { quoted: nay1, caption: teks })
  break
  
  
/*case 'stats':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				var groups = denz.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = denz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await denz.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = denz.user.phone
					stamtus = `??? ?????????????????????????????????????????????????????? ???

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Baterai : ${baterai.battery}
Charged : ${baterai.isCharge}
Mode : ${publik ? 'public' : 'self'}
Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${denz.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${denz.user.phone.wa_version}
Os Version: ${denz.user.phone.os_version}

??? ?????????????????????????????????????????????????????? ???`
reply(stamtus)
break */ 
  
  case 'marcar':
  if (isBanned) return  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `*#* @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
  
  case 'tempban':
  if (isBanned) return
			if (!isGroup) return reply(mess.only.group)

			if (!isGroupAdmins) return reply(mess.only.admin)

			if (!isBotGroupAdmins) return reply(mess.only.Badmin)

						if (!mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a msg da pessoa!')

				if (args[1]=="segundos") {var tempokk = args[0]+"000"

				} else if (args[1]=="minuto") {var tempokk = args[0]+"0000"

				} else if (args[1]=="hora") {var tempokk = args[0]+"00000"

				} else {return reply("*selecionar:*\nsegundos\nminuto\nhora")}

				kick = mek.message.extendedTextMessage.contextInfo.participant

		 supra.groupRemove(from, [kick])

			reply(`Membro banido com sucesso\nirei adicionalo daqui: ${args[2]}`)

				setTimeout( () => {

				supra.groupAdd(from, [kick])

				reply(`Ol?? @${kick.split('@')[0]} bem vindo de volta, pfv se comporte dessa vez...`)

				}, tempokk)

   break
  
  
    case 'bloqueados':
  if (isBanned) return    

					teks = 'Essa ?? minha lista de bloqueados :\n'

					for (let block of blocked) {

						teks += `~> @${block.split('@')[0]}\n`

					}

					teks += `Total : ${blocked.length}`

					supra.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})

					break  
  
  
case 'togif':
  if (isBanned) return
if (!isQuotedSticker) return 
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await supra.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
supra.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: 'Convertido???'})
fs.unlinkSync(mediaaa)
}
break 

  
case 'tovideo':
  if (isBanned) return
if (!isQuotedSticker) return 
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await supra.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
supra.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: supra2, caption: 'Convertido???'})
fs.unlinkSync(mediaaa)
}
break

   case 'swm': 
case 'stickerbg':
  if (isBanned) return
const fgiff = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: "????Lhanna-BOT", jpegThumbnail: fs.readFileSync('image/odc.jpeg')} } }
const { convertSticker } = require('./swm.js')
if (type === 'imageMessage' || isQuotedImage){
const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const dlfile = await supra.downloadMediaMessage(getbuff)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `@Supra`, `Newton`)
var imageBuffer = new Buffer.from(mantap, 'base64');
supra.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: fgiff})
} else {
reply('Marque uma imagem!')
}
break

case 'jadibot':
  if (isBanned) return
suprabot.version = [3, 3234, 9]
suprabot.browserDescription = ['Dcode Denpa','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await suprabot.loadAuthInfo(obj)
}
try {
suprabot.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await supra.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: 'Digitalize este QR para se tornar um bot tempor??rio!\n1. Clique nos tr??s pontos no canto superior direito\n2. Toque em WhatsApp Web\n3. Digitalize este QR\n\nQR Expira em 20 segundos'})    
setTimeout(() => {
       supra.deleteMessage(from, scen.key)
  }, 30000);
})  
suprabot.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = suprabot.base64EncodedAuthInfo()
  fs.writeFileSync(`./sampah/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await suprabot.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
  suprabot.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
suprabot.on('chat-update', async (chat) => {
	require('./index.js')(suprabot, chat)
})    
await suprabot.connect().then(async ({user}) => {
reply('Conectado com sucesso com seu WhatsApp.\n*NOTA: Este ?? apenas um teste*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Erro! apenas 1 pessoa pode acessar o recurso Jadibot')
}
break

case 'stopjadibot':
  if (isBanned) return
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
reply('Oke')
fs.unlinkSync(`./sampah/${sender}.json`)
suprabot.close()
} catch {
reply('Oke')
suprabot.close()
}
break




case 'online': //@SUPRA ???
  if (isBanned) return
    let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
    let online = [...Object.keys(supra.chats.get(ido).presences), supra.user.jid]
    supra.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
    contextInfo: { mentionedJid: online }
    })
    break
    
     case 'dadu':	
  anu = await getBuffer(`https://supra-api.herokuapp.com/api/dadu?apikey=supraz`)
 supra.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break


 case 'stickera':	
  if (isBanned) return 
 reply(`AGUARDE UM POUCO????`)
  anu = await getBuffer(`https://supra-api.herokuapp.com/api/stickera?apikey=supraz`)
 supra.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
  case 'telgrastick':
  if (isBanned) return  	
   las = body.slice(13) 
 reply(`AGUARDE UM POUCO????`)
  anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/telegram_sticker?url=${las}&apikey=Alphabot`)
   sads = await getBuffer(anu.results[0].url)
 supra.sendMessage(from, sads, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
 case 'audiomeme':
  if (isBanned) return 
  las = body.slice(11)
  reply(`AGUARDE UM POUCO????`)
  sads = await getBuffer(`https://supra-api.herokuapp.com/api/audiomeme?quero=${las}&apikey=supraz`)
  supra.sendMessage(from, sads, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
  break
  
  case 'ip':
  if (isBanned) return  
    textw = body.slice(4)
    reply(`AGUARDE UM POUCO????`)
   fref = await fetchJson(`https://supra-api.herokuapp.com/api/ip?quero=${textw}&apikey=supraz`)
   textt = `     ??? *INFORMA????ES DO IP* ???\n
??? Ip = ${fref.ip}
??? Pais = ${fref.pais}
??? Estado = ${fref.estado}
??? Cidade = ${fref.cidade}
??? Lat = ${fref.latitude}
??? Long = ${fref.longitude}
??? Isp = ${fref.isp}
??? As = ${fref.as}`
  supra.sendMessage(from, textt, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
 case 'ddd':
  if (isBanned) return 
    textw = body.slice(5)
    reply(`AGUARDE UM POUCO????`)
   fref = await fetchJson(`https://supra-api.herokuapp.com/api/ddd?quero=${textw}&apikey=supraz`)
   textt = `     ??? *INFORMA????ES DO DDD* ???\n
??? Estado = ${fref.estado}
??? Cidades = ${fref.cidades}
*By: Supra-api*`
  supra.sendMessage(from, textt, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break
 
  case 'cep':
  if (isBanned) return  
    textw = body.slice(5)
    reply(`AGUARDE UM POUCO????`)
   fref = await fetchJson(`https://supra-api.herokuapp.com/api/cep1?quero=${textw}&apikey=supraz`)
   textt = `     ??? *INFORMA????ES DO CEP* ???\n
??? Cep = ${fref.cep}
??? Estado = ${fref.estado}
??? Cidade = ${fref.cidade}
??? Lugar = ${fref.lugar}
??? Rua = ${fref.rua}
*By: Supra-api*`
  supra.sendMessage(from, textt, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break


 
 
  case 'romantic':
  if (isBanned) return  
  sads = await getBuffer(`https://luganobr.vteximg.com.br/arquivos/ids/156458-800-800/coracao-de-chocolate-ao-leite-lugano-laminado-75-ambientada.jpg?v=637358652692600000`)
   fre = await fetchJson(`https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz`)
   shaa = `Frase Rom??ntica:\n ??????${fre.frase}??????`
  supra.sendMessage(from, sads, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "???? Supra-key", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')} } }, caption: shaa })
 break
   
  
  case 'hentai':
  if (isBanned) return  
  if (!isGroupAdmins)return reply(mess.only.admin)
var sads = await getBuffer(`https://bx-hunter.herokuapp.com/api/nsfw/hentai?apikey=FuckBitch`)   
   shaa = `Hentai???`
  sendButImage(from, shaa, 'Clique no bot??o abaixo para obter uma imagem aleat??ria de hentai ', sads, [{buttonId: `${prefix}hentai`, buttonText: {displayText: 'Outra imagem'}, type: 1}], {quoted: supra2})			
  break
 

case 'tourl': case 'imagetorul': case 'imgtourl': case 'videotourl': case 'tolink':
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await supra.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break

 
 	
 
 case 'ping':

  case 'speed': //@SUPRA ???
  
  if (isBanned) return
const timestamp = speed();
const latensi = speed() - timestamp
supra.updatePresence(from, Presence.composing)
uptime = process.uptime()
supra.sendMessage(from, `*Velocidade de resposta do bot*\n??? *Velocidade* : ${latensi.toFixed(4)} _Segundo_\n\n*Info do bot*\n??? *Total chat* : ${totalchat.length}\n??? *Total de usu??rios* : ${_registered.length}\n??? *Block* : ${blocked.length}\n??? *Online* : ${kyun(uptime)}`, text, {quoted: mek})
break

	case 'listadmins':
    case 'listadmin':
    case 'adminlist': //@SUPRA ???
    if (isBanned) return
    if (!isGroup) return reply(mess.only.group)
    teks = `Lista de adm do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
    no = 0
    for (let admon of groupAdmins) {
    no += 1
    teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
    }
    mentions(teks, groupAdmins, true)
    break
  
 case 'blackpinkv':
   data = fs.readFileSync('./api/blackpink.js');
   jsonData = JSON.parse(data);
   randIndex = Math.floor(Math.random() * jsonData.length);
   randKey = jsonData[randIndex];
   buffer = await getBuffer(randKey.result)
   supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: `Amo blackpink??????`})
   break
 
 case 'delete':
  case 'del': //@SUPRA ???
  if (isBanned) return  
if (!isGroup)return reply(mess.only.group)
if (!isGroupAdmins)return reply(mess.only.admin)
try {
supra.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('S?? pode deletar mensagens minhas')
}
break

case 'block': //@SUPRA ???
supra.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
supra.blockUser (`${body.slice(8)}@c.us`, "add")
supra.sendMessage(from, `Membro bloqueado n??o pode mas usar command do bot no pv`, text, {
quoted: mek
})
break



case 'unblock': //@SUPRA ???
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
supra.blockUser (`${body.slice(9)}@c.us`, "remove")
supra.sendMessage(from, `supra desbloqueou membro`, text, {
quoted: mek
})
break
   	
                       
  case 'linkimg':  //@SUPRA ???
 if (isBanned) return
 var imgbb = require('imgbb-uploader')
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    reply(mess.wait)
    owgi = await supra.downloadAndSaveMediaMessage(ger)
     anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
     teks = `${anu.display_url}`
reply(teks)
}
break	

case 'trigger':
  if (isBanned) return
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('marque uma foto!')
					}
					break
					

           	

		case 'gays':
  if (isBanned) return
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('marque uma foto!')
					}
					break
		case 'glass':
  if (isBanned) return  
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
				
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('marque uma foto!')
					}
					break
		case 'passed':
  if (isBanned) return
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('marque uma foto!')
					}
					break
		case 'jail':
  if (isBanned) return  
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
				
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('marque uma foto!')
					}
					break
		case 'comrade':
  if (isBanned) return
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('marque uma foto!')
					}
					break
		case 'hijau':
  if (isBanned) return
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('marque uma foto!')
					}
					break 
		case 'biru':
  if (isBanned) return  
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
				
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = get  ('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('marque uma foto!')
					}
					 break 
		case 'greyscale':
  if (isBanned) return
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
				
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('marque uma foto!')
					}
				 break 
		case 'invert':
  if (isBanned) return  
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('marque uma foto!')
					}
				 break 
		case 'invert_greyscale':
  if (isBanned) return  
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('marque uma foto!')
					}
				 break 
		case 'red':
  if (isBanned) return  
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('marque uma foto!')
					}
				 break
         case 'blurple':
  if (isBanned) return
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('marque uma foto!')
					}
				 break 
		case 'blurple2':
  if (isBanned) return  
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('marque uma foto!')
					}
				 break 
				 
				 
          
				
	case 'stickermeme':
  if (isBanned) return	
  		var imgbb = require('imgbb-uploader')
		console.log(color(time, 'magenta'), color('Downloading sticker...'))
		if (!isQuotedImage) return reply(`Marque uma imagem!`)							
		var teks2 = args.join(' ')
	var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					owgi = await  supra.downloadAndSaveMediaMessage(enmedia)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
				var hay= args.join(' ')
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://api.memegen.link/images/custom/-/${hay}.png?background=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
					
				 break 
				 
		 /*	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
						var imgbb = require('imgbb-uploader')
								//	if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await supra.downloadMediaMessage(enmedia)
									var njay = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break	
			
				 */
		case 'wasted':
  if (isBanned) return
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('marque uma foto!')
					}
					break 
					
	case 'hug':		
  if (isBanned) return	
		           	console.log(color(time, 'magenta'), color('Downloading sticker...'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					ggcc = await fetchJson(`https://hujanapi.herokuapp.com/api/randomhug?apikey=trial2k21`)
					anu2 = ggcc.url
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
									
					break 	
	case 'hentaisticker':	
  if (isBanned) return		
		           	console.log(color(time, 'magenta'), color('Downloading sticker...'))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')				
					ggcc = await fetchJson(`https://api-ryu.herokuapp.com/api/nsfw/hentaigif?apikey=RyuBotz`)
					anu2 = ggcc.result				
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Terminado com sucesso...'))
					fs.unlinkSync(rano)
					})
									
					break 						
					
					
									
																	
					
		case 'pelangi':
		case 'rainbow':
    if (isBanned) return
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
		
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('marque uma foto!')
					}
					break 
		case 'sepia':
  if (isBanned) return		

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					
					owgi = await  supra.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					supra.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('marque uma foto!')
					}
					break 					

  case 'circulo': //@SUPRA ???  
	if (isBanned) return
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await supra.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("f22e1a6ac0de3121d9cba3cd55f2b724", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/circle?apikey=Alphabot&url=${anu.display_url}`)
	 supra.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Marque uma imagem')
	}
	break 

                         


case 'fotogp': //@SUPRA ???
  if (isBanned) return
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const media = await supra.downloadAndSaveMediaMessage(encmedia)
await supra.updateProfilePicture (from, media)
  reply('Alterado com sucesso o ??cone do Grupo??????')

break     

case 'setdesc': case 'setdesk':
  if (isBanned) return
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 desc = args.join(' ')			  
await supra.groupUpdateDescription(from, `${desc}`)
supra.sendMessage(from, `Alterado com sucesso descri????o do grupo???`, text, { quoted: mek })
			break   

   case 'setname':
  if (isBanned) return   
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
supra.groupUpdateSubject(idgrup, `${body.slice(8)}`)
supra.sendMessage(from, 'Alterado com sucesso o nome do grupo???', text, {quoted: mek})
break  
case 'add2':
  if (isBanned) return
   if (!isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let ids of entah) {
mems_ids.push(ido)
}
supra.groupAdd(from, memu_ido)
} else {
supra.groupAdd(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
supra.groupAdd(from, [entah])
}
break
case 'promover':
  if (isBanned) return
   if (!isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memi_idi = []
for (let ids of entah) {
memi_idi.push(idi)
}
supra.groupMakeAdmin(from, memi_idi)
} else {
supra.groupMakeAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
supra.groupMakeAdmin(from, [entah])
}
break
case 'demitir':
  if (isBanned) return
   if (!isGroupAdmins) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let idk of entah) {
memk_idk.push(idk)
}
supra.groupDemoteAdmin(from, memk_idk)
} else {
supra.groupDemoteAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
supra.groupDemoteAdmin(from, [entah])
}
break


  case 'tomp3':
  if (isBanned) return  
supra.updatePresence(from,Presence.composing)
if (!isQuotedVideo) return reply('*???* Reply video')
reply(mess.wait)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await supra.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
  if (err) return reply('Falha ao converter v??deo para mp3')
  buffer = fs.readFileSync(ran)
  supra.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek
})
fs.unlinkSync(ran)
})
break                     


               case 'antilink':
                 if (isBanned) return
                   	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Recurso anti-link j?? est?? ativo')
						antilink.push(from)
						fs.writeFileSync('./new/antilink.json', JSON.stringify(antilink))
						reply('Ativou com sucesso recurso Antilink??????')					
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Recurso antilink foi desativado')
						antilink.splice(from, 1)
						fs.writeFileSync('./new/antilink.json', JSON.stringify(antilink))
						reply('Desativado com sucesso recurso Antilink??????')
					} else {
						sendButMessage(from, `MOD0 ANTILINK`, `??${ownername}`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
 
                    case 'welcome':
                      if (isBanned) return
                   	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('RECURSO DE BEM VINDO EST??  ATIVO')
					welkom.push(from)
				fs.writeFileSync('./new/welkom.json', JSON.stringify(welkom))
			reply('Ativou com sucesso o recurso de boas-vindas neste grupo ??????')
					} else if (Number(args[0]) === 0) {
						if (!isWelkom) return reply('Recurso Bemvindo foi desativado')
						welkom.splice(from, 1)
				fs.writeFileSync('./new/welkom.json', JSON.stringify(welkom))
						reply('Desativado com sucesso recurso de  Bem vindo??????')
					} else {
						sendButMessage(from, `MOD0 BEM-VINDO`, `??${ownername}`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;   

                    case 'antifake':
                      if (isBanned) return
                   	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
			  if (isAntiFake) return reply('Ja esta ativo')
					antifake.push(from)
				fs.writeFileSync('./new/antifake.json', JSON.stringify(antifake))
			reply('Ativou com sucesso o recurso de antifake neste grupo??????')
					} else if (Number(args[0]) === 0) {
						if (!isAntiFake) return reply('Recurso Antifake foi desativado')
						antifake.splice(from, 1)
			  fs.writeFileSync('./new/antifake.json', JSON.stringify(antifake))
						reply('Desativado com sucesso o recurso de antifake neste grupo??????')
					} else {
						sendButMessage(from, `MOD0 ANTIFAKE`, `??${ownername}`, [
            {
              buttonId: `${prefix}antifake 1`,
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antifake 0`,
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;                       
                           
  
  case  'roubar':
  case  'take':  
case 'rename': //@SUPRA ???
if (!isOwner) return  reply(mess.only.ownerB)
 if (!isQuotedSticker) return reply('Apenas figurinhas mano')
  encmiedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 mediaa = await supra.downloadAndSaveMediaMessage(encmiedia)
 anu = args.join(' ').split('|')
 satu = anu[0] !== '' ? anu[0] : `YT`
  dua = typeof anu[1] !== 'undefined' ? anu[1] : `Supra`
require('./lib/fetcher.js').createExif(satu, dua)
require('./lib/fetcher.js').modStick(mediaa, supra, nay1, from)
break

  case 'ban': //@SUPRA ???
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return  reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `????@${mentioned[0].split('@')[0]} supra baniu vc  nao pode mas usar comandos do bot????`
mentions(`${susp}`, mentioned, true)   
break
case 'unban': //@SUPRA ???
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return  reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datauser/banned.json', JSON.stringify(ban))
susp = `???@${mentioned[0].split('@')[0]} Vc foi desbanido???`
mentions(`${susp}`, mentioned, true)   
break




    case 'archivechat':
 if (!isGroup) return reply(mess.only.group)
if (!isOwner) return  reply(mess.only.ownerB)
                reply('*Coloquei na lista de arquivadas*')
                console.log('Arquivado com sucesso chat = ' + from)
                await sleep(3000)
                supra.modifyChat(from, ChatModification.archive)
                break
  
			
case 'report':
const bug = body.slice(5)
if (args.length > 300) return supra.sendMessage(from, 'm??ximo 300 letras', msgType.text, {quoted: mek})
var nomor = mek.participant
 teks1 = `*[REPORT]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nMessage : ${bug}`
var options = {
text: teks1,
contextInfo: {mentionedJid: [nomor]},
}
supra.sendMessage('559391919748@s.whatsapp.net', options, text, {quoted: mek})
reply('Mensagem enviada ao criador do bot??????')
break

case 'clearall':
if (!isOwner && !isPremium) return  reply(ptbr.ownerB())
anu = await supra.chats.all()
list_chat = await supra.chats.all()
for (let chat of list_chat) {
supra.modifyChat(chat.jid, "delete", {includeStarred: false})
}
reply("Chat limpo")
break
    
  case 'shipp':
  if (isBanned) return  
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Marca um casal de pombinhos`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
yhb =  `@${mentioned[0].split('@')[0]} vc tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}????????????????????`,
mentions(`${yhb}`, mentioned, true, {quoted: mek})
break


  case 'esquilo':
  if (isBanned) return
   pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   tup = await supra.downloadAndSaveMediaMessage(pai)
   ran = getRandom('.mp3')
   exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(tup)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   supra.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
   fs.unlinkSync(ran)
    })
   break
		
  case 'raposa':
  if (isBanned) return
   muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   gem = await supra.downloadAndSaveMediaMessage(muk)
   ran = getRandom('.mp3')
   exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(gem)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   supra.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
   fs.unlinkSync(ran)
    })
   break

//c8b525d64479dba1a7e86cc83c2dbed0

/* case 'sticke':
 if (isBanned) return
 var imgbb = require('imgbb-uploader')
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
    sue = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
    fffs = await supra.downloadAndSaveMediaMessage(sue)
     anu = await imgbb("761ea2d5575581057a799d14e9c78e28", fffs)
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/img-to-webp?image_url=${anu.display_url}`)
buffer = await getBuffer(data.result)
supra.sendMessage(from, buffer, sticker, {quoted: mek})
break */

  case 'bass':  
   if (isBanned) return              
   ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   bas = await supra.downloadAndSaveMediaMessage(ass)
   ran = getRandom('.mp3')
   exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(bas)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   supra.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
   fs.unlinkSync(ran)
    })
   break


case 'restapi':
fas =`
Site Rest api = https://supra-api.herokuapp.com
Sobre = https://supra-api.herokuapp.com/sobre`
reply(fas)
break	

case 'github':
fas =`
Meu perfil no github:
https://github.com/Supraofc`

reply(fas)
break	

case 'conselho': //@SUPRA ???
  if (isBanned) return
  try {
 anu = await fetchJson(`https://supra-api.herokuapp.com/api/conselho?apikey=supraz`)
     ppimg = await supra.getProfilePicture(`${sender.split('@')[0]}@c.us`)
     } catch {
     ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
     }
     its = await getBuffer (ppimg)
     randTeks = `Este ?? meu conselho:
${anu.frase}`
     supra.sendMessage(from, its, image, {quoted: mek, caption: randTeks})
     break

       /*    case 'togif':

                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await supra.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom('.gif')
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=b4012abd7e882a3e749c6004,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            supra.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: Mimetype.gif, filename: file_name })
                            fs.unlinkSync(file_name)
                        })
                   
                    break
                    */
				case 'stiker':

				case 'sticker':

				  case 'si':
  if (isBanned) return
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await supra.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						await ffmpeg(`./${media}`)

							.input(media)

							.on('start', function (cmd) {

								console.log(`Started : ${cmd}`)

							})

							.on('error', function (err) {

								console.log(`Error : ${err}`)

								fs.unlinkSync(media)

								reply(mess.error.stick)

							})

							.on('end', function () {

								console.log('Finish')

								exec(`webpmux -set exif ${addMetadata('newton', '@supra')} ${ran} -o ${ran}`, async (error) => {

									if (error) return reply(mess.error.stick)

									supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

									fs.unlinkSync(media)	

									fs.unlinkSync(ran)	

								})

								/*supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(media)

								fs.unlinkSync(ran)*/

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)

					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await supra.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						reply(mess.wait)

						await ffmpeg(`./${media}`)

							.inputFormat(media.split('.')[1])

							.on('start', function (cmd) {

								console.log(`Started : ${cmd}`)

							})

							.on('error', function (err) {

								console.log(`Error : ${err}`)

								fs.unlinkSync(media)

								tipe = media.endsWith('.mp4') ? 'video' : 'gif'

								reply(`??? N??O T?? FAZENDO PORRA ????`)

							})

							.on('end', function () {

								console.log('Finish')

								exec(`webpmux -set exif ${addMetadata('newton', '@supra')} ${ran} -o ${ran}`, async (error) => {

									if (error) return reply(mess.error.stick)

									supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

									fs.unlinkSync(media)

									fs.unlinkSync(ran)

								})

								/*supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(media)

								fs.unlinkSync(ran)*/

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)

					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await supra.downloadAndSaveMediaMessage(encmedia)

						ranw = getRandom('.webp')

						ranp = getRandom('.png')

						reply(mess.wait)

						keyrmbg = 'Your-ApiKey'

						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {

							fs.unlinkSync(media)

							let buffer = Buffer.from(res.base64img, 'base64')

							fs.writeFileSync(ranp, buffer, (err) => {

								if (err) return reply('??? N??O T?? FAZENDO PORRA ????.')

							})

							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {

								fs.unlinkSync(ranp)

								if (err) return reply(mess.error.stick)

								exec(`webpmux -set exif ${addMetadata('alpin', 'pinbot')} ${ranw} -o ${ranw}`, async (error) => {

									if (error) return reply(mess.error.stick)

									supra.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})

									fs.unlinkSync(ranw)

								})

								//supra.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})

							})

						})

					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {

						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						const media = await supra.downloadAndSaveMediaMessage(encmedia)

						ran = getRandom('.webp')

						await ffmpeg(`./${media}`)

							.on('start', function (cmd) {

								console.log('Started :', cmd)

							})

							.on('error', function (err) {

								fs.unlinkSync(media)

								console.log('Error :', err)

							})

							.on('end', function () {

								console.log('Finish')

								fs.unlinkSync(media)

								supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})

								fs.unlinkSync(ran)

							})

							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])

							.toFormat('webp')

							.save(ran)*/

					} else {

						reply(`Envie fotos com legendas ${prefix}adesivo ou tag de imagem que foi enviado`)

					}

					break	
					
case 'addsticker':  // SUPRA ???		
	if (!isQuotedSticker) return reply('marque um figurinha')
 var svst = args.join(' ')
	if (!svst) return reply('coloque um nome')
	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	delb = await supra.downloadMediaMessage(boij)
	setiker.push(`${svst}`)
	fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
	fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
	supra.sendMessage(from, `Figurinha adicionada com sucesso\nDigite: ${prefix}liststicker para ver minha lista sticker`, MessageType.text, { quoted: mek })
	break					
					
case 'fechargp': //@SUPRA ???
  if (isBanned) return
 supra.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 var nomor = mek.participant
 const close = { text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administradores* podem enviar mensagens`,
contextInfo: {
 mentionedJid: [nomor]
}
  }
 supra.groupSettingChange (from, GroupSettingChange.messageSend, true);
 reply(close)
 break

case 'abrirgp':
case 'bukagc': //@SUPRA ???
  if (isBanned) return
 supra.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
 text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* podem enviar mensagens`,
contextInfo: {
mentionedJid: [sender]
 }
}
supra.groupSettingChange (from, GroupSettingChange.messageSend, false)
supra.sendMessage(from, open, text, {  quoted: mek
})
break

case 'dadosfake': //@SUPRA ???
 if (isBanned) return 
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
dadosf = 
`    *DADOS GERADOS*
   ??? Nome: ${anu.name}
   ??? Sexo: ${anu.gender}
   ??? Idade: ${anu.age}
   ??? Telefone: ${anu.phone}
   ??? Tipo sangu??neo: ${anu.blood_type}
   ??? E-mail: ${anu.email}
   ??? Senha: ${anu.password}
   ??? CEP: ${anu.zip_code}
      By:Lhanna`
supra.sendMessage(from, dadosf, text, {quoted: mek})
break

case 'wait': //@SUPRA ???
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	reply(mess.wait)
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	mediae = await supra.downloadMediaMessage(encmedia)
	await wait(mediae).then(res => {
	supra.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
	}).catch(err => {
	reply(err)
	})
	} else {
	reply('marque uma foto de anime')
	}
	break
	
	case 'dadu5':
	random = Math.floor(Math.random() * 6) + 1
	damdu = fs.readFileSync(`./sticker/${random}.webp`)
	supra.sendMessage(from, damdu, sticker, {quoted: mek})
	break	
	

   case 'semoji': //@SUPRA ???
     if (isBanned) return    
      if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} ????`)
      emoji = args[0]
       try {
       emoji = encodeURI(emoji[0])
      } catch {
      emoji = encodeURI(emoji)
       }
      buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=6b25e69d0ba3dc9447010464`)
      supra.sendMessage(from, buffer, sticker, { quoted: mek })
     break
     

     

     

case 'igstalk': //@SUPRA ???
 yolo = body.slice(9)
 if (args.length < 1) return reply('Insira usu??rio do instagram')
 hmm = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${yolo}&apikey=apivinz`)
 buffer = await getBuffer(hmm.profile_pic)
 hasil = `Nome : ${hmm.fullname}\nSeguidores : ${hmm.follower}\nSeguindo : ${hmm.following}\nPrivate : ${hmm.is_private}\nVerified : ${hmm.is_verified}\nLink : https://www.instagram.com/${hmm.username}\nBio : ${hmm.bio}`
 supra.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
break


 
 case 'idanime': //@SUPRA ???
  hay = body.slice(9)
  data = await fetchJson(`https://api.jikan.moe/v3/search/anime?q=${hay}`)
  buffer = await getBuffer(data.results[0].image_url)
teks = `         
?????? *T??tulo:* ${data.results[0].title}
??????? *Epis??dios:* ${data.results[0].episodes}
??????? *Avalia????o:* ${data.results[0].rated}
?????? *Pontua????o:* ${data.results[0].score}
??????? *Sinopse:* ${data.results[0].synopsis}
??????? *URL*: ${data.results[0].url}`
 supra.sendMessage(from, buffer, image, {quoted: mek, caption: teks}) 
break


case 'gplaystore': //@SUPRA ???

supra.updatePresence(from, Presence.composing)
goo = body.slice(12)
try {
data = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${goo}`, {method: 'get'})
teks = '*Google Play Store*\n\n'

				for (let i of data.result) {

					teks += `        ????????????????????????????????????????????????\n\n??? *Nome* : ${i.title}\n??? *Desenvolvedor* : ${i.developer}\n??? *Avalia????o* : ${i.rating}\n??? *Link* : ${i.url}\n\n`

				}

				teks += `        ????????????????????????????????????????????????`

reply(teks.trim())
} catch {
  reply(mess.ferr)
}
break


case 'infogp': //@SUPRA ???
  if (isBanned) return
  if (!isGroupAdmins) return reply(mess.only.admin)
  supra.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
 try {
	 ppimg = await supra.getProfilePicture(from)
  } catch {
	 ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
	}   
  let buf = await getBuffer(ppimg)
  teks = (args.length > 1) ? body.slice(8).trim() : ''
  teks += `*Nome do grupo :* ${groupName}\n*Descri????o :* ${groupDesc}\n*N??mero de Administradores :* ${groupAdmins.length}\n*N??mero de membros :* ${groupMembers.length}`
  supra.sendMessage(from, buf, image, {quoted: mek, caption: teks})
  break 
  
  case 'fotogpp': //@SUPRA ???
  if (!isGroupAdmins) return reply(mess.only.admin)
  supra.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
 try {
	 ppimg = await supra.getProfilePicture(from)
  } catch {
	 ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
	}   
  let burf = await getBuffer(ppimg)
  teks = (args.length > 1) ? body.slice(8).trim() : ''
  teks += `*foto do grupo*`
  supra.sendMessage(from, burf, image, {quoted: mek, caption: teks})
  break 
  
  
//case 'printchat':
   //  groupMencetak
case 'letra': //@SUPRA ???
 if (args.length < 1) return reply('Insira o nome da m??sica')
 supra.updatePresence(from, Presence.composing)
 tels = body.slice(7)
 try {
 anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${tels}`, {
 method: 'get'
  })
 reply(anu.result.lirik)
 } catch {
 reply(mess.ferr)
 }
break

case 'slist':
				case 'lists':
				case 'stickerlist':
				case 'liststicker':  // SUPRA ???		
				
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					supra.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
		
	case 'getsticker':
				case 'gets':   // SUPRA ???		
				
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					supra.sendMessage(from, result, sticker, {quoted :mek})
					break
																	
																		
case 'criador': //@SUPRA ???
buffer = await getBuffer(`https://lh3.googleusercontent.com/pw/ACtC-3fA0Q7qP2wXEkvLfh0D2eWqSiCD-RtR98mzLPbdXn7y1inVSE8HIcDFN0y4PqS3XT7CYF3LPjyaDHELAikGQd9Pg_z-5j5tl2PxrDdiNJxYzFiD_y1EBv5G6f9E1sETBNl2S9vRmJxnbrQaDkff3eH8=s480-no?authuser=0`)
shaa = `      ??? *_SUPRA LS STUDIOS_* ???

?????? *Nome:* NEWTON
?????? *Nick:* SUPRA
?????? *Numero:* ${prefix}owner
?????? *Insta:* @nilton_cant
?????? *Nome do bot:* Lhanna
?????? *Data de cria????o:* 28/05/21
?????????????????????????????????????????????????????????????????????
Espero que tenham gostado do meu bot.
Love vcs!!!??????`
 supra.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "???? *Status-SUPRA*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: shaa })
break

case 'casal':
  if (isBanned) return
    jds = []
   const dd = groupMembers
  const ll = groupMembers
   const gg = dd[Math.floor(Math.random() * dd.length)]
	const rr = ll[Math.floor(Math.random() * ll.length)]
	teks = `*Futuro casal do grupo:*\n@${gg.jid.split('@')[0]} ??????\n @${rr.jid.split('@')[0]} ?????? `	
      data = fs.readFileSync('./api/roman.js');
      jsonData = JSON.parse(data);
      randIndex = Math.floor(Math.random() * jsonData.length);
      randKey = jsonData[randIndex];
      buffer = await getBuffer(randKey.result)
      supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: teks})
      break

case 'gay':
   gays = body.slice(4)  
   ranran = `${Math.floor(Math.random() * 100)}`
   sufiz = await getBuffer(`https://cdn.pixabay.com/photo/2019/08/23/19/02/rainbow-flag-4426296_640.jpg`)
   cansi = `Veja os dados gay do: ${gays}\n\n${gays} voc?? ??  *${ranran}%* gay ??????????????`
   supra.sendMessage(from, sufiz, image, {quoted: mek, caption: cansi})
   break	
	
case 'plaquinha': //@SUPRA ???
if (isBanned) return
  if (args.length < 1) return reply(mess.blank)
	teks = body.slice(10)
	if (teks.length > 10) return reply('O texto ?? longo, at?? 10 caracteres')
	reply('*Estou fazendo* ????')
	 buffer = await getBuffer(`https://restioas.sirv.com/Spins/artworks-000056121029-geglen-t500x500.jpg?text.0.text=${teks}&text.0.position.gravity=west&text.0.position.x=16%25&text.0.size=34&text.0.color=140f15&text.0.opacity=64&text.0.font.family=Yellowtai&text.0.font.weight=700&text.0.background.opacity=94&text.0.outline.color=0a0a0a&text.0.outline.opacity=42%22%20width=%22500%22%20height=%22500%22%20alt=`)
	 supra.sendMessage(from, buffer, image, {quoted: mek, caption: '*Se usou deve uma mamada no supra*'})
	 break
	 
	 case 'plaquinha2':
//PEDI O REGISTRO
  if (isBanned) return
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(12)
					if (teks.length > 25) return reply('O texto ?? longo, at?? 25 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ???*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					supra.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na m??o ????'})
					break
	 
case 'cornot':
var chifre = ["Corno triste", "Corno cego", "Corno escravo", "Corno Conformado", "Corno acostumado", "Corno rei", "Deus dos cornos", "Corno de carteira", "Corno gado", "Corno e n??o sabe", "Corno iludido", "Corno avan??ado", "Corno iniciante"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Voc?? ??:\n\n${gado}`
reply(hisil)
break    

case 'sorteiopix1':
 if (!isGroupAdmins) return reply(mess.only.admin)
var sortes = ["????", "???????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????", "????"]
pixz = await getBuffer(`https://4.bp.blogspot.com/-JyIlxuaXlLw/VsRrmH4Wn3I/AAAAAAAAAaw/LsEHH5wz9vA/s640/homer-excited.png`)
var pixd = sortes[Math.floor(Math.random() * sortes.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisilz = `                       *PARAB??NS!!!*\n
Voc?? que escolheu o emoji ${pixd} ?? o ganhador`
supra.sendMessage(from, pixz, image, {quoted: supra2, caption: hisilz})
break

case 'sorteiopix':
hisil = `                         *SORTEIO PIX* ????

Escolha 30 participantes para participar do sorteio,
cada um ir?? pagar uma taxa de 3,00 R$, valor do pr??mio ?? 60,00 R$.
Escolha um dos Emojis:
1.????
2.???????
3.????
4.????
5.????
6.????
7.????
8.????
9.????
10.????
11.????
12.????
13.????
14.????
15.????
16.????
17.????
18.????
19.????
20.????
21.????
22.????
23.????
24.????
25.???????
26.????
27.????
28.????
29.????
30.????
Obs: converse com meu criador para que ele possa 
organizar o sorteio
Gp: https://chat.whatsapp.com/GPR7bcF008N9BlFFmvMF32`
reply(hisil)
break    

case 'soucorno?':
var corno = ["Segundo meus c??lculos....Vc ?? corno", "Rlx amigo(a) vc ainda nao ?? corno"]
var galha = corno[Math.floor(Math.random() * corno.length)]
fdp = `${Math.floor(Math.random() * 100)}`
hisil = `${galha}`
reply(hisil)
break    

  case 'porno': //@SUPRA ???
  if (!isGroupAdmins) return reply(mess.only.admin)
  data = fs.readFileSync('./api/xvideos.js');
  jsonData = JSON.parse(data);
  randIndex = Math.floor(Math.random() * jsonData.length);
  randKey = jsonData[randIndex];
  buffer = await getBuffer(randKey.result)
 supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: `A?? seu v??deo punheteiro`})
  break
  
  
 
 case 'blackpinkv':
   data = fs.readFileSync('./api/blackpink.js');
   jsonData = JSON.parse(data);
   randIndex = Math.floor(Math.random() * jsonData.length);
   randKey = jsonData[randIndex];
   buffer = await getBuffer(randKey.result)
   supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: `Amo blackpink??????`})
   break
   
   case 'simi': //@SUPRA ???
	  if (args.length < 1) return reply('Onde est?? o texto, Acha que sou vidente?????')
	  teks = body.slice(5)
      anu = await simih(teks) //fetchJson(`http://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
	  //if (anu.error) return reply('*Simi n??o sabe*')
      reply(anu)
	  break

 case 'simih': //@SUPRA ???
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (args.length < 1) return reply('Hmmmm')
 if ((args[0]) === 'on') {
 if (isSimi) return reply('O modo SIM est?? ativo')
 samih.push(from)
 fs.writeFileSync('./new/simi.json', JSON.stringify(samih))
  reply(`Modo simih ativo com sucesso no grupo *${groupMetadata.subject}*`)
 } else if ((args[0]) === 'off') {
 samih.splice(from, 1)
 fs.writeFileSync('./new/simi.json', JSON.stringify(samih))
 reply(`Adm desativou modo simih no grupo *${groupMetadata.subject}*`)
 } else {
 reply('On ativar, Off para desativar')
 }
 break
   
   case 'kick': //@SUPRA ???
 if (isBanned) return
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
  mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
  if (mentioned.length > 1) {
  teks = 'Pedidos recebidos, emitidos :\n'
  for (let _ of mentioned) {
  teks += `@${_.split('@')[0]}\n`
  }
  mentions(teks, mentioned, true)
  supra.groupRemove(from, mentioned)
  } else {
  mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
  supra.groupRemove(from, mentioned)
  }
  break
  
  case 'kk':
  case 'kick1': 
  if (isBanned) return  
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
supra.groupRemove(from, M_exe)
} else {
supra.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
supra.groupRemove(from, [exe1])
}
break


break

case 'add': //@SUPRA ???
  if (isBanned) return
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (args.length < 1) return reply('Insira o n??mero alvo')
if (args[0].startsWith('08')) return reply('Use o c??digo do pa??s mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
supra.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Falha ao adicionar destino, talvez porque ?? privado')
}
break


  
  case 'gados':
		if (isBanned) return 					
		jds = []
		const eee = groupMembers
		const ttll = groupMembers
		const fdss = groupMembers
		const neww = groupMembers					
		const akui = eee[Math.floor(Math.random() * eee.length)]
		const diao = ttll[Math.floor(Math.random() * ttll.length)]
		const noit = fdss[Math.floor(Math.random() * fdss.length)]
		const suprf = neww[Math.floor(Math.random() * neww.length)]
		teks = `*TOP 4 +GADOS DO GRUPO*\n\n??????????@${akui.jid.split('@')[0]}???\n??????????@${diao.jid.split('@')[0]}\n??????????@${noit.jid.split('@')[0]}???\n??????????@${suprf.jid.split('@')[0]}???\n\n*ESSES ACIMA S??O OS GADOS DO GRUPO*\n\n*Lhanna-BOT*`
		jds.push(akui.jid)
		jds.push(diao.jid)
		jds.push(noit.jid)
		jds.push(suprf.jid)
		mentions(teks, jds, true)
		break
                      
                             
                                    
case 'tts':
if (isBanned) return
  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return supra.sendMessage(from, 'Cad?? o texto irm??o?', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('Grande dms amigo')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('falhou irm??o :(')
                supra.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(`Api n??o funciona`)
                supra.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(`Api n??o funciona`)
}
break                                                   
            
case 'bc': //@SUPRA ???
	if (!isOwner) return reply('Quem ?? Voc??, voc?? n??o ?? meu dono ?????')
	if (args.length < 1) return reply('.......')
	anu = await supra.chats.all()
	if (isMedia && !mek.message.videoMessage || isQuotedImage) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	buff = await supra.downloadMediaMessage(encmedia)
	for (let _ of anu) {
	supra.sendMessage(_.jid, buff, image, {caption: `[ TRANSMI????O DE AVISO ]\n\n${body.slice(4)}`})
	}
	reply('Transmiss??o enviada com sucesso')
	} else {
	for (let _ of anu) {
	sendMess(_.jid, `[ TRANSMISS??O DE AVISO ]\n\n${body.slice(4)}`)
	}
	reply('Transmiss??o enviada com sucesso')
	}
	break
	
	case 'toimg':
 reply(mess.wait)
 imgmed = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 medimg = await supra.downloadAndSaveMediaMessage(imgmed)
 ran = getRandom('.png')
 exec(`ffmpeg -i ${medimg} ${ran}`, (err) => {
 fs.unlinkSync(medimg)
 if (err) return reply('Gagal')
 buffer = fs.readFileSync(ran)
 supra.sendMessage(from, buffer, image, {quoted: mek, caption: 'Convertido em image'})
  fs.unlinkSync(ran)
 })
 break


case 'owner': //@SUPRA ???
reply('Esse ?? o numero do meu criador salva a?? meninas.')
supra.sendMessage(from, {

  displayname: "Jeff", vcard: vcard

}, MessageType.contact, {

  quoted: mek

})

break 


				
case 'st':
 if (!isGroupAdmins) return reply(mess.only.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await supra.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('newton', '@supra')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(mess.wait())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer1 = fs.readFileSync(rano)
supra.sendMessage(from, buffer1, sticker, {contextInfo :fotothumb, sendEphemeral: true})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await supra.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('Aguarde um pouco????')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('newton', '@supra')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na convers??o de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer2 = fs.readFileSync(rano)
supra.sendMessage(from, buffer2, sticker, {contextInfo :fotothumb, sendEphemeral: true})
fs.unlinkSync(rano)
})
} else {
reply(`Voc?? precisa enviar ou marcar uma imagem ou v??deo com no m??ximo 10 segundos`)
}
break		
   case 'play2':
  if (isBanned) return   
sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
var hay= args.join(' ')
  anu = await fetchJson(`https://supraz.herokuapp.com/api/playaudio2?quero=${hay}&apikey=supraz`)
 buffer = await getBuffer(anu.imagem)  
 Iagu = await getBuffer(anu.baixar)
 fdsz = `*Dados obtidos com sucesso!!!*

??? *Autor* : ${anu.canal}
??? *Tamanho* : ${anu.tamanho}
??? *Visualiza????o* : ${anu.views}
??? *Likes* : ${anu.likes}
??? *Deslike* : ${anu.deslike}
??? *Postado* : ${anu.postado}

*_Lhanna est?? baixando_* ????????`
 supra.sendMessage(from, buffer, image, { quoted: supra2, thumbnail: fs.readFileSync('./image/supraf.jpg'), caption: fdsz })
supra.sendMessage(from, Iagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.titulo}???`, 'jpegThumbnail': await getBuffer(anu.imagem)}}}})
   break		
   
   case 'play3':
  if (isBanned) return   
sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
var hay= args.join(' ')
  anu = await fetchJson(`https://yx-api.herokuapp.com/api/yt/playmp3?query=${hay}`)
 buffer = await getBuffer(anu.thumb)  
 Iagu = await getBuffer(anu.url)
 fdsz = `*Dados obtidos com sucesso!!!*

??? *Titulo* : ${anu.title}
??? *Autor* : ${anu.channel}
??? *Visualiza????o* : ${anu.views}
??? *Postado* : ${anu.published}

*_Lhanna est?? baixando_* ????????`
 supra.sendMessage(from, buffer, image, { quoted: supra2, thumbnail: fs.readFileSync('./image/supraf.jpg'), caption: fdsz })
supra.sendMessage(from, Iagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.title}???`, 'jpegThumbnail': await getBuffer(anu.thumb)}}}})
   break		
   	
					
  
  case 'play': 
  if (isBanned) return  
if (args.length === 0) return reply(`Qual nome da m??sica mn?`)
  var hay= args.join(' ')
  anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/yt/search?query=${hay}&apikey=FuckBitch`)					
const captions = `*Dados obtidos com sucesso!!!*

??? *Titulo* : ${anu.result[0].title}
??? *Minutos* : ${anu.result[0].timestamp}
??? *Visualiza????o* : ${anu.result[0].views}
??? *Url* : ${anu.result[0].url}`
var thumbyt = await getBuffer(anu.result[0].image)
sendButImage(from, captions, '?? ' + ownername, thumbyt, [{buttonId: `${prefix}ytmp4 ${anu.result[0].url}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `${prefix}ytmp3 ${anu.result[0].url}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: supra2})			
  break
     
   
   case 'ytmp4':  
  if (isBanned) return    
   sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
var hay= args.join(' ')
   anu = await fetchJson(`https://yx-api.herokuapp.com/api/download/ytmp4?url=${hay}`)  
   wfd = await getBuffer(anu.result.url)
   supra.sendMessage(from, wfd, video, {mimetype: 'video/mp4', quoted: supra2})
   break
   
case 'ytmp3':   
  if (isBanned) return
sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
 var hay= args.join(' ')
   anu = await fetchJson(`https://yx-api.herokuapp.com/api/download/ytmp3?url=${hay}`)  
   wfd = await getBuffer(anu.result.url)
   supra.sendMessage(from, wfd, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.result.title}???`, 'jpegThumbnail': await getBuffer(anu.result.thumb)}}}})
   break
   
        case 'attp':
  if (isBanned) return        
      var hay= args.join(' ')  	
  anu = await getBuffer(`https://hardianto.xyz/api/maker/attp?text=${encodeURIComponent(hay)}&apikey=hardianto`)
 supra.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "???? Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break		
 
  case 'tiktok': 
  if (isBanned) return  
if (args.length === 0) return reply(`Coloque url amigo`)
  var hay= args.join(' ')
const captionsss = `*Escolha um formato para baixar*`
const supradd = `${hay}`
var thumbyt = await getBuffer(`https://i.ibb.co/c1X1Vtg/3a80554df091.jpg`)
sendButImage(from, captionsss, '?? ' + ownername, thumbyt, [{buttonId: `${prefix}tiktokvideo ${supradd}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `${prefix}tiktokaudio ${supradd}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: ftrol})			
  break
  
  case 'tiktokaudio':
    if (isBanned) return  
if (args.length === 0) return reply(`Coloque url amigo`)
 sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
  var hay= args.join(' ')
  anu = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${hay}`)    		
 lagu = await getBuffer(anu.result.audio_only.audio1)
 supra.sendMessage(from, lagu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break 

case 'tiktokvideo':
    if (isBanned) return  
if (args.length === 0) return reply(`Coloque url amigo`)
 sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
  var hay= args.join(' ')
  anu = await fetchJson(`http://hadi-api.herokuapp.com/api/tiktok?url=${hay}`) 		
 lagu = await getBuffer(anu.result.video.nowm)
supra.sendMessage(from, lagu, video, {mimetype: 'video/mp4', quoted: mek})
   break
   
  
   case 'igvideo': 
  if (isBanned) return     
 sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
   var hay= args.join(' ')
   anu = await fetchJson(`https://yx-api.herokuapp.com/api/download/ig?url=${hay}`)  
   lagu = await getBuffer(anu.link)
   supra.sendMessage(from, lagu, video, {mimetype: 'video/mp4', quoted: supra2})
   break
   
 
   
   case 'saycat': //@SUPRA ???
  if (isBanned) return   
   sendButMessage(from, `*LhannaBOT*`, `*_Aguarde um pouco_* ????`, [{buttonId: `${prefix}ok`,buttonText: {displayText: `OK`,},type: 1,}], {quoted: mek});
 anu = await fetchJson(`https://supra-api.herokuapp.com/api/saycat?apikey=supraz`)  
buffer = await getBuffer(anu.resultado)
supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "???? Supra-key", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')} } }, caption: 'Saycat??????' })
 break
   
   
				default:
				if (budy.includes("https://")){
		     if (!isGroup) return
		     if (!isAntiLink) return
		     if (isGroupAdmins) return reply(`*${pushname2}* vc ?? admin por isso n??o vou te banir`)
		    supra.updatePresence(from, Presence.composing)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*???????????????????????????????????? ???????? ????????????????????*`)
	     	}, 100)
	     	reply(`*_??? link  detectado ???_*\n*${pushname2}* Vc ser?? banido do grupo *${groupMetadata.subject}*`)
		    setTimeout( () => {  
		    supra.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		      setTimeout( () => {
	          
	          }, 0)
		      }			
				if (budy.includes("canta")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/canta.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                     if (budy.includes("Canta")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/canta.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                              
                     if (budy.includes("Bot")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/oih.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }

                   if (budy.includes("yamete")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/yamete.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                     if (budy.includes("Yamete")){
		           supra.updatePresence(from, Presence.composing)
		           const loli = fs.readFileSync('./audio/yamete.mp3')
                   supra.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   }
                   	if (budy.includes("????")){
			        supra.updatePresence(from, Presence.composing)
			        reply("Cringe usar emoji")
			        }			       			                         
                   	if (budy.includes("freefire")){
			       supra.updatePresence(from, Presence.composing)
			       reply("S?? corno que joga")
		           const d = fs.readFileSync('./sticker/corni.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
	                }
                   if (budy.includes("filha")){		          
		          supra.updatePresence(from, Presence.composing)
			        reply("Vc ?? o supra?")
			       
			        }
                   if (budy.includes("Osh")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/tenor.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                  if (budy.includes("frio")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/frio.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                   if (budy.includes("fria")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/frio.webp');
                   supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                  if (budy.includes("Fria")){  // respon tag ubah aja
                   const d = fs.readFileSync('./sticker/frio.webp');
                  supra.sendMessage(from, d, sticker, {quoted: mek})
                 }
                 if (budy.includes("loli")){ 
                const brinks = ["1","2"] 
                 kkk = brinks[Math.floor(Math.random() * brinks.length)]// respon tag ubah aja
                 const d = fs.readFileSync('./sticker/'+kkk+'.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                 }
                 if (budy.includes("Loli")){ 
                const brinks = ["1","2"] 
                 kkk = brinks[Math.floor(Math.random() * brinks.length)]// respon tag ubah aja
                 const d = fs.readFileSync('./sticker/'+kkk+'.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                 }
                 if (budy.includes("feia")){  // respon tag ubah aja
                  const d = fs.readFileSync('./sticker/porno.webp');
                  supra.sendMessage(from, d, sticker, {quoted: mek})
                  }
   /* if (budy.includes("lhass")){ //@SUPRA ???
    supra.updatePresence(from, Presence.composing)
    const brinus = ["1","2","3","4"]
     kkk = brinus[Math.floor(Math.random() * brinus.length)]
     brle = fs.readFileSync('./audio/mcs'+kkk+'.mp3')
      supra.sendMessage(from, brle, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                   } */
                  if (budy.includes("chata")){  // respon tag ubah aja
                  const d = fs.readFileSync('./sticker/porno.webp');
                  supra.sendMessage(from, d, sticker, {quoted: mek})
                  }
                if (budy.includes("lhanna")){  // respon tag ubah aja
                 const d = fs.readFileSync('./strg/sticker/lhanna.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
                   if ((budy === `Quem e teu pai?`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                   reply("Meu pai ?? o supra")
                   }
                    if ((budy === `Te amo`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                   reply("Ta carente porra?")
                   }
                    if ((budy === `N??o`)){                     
                    console.log(color('[AUTO RESPONDER]', 'cyan'), color(`${budy}`, 'magenta'))       
                   reply("ta;-;")
                   }
                 if (budy.includes("Lhanna")){  // respon tag ubah aja
                 const d = fs.readFileSync('./strg/sticker/lhanna.webp');
                 supra.sendMessage(from, d, sticker, {quoted: mek})
                   }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
