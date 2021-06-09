const Discord = require('discord.js');
const bot = new Discord.Client();
const serverstats = require("./servers.json")
const coinfile = require("./coins.json")
const PREFIX = '-';
const TOKEN = 'Nzk5NzIxOTAyOTEzNDg2ODc5.YAHtDw.W9GdulIEWnzn_3MU0LsUXar9vgo';

const chance = '801465438605148250'

const Grün = '780778619193655326';
const Blau = '780778644045692959';
const Rot = '780778675968278538';

var version = '1.0.2';

bot.on('ready', () => {
    console.log('Der Bot ist nun Einsatzbereit!')

    let statuses = [
        `Cookie-Craft | Netzwerk`
    ]

    setInterval(function(){
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: 'PLAYING'}).catch(console.error);
    }, 3000)
})


bot.on('ready', () => {
    console.log('Der Bot von Cookie-Craft ist nun online mit der version 1.2.0')
})

bot.on('message', message => {
    let parts = message.content.split(" ");
    
        if (parts[0] == '-help') {
            const help = new Discord.MessageEmbed()
            .setTitle('Das ist die help liste')
            .setColor('#98c9c3')
            .addField('-help', 'zeigt dir alle commands an')
            .addField('-clear/-purge', 'kannst du bis zu 100 Nachrichten löschen')
            .addField('-credits', 'kannst du sehen wer mich gecodet hat')
            .addField('-ping', 'kannst du dir anzeigen lassen welcher ping der bot hat')

            message.channel.send(help)
        }
        else if(parts[0] == '-credits') {
        message.channel.send('Dieser Bot wurde von **[cookie] DerBenxFan10#3106** gecoded.')
        }
		else if(parts[0] == '-ping') {
        message.channel.send('Ping wird berechnet...').then(resultMessage => {
            let ping = resultMessage.createdTimestamp - message.createdTimestamp;
            
            resultMessage.edit(`**Ping**\nBot Latenz: ${ping}ms\nAPI Latenz: ${bot.ws.ping}ms`);
        })
    }
		else if(parts[0] == '-Ping') {
        message.channel.send('Ping wird berechnet...').then(resultMessage => {
            let ping = resultMessage.createdTimestamp - message.createdTimestamp;
            
            resultMessage.edit(`**Ping**\nBot Latenz: ${ping}ms\nAPI Latenz: ${bot.ws.ping}ms`);
        })
    }
        else if (parts[0] == '-clear' || parts[0] == '-purge') {
            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Dir fehlt die benötigte Berechtigung! (MANAGE_MESSAGES)')
            if(!parts[1]) return message.channel.send('Du musst angeben, wieviele Nachrichten du löschen möchtest!')
            if(isNaN(parts[1])) return message.channel.send('Die Angabe, wieviele Nachrichten du löschen möchtest, muss eine zahl sein!')
            if(parts[1] > 100) return message.channel.send('Du kannst nicht mehr als 100 Nachrichten löschen!')
            if(parts[1] < 2) return message.channel.send('Du kannst nicht weniger als 2 Nachrichten löschen!')
            message.channel.bulkDelete(parts[1])
            message.channel.send(`Ich habe erfolgreich **${parts[1]}** Nachrichten gelöscht`)
        }
		else if(parts[0] == 'ticket'){
			cleint.commands.get('ticket').execute(cleint, message, args, Discord)
		}
        else if(parts[0] == 'endticket'){
			cleint.commands.get('endticket').execute(cleint, message, args, Discord)
		}
        else if (parts[0] == '-memberzähler') {
            message.channel.send(`Der **${message.guild.name}** Server hat gerade **${message.guild.memberCount}** Mitglieder (Inklusive Bots)`)
        }
        else if (parts[0] == '-ownerinfo') {
            message.channel.send(`Der Owner vom **${message.guild.name}**-Server ist **${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**`)
        }
        else if (parts[0] == '-mute') {
            message.channel.send(`kommt beim Nexten update`)
        }
		else if (parts[0] == '-ip') {
            message.channel.send(`die server IP von den java server ist\nIP: Kommt Bald\nDie server ip von den TeamSpeak server ist\nIP: Kommt Bald`)
        }
		else if(parts[0] == '-version') {
        message.channel.send(`**Welche version hat der bot**\nBot version: 1.2.0 Beta version!`)
		}
		else if (parts[0] == '-yt') {
            message.channel.send(`Hier ist Der Kanal von DerBenxFan10\n**Link:** https://www.youtube.com/channel/UC5HEG-j-rd0KTkHZgzoefcg`)
        }
		else if (parts[0] == '-dc') {
            message.channel.send(`Hier ist Der Link Zu den Discord Server von DerBenxFan10\n**Link:** https://discord.gg/MvDNer4Hfy`)
        }
        else if (parts[0] == '-shop') {
            message.channel.send(`Hier ist der shop link von Cookie-Craft\n**Link:** https://cookiecraftde.tebex.io/`)
        }
		else if (parts[0] == '-partner') {
            message.channel.send(`Hier sind alle Partner von DerBenxFan10\n**Server.net V3**\n**Link:** https://discord.gg/wts5CbM38X\n**Katzengames**\n**Link:** https://discord.gg/x5xFm6W7Ag\n**traumgames**\n**Link:** https://discord.gg/qnjprjmXSX\n`)
        }
		else if (parts[0] == '-update') {
            message.channel.send(`Das Nexte update ist am Datum: TT|MM|JJJJ`)
        }
		else if (parts[0] == '-updateinfo') {
            message.channel.send(`Der StaticMC.net bot bekommt am TT|MM|JJJJ ein update`)
        }
		else if (parts[0] == '-invite') {
            message.channel.send(`Wer den bot von DerBenxFan10 haben will kann ihn sich gerne auf sein Server hollen\n**Link:** https://discord.com/api/oauth2/authorize?client_id=843174831797436446&permissions=8&scope=bot`)
        }
        else if(parts[0] == '-botinfo') {
            message.channel.send('kommt bald')
        }
		else if (parts[0] == '-rolleninfo') {
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Dir fehlt folgende Berechtigung: MANAGE_ROLES !')
            console.log(`das sind alle rollen von **${message.guild.name}-Server**`)
            console.log(message.guild.roles)
            message.channel.send('Die Rolleninfo wurde in denn Bot Logs geschickt')
        }
        else if (message.content === '<@!799721902913486879>') {

            const baum = new Discord.MessageEmbed()
            .setTitle('Man hat mich gerufen ...')
            .setColor('#98c9c3')
            .addField('**Brauchst du Hilfe?**', 'Dann schreibe das Team, oder den Owner an!')
            .addField('Willst du dem Owner eine DM schreiben?', 'Hier seine DC#ID: [𝑇𝐺𝐴] 𝐷𝑒𝑟𝐵𝑒𝑛𝑥𝐹𝑎𝑛10#3106')

            message.channel.send(baum)
        }
        else if (parts[0] == '#userinfo') {
            let userr = message.mentions.users.first() || message.author;
        
                let userinfo = {}
        
                userinfo.name = userr.username;
                userinfo.discrim = userr.discriminator;
                userinfo.id = userr.id;
                userinfo.status = userr.presence.status;
                userinfo.bot = userr.bot;
                userinfo.create = userr.createdAt;
        
                const userembed = new Discord.MessageEmbed()
                .setAuthor(userr.tag)
                .setColor("RANDOM")
                .addField("Nutzername:", userinfo.name, true)
                .addField("#ID:", userinfo.discrim, true)
                .addField("User ID:", userinfo.id, false)
                .addField("Status:", userinfo.status, true)
                .addField("Bot:", userinfo.bot, true)
        
                return message.channel.send(userembed)
                
        }
        else if (parts[0] == '-say') {
            if (!parts[1]) return message.channel.send('Du musst angeben, was der Text sein soll, den der Bot sagt!')
            var text = message.content.split(" ").slice(1).join(" ");
            message.delete();
            message.channel.send(text)
        }
        else if (parts[0] == '-sayemb') {
            if(!parts[1]) return message.channel.send('Du musst angeben, was der Text von deinem Embed beinhalten soll!')
            var text = message.content.split(" ").slice(1).join(" ");
            message.delete();

            const sayembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .addField(message.member.displayName + ' schreit:', text, true)
            .setFooter('Dies ist ein Ausruf von ' + message.author.username + '#' + message.author.discriminator + ' !')

            message.channel.send(sayembed)
        }
        else if (parts[0] == '-dm'){
            if (!message.mentions.users.first()) {
                if (!parts[1]) return message.channel.send('Du musst angeben, was du dir selbst schreiben lassen möchtest!')
                message.delete()
                var text = message.content.split(" ").slice(1).join(" ");

                message.author.send(text)
            }
            else if (message.mentions.users.first()) {
                if (!parts[1]) return message.channel.send('Du musst angeben, wem du etwas schreiben lassen willst!')
                if (!parts[2]) return message.channel.send('Du musst angeben, was du deinem Ziel schicken lassen willst!')

                message.delete()
                var text = message.content.split(" ").slice(2).join(" ");

                message.mentions.users.first().send(text)
            }
        }
        else if (parts[0] == '-kick'){

            if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Dir fehlt folgende Berechtigung: KICK_MEMBERS')

            let kicked = message.mentions.members.first();
            if (!kicked) return message.channel.send('Der angegebene User ist nicht auf diesem Server!')

            message.guild.member(kicked).kick();

            const kickemb = new Discord.MessageEmbed()
            .setColor('RED')
            .addField(`Der User`, `${message.mentions.members.first()} wurde erfolgreich gekickt!`)
            .setFooter(`Der Kick wurde von ${message.author.username}#${message.author.discriminator} ausgeführt!`)

            message.channel.send(kickemb)
        }
        else if (parts[0] == '-pban'){

            if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Dir fehlt folgende Berechtigung: BAN_MEMBERS')

            let banned = message.mentions.members.first();
            if (!banned) return message.channel.send('Der angegebene User ist nicht auf diesem Server!')

            message.guild.member(banned).ban();

            const banemb = new Discord.MessageEmbed()
            .setColor('RED')
            .addField(`Der User`, `${message.mentions.members.first()} wurde erfolgreich gebannt! [Permanenter Ban]`)
            .setFooter(`Der Ban wurde von ${message.author.username}#${message.author.discriminator} ausgeführt!`)

            message.channel.send(banemb)
        }
        else if (parts[0] == '-tban'){

            if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Dir fehlt folgende Berechtigung: BAN_MEMBERS')

            let banned = message.mentions.members.first();
            if (!banned) return message.channel.send('Der angegebene User ist nicht auf diesem Server!')

            message.guild.member(banned).ban();

            const banemb = new Discord.MessageEmbed()
            .setColor('RED')
            .addField(`Der User`, `${message.mentions.members.first()} wurde erfolgreich gebannt! [Zeit comming soon]`)
            .setFooter(`Der Ban wurde von ${message.author.username}#${message.author.discriminator} ausgeführt!`)

            message.channel.send(banemb)
        }
    

})

bot.on('message', (message) => {
    const parts = message.content.split(" ");

    if (parts[0] == '-role'){
        if (!parts[1]) return message.channel.send('Es fehlt das zweite Argument! [add/remove]')

        if (parts[1] == 'add') {
            if (!parts[2]) return message.channel.send('Dir fehlt das dritte Argument! [grün/blau/rot]')

            if (parts[2] == 'grün') {
                message.member.roles.add(Grün)
                message.channel.send('Du hast nun die Farbe Grün')
            }
            else if (parts[2] == 'blau') {
                message.member.roles.add(Blau)
                message.channel.send('Du hast nun die Farbe Blau')
            }
            else if (parts[2] == 'rot') {
                message.member.roles.add(Rot)
                message.channel.send('Du hast nun die Farbe Rot')
            }
        }
        else if (parts[1] == 'remove') {
            if (!parts[2]) return message.channel.send('Dir fehlt das dritte Argument! [testrolle1/testrolle2/testrolle3]')

            if (parts[2] == 'gr�n') {
                message.member.roles.remove(Grün)
                message.channel.send('Du hast nun nicht mehr die Grün')
            }
            else if (parts[2] == 'blau') {
                message.member.roles.remove(Blau)
                message.channel.send('Du hast nun nicht mehr die Blau')
            }
            else if (parts[2] == 'rot') {
                message.member.roles.remove(Rot)
                message.channel.send('Du hast nun nicht mehr die Rot')
            }
        }
    }

})

//wilkommen
bot.on("guildMemberAdd", function(member){
    let channel = member.guild.channels.cache.find(ch => ch.name === "╠》willkommen-tschüss");
    channel.send(member.displayName + " ist den server beigetreten!");
})

//verlassen
bot.on("guildMemberRemove", function(member){
    let channel = member.guild.channels.cache.find(ch => ch.name === "╠》willkommen-tschüss");
    channel.send(member.displayName + " hat den server verlassen!"); 
})



bot.login(TOKEN)
