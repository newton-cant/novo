exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname2) => {
	return`Maaf ${pushname2} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname2) =>{
	return` Oi ${pushname2} você ainda não se registrou. Digite #daftar primeiro`
	}
exports.regis = () =>{
	return` Você se registrou`
	}
exports.daftar = (sender, pushname2, time, serialUser, totalUser) =>{
	return` *REGISTRADO COM SUCESSO*

• Nome : ${pushname2}
• Numero : ${sender.split("@")[0]}
• Hora : ${time}
• Serie : ${serialUser}
• Total User : ${totalUser.length}

Obrigado por se registrar, agora digite #menu para visualizar meus recursos.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`Jangan Lupa Intro Ya~
⌯ָ   ֙Nama :
⌯ָ   ֙Umur :
⌯ָ   ֙Kelamin :
⌯ָ   ֙Askot :
╰─ ᝬ _Patuhi Rules Group Ya_  >_<`
      }
exports.leave = () =>{
	return`   
│
╰─ ᝬ _Balik Lagi Wajib Donasi Ya_ >_<`
}
exports.menu = (prefix, salam, pushname) =>{
	return` Olá ${pushname} 👋
╭═══〘 *LHANNA-BOT* 〙═⊷❍
┃❏╭─────────────
┃❏│⊱❥ Versão: *1.0*
┃❏│⊱❥ Nome : *Lhanna-BOT*
┃❏│⊱❥ Conectado : *Baileys*
┃❏│⊱❥ Criador : *@SUPRA*
╰═════════════⊷❍
┏══〘 *CMD INICIAL* 〙═
┃╭─────────────
┃│❍➣ ${prefix}info
┃│❍➣ ${prefix}restapi
┃│❍➣ ${prefix}sorteiopix
┃│❍➣ ${prefix}github
┃│❍➣ ${prefix}criador
┃│❍➣ ${prefix}owner
┃│❍➣ ${prefix}report
┃│❍➣ ${prefix}ping
┃│❍➣ ${prefix}profile
┃│❍➣ ${prefix}wame
┃│❍➣ ${prefix}traduzir <texto>
┃│❍➣ ${prefix}simi <texto>
┃│❍➣ ${prefix}sticker <img/gf>
┃│❍➣ ${prefix}toimg <figu>
┃│❍➣ ${prefix}togif <figu>
┃│❍➣ ${prefix}video <figu>
┃│❍➣ ${prefix}stickerbg <img>
┃│❍➣ ${prefix}semoji  <emoji>
┃│❍➣ ${prefix}attp <texto>
┃│❍➣ ${prefix}tomp3 <marcar>
┃│❍➣ ${prefix}linkimg <img>
╰═════════════⊷❍
┏══〘 *CMD GRUPOS* 〙═
┃╭─────────────
┃│❍➣ ${prefix}welcome
┃│❍➣ ${prefix}leveis
┃│❍➣ ${prefix}level
┃│❍➣ ${prefix}infogp
┃│❍➣ ${prefix}online
┃│❍➣ ${prefix}delete <marcar>
┃│❍➣ ${prefix}fotogp <ft>
┃│❍➣ ${prefix}setname <nome>
┃│❍➣ ${prefix}setdesc <nome>
┃│❍➣ ${prefix}abrirgp
┃│❍➣ ${prefix}fechargp
┃│❍➣ ${prefix}kick @
┃│❍➣ ${prefix}kick1 
┃│❍➣ ${prefix}add [nume]
┃│❍➣ ${prefix}listadmin
┃│❍➣ ${prefix}promover @
┃│❍➣ ${prefix}demitir @
┃│❍➣ ${prefix}antilink
┃│❍➣ ${prefix}antifake
┃│❍➣ ${prefix}simih [1/0]
╰═════════════⊷❍
┏══〘 *CMD CONSULTA* 〙═
┃╭──────────────
┃│❍➣ ${prefix}img <nome>
┃│❍➣ ${prefix}github <nome>
┃│❍➣ ${prefix}xvideos <nome>
┃│❍➣ ${prefix}google <nome>
┃│❍➣ ${prefix}Igstalk <nome>
┃│❍➣ ${prefix}letra <nome>
┃│❍➣ ${prefix}idanime <nome>
┃│❍➣ ${prefix}wait <img>
┃│❍➣ ${prefix}ddd <ddd>
┃│❍➣ ${prefix}cep <cep>
╰═════════════⊷❍
┏══〘 *FIGU ALEATORY* 〙═
┃╭──────────────
┃│❍➣ ${prefix}hug
┃│❍➣ ${prefix}hentaisticker
┃│❍➣ ${prefix}stickera
╰═════════════⊷❍
┏══〘 *FIGU CANVAS* 〙═
┃╭──────────────
┃│❍➣ ${prefix}trigger <img>
┃│❍➣ ${prefix}gays <img>
┃│❍➣ ${prefix}glass <img>
┃│❍➣ ${prefix}passed <img>
┃│❍➣ ${prefix}jail <img>
┃│❍➣ ${prefix}comrade <img>
┃│❍➣ ${prefix}hijau <img>
┃│❍➣ ${prefix}biru <img>
┃│❍➣ ${prefix}greyscale <img>
┃│❍➣ ${prefix}invert_greyscale
┃│❍➣ ${prefix}red <img>
┃│❍➣ ${prefix}blurple <img>
┃│❍➣ ${prefix}wasted <img>
┃│❍➣ ${prefix}sepia <img>
╰═════════════⊷❍
┏══〘 *IMG CANVAS* 〙═
┃╭─────────────
┃│❍➣ ${prefix}circulo <img>
┃│❍➣ ${prefix}cinzav <img>
┃│❍➣ ${prefix}borrar <img>
┃│❍➣ ${prefix}police <img>
┃│❍➣ ${prefix}camara <img>
┃│❍➣ ${prefix}viga <texto>
╰═════════════⊷❍
┏══〘 *VID ALEATÓRIOS* 〙═
┃╭──────────────
┃│❍➣ ${prefix}saycat
┃│❍➣ ${prefix}blackpinkv
┃│❍➣ ${prefix}porno
┃│❍➣ ${prefix}hentaivideo
╰═════════════⊷❍
┏══〘 *CMD DIVERSÃO* 〙═
┃╭──────────────
┃│❍➣ ${prefix}casal 
┃│❍➣ ${prefix}plaquinha<nome>
┃│❍➣ ${prefix}cornot
┃│❍➣ ${prefix}soucorno?
┃│❍➣ ${prefix}conselho
┃│❍➣ ${prefix}dadu
┃│❍➣ ${prefix}romantic
┃│❍➣ ${prefix}gados 
┃│❍➣ ${prefix}gay
┃│❍➣ ${prefix}shipp
╰═════════════⊷❍
┏══〘 *CMD IMAGEM* 〙═
┃╭─────────────
┃│❍➣ ${prefix}loli
┃│❍➣ ${prefix}waifu
┃│❍➣ ${prefix}hentai
╰═════════════⊷❍
┏══〘 *CMD DE BAIXAR* 〙
┃╭─────────────
┃│❍➣ ${prefix}play <nome>
┃│❍➣ ${prefix}play2 <nome>
┃│❍➣ ${prefix}play3 <nome>
┃│❍➣ ${prefix}vid <nome>
┃│❍➣ ${prefix}tiktok <link>
┃│❍➣ ${prefix}baixarxvideos <link>
┃│❍➣ ${prefix}igvideo <link>
┃│❍➣ ${prefix}gore <nome>
╰═════════════⊷❍
┏══〘 *GERADOR E DD* 〙═
┃╭──────────────
┃│❍➣ ${prefix}dadosfake
┃│❍➣ ${prefix}
┃│❍➣ ${prefix}
┃│❍➣ ${prefix}
╰═════════════⊷❍
┏═══〘 *E DE VOZ* 〙══
┃╭─────────────
┃│❍➣ ${prefix}slow <audio>
┃│❍➣ ${prefix}esquilo <audio>
┃│❍➣ ${prefix}raposa <audio>
┃│❍➣ ${prefix}bass <audio>
┃│❍➣ ${prefix}audiomeme <nome>
┃│❍➣ ${prefix}tts <txt>
╰═════════════⊷❍
┏══〘 *CMD CRIADOR* 〙═
┃╭──────────────
┃│❍➣ ${prefix}ban @
┃│❍➣ ${prefix}unban @
┃│❍➣ ${prefix}archivechat
┃│❍➣ ${prefix}block @
┃│❍➣ ${prefix}unblock @
┃│❍➣ ${prefix}bc <texto>
┃│❍➣ ${prefix}entrargp <link>
┃│❍➣ ${prefix}addsticker <mar>
╰═════════════⊷❍
`
	}