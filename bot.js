var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Character Variables
// var AttackBonus = 13
// var AttackDamage = 9
// var Character = 'Xandra'
// var HitPoints = 68
// var MaxHitPoints = HitPoints 
// var MaxBombs = 12
// var NumBombsRemaining = MaxBombs
// var Level = 8

// Used for EndSession and StartSession and for Level Up
SessionString = '{"Character":"Xandra","Level":8,"AttackBonus":13,"AttackDamage":9,"HitPoints":68,"MaxHitPoints":68,"MaxBombs":12,"NumBombsRemaining":12,"STR":10,"DEX":22,"CON":14,"INT":19,"WIS":12,"CHA":5,"STRmod":0,"DEXmod":6,"CONmod":2,"INTmod":4,"WISmod":1,"CHAmod":-3}'

var mystats = JSON.parse(SessionString)

function AbilityModifiersAndBonusSpells (AbilityScore):
    Modifier = MathFloor((AbilityScore - 10) / 2)
    let BonusSpells = [0,0,0,0,0, 0,0,0,0]
    else if (mystats.Level < 14) { BonusSpells = [0,1,0,0,0,0,0,0,0,0] }
    else if (mystats.Level < 16) { BonusSpells = [0,1,1,0,0,0,0,0,0,0] }
    else if (mystats.Level < 18) { BonusSpells = [0,1,1,1,0,0,0,0,0,0] }
    else if (mystats.Level < 20) { BonusSpells = [0,1,1,1,1,0,0,0,0,0] }
    else if (mystats.Level < 22) { BonusSpells = [0,2,1,1,1,1,0,0,0,0] }
    else if (mystats.Level < 24) { BonusSpells = [0,2,2,1,1,1,1,0,0,0] }
    else if (mystats.Level < 26) { BonusSpells = [0,2,2,2,1,1,1,1,0,0] }
    else if (mystats.Level < 28) { BonusSpells = [0,2,2,2,2,1,1,1,1,0] }
    else if (mystats.Level < 30) { BonusSpells = [0,3,2,2,2,2,1,1,1,1] }
    else if (mystats.Level < 32) { BonusSpells = [0,3,3,2,2,2,2,1,1,1] }
    else if (mystats.Level < 34) { BonusSpells = [0,3,3,3,2,2,2,2,1,1] }
    else if (mystats.Level < 36) { BonusSpells = [0,3,3,3,3,2,2,2,2,1] }
    else if (mystats.Level < 38) { BonusSpells = [0,4,3,3,3,3,2,2,2,2] }
    else if (mystats.Level < 40) { BonusSpells = [0,4,4,3,3,3,3,2,2,2] }
    else if (mystats.Level < 42) { BonusSpells = [0,4,4,4,3,3,3,3,2,2] }
    else if (mystats.Level < 44) { BonusSpells = [0,4,4,4,4,3,3,3,3,2] }
    else if (mystats.Level < 46) { BonusSpells = [0,5,4,4,4,4,3,3,3,3] }

return [AbilityModify, BonusSpellArray]

function GetExtractsPerDay () {
    let ExtractsPerDay = [0,0,0,0,0, 0,0]

    if (mystats.Level == 1) { Level1Extracts = 1 }
    else if (mystats.Level == 2) { Level1Extracts = 2 }
    else if (mystats.Level < 5) { Level1Extracts = 3 }
    else if (mystats.Level < 8) { Level1Extracts = 4 }
    else { Level1Extracts = 5 }

    if (mystats.Level < 4) { Level2Extracts = 0 }
    else if (mystats.Level == 4) { Level2Extracts = 1 }
    else if (mystats.Level == 5) { Level2Extracts = 2 }
    else if (mystats.Level < 8) { Level2Extracts = 3 }
    else if (mystats.Level < 12) { Level2Extracts = 4 }
    else { Level2Extracts = 5 }
    
    if (mystats.Level < 8) { Level3Extracts = 0 }
    else if (mystats.Level == 7) { Level3Extracts = 1 }
    else if (mystats.Level == 8) { Level3Extracts = 2 }
    else if (mystats.Level <11 ) { Level3Extracts = 3 }
    else if (mystats.Level < 15) { Level3Extracts = 4 }
    else { Level3Extracts = 5 }
    
    if (mystats.Level < 10) { Level4Extracts = 0 }
    else if (mystats.Level == 11) { Level4Extracts = 1 }
    else if (mystats.Level == 12) { Level4Extracts = 2 }
    else if (mystats.Level <14 ) { Level4Extracts = 3 }
    else if (mystats.Level < 18) { Level4Extracts = 4 }
    else { Level4Extracts = 5 }

    if (mystats.Level < 13) { Level5Extracts = 0 }
    else if (mystats.Level == 13) { Level5Extracts = 1 }
    else if (mystats.Level == 14) { Level5Extracts = 2 }
    else if (mystats.Level <17 ) { Level5Extracts = 3 }
    else if (mystats.Level < 19) { Level5Extracts = 4 }
    else { Level5Extracts = 5 }

    if (mystats.Level < 16) { Level6Extracts = 0 }
    else if (mystats.Level == 16) { Level6Extracts = 1 }
    else if (mystats.Level == 17) { Level6Extracts = 2 }
    else if (mystats.Level == 18 ) { Level6Extracts = 3 }
    else if (mystats.Level ==  19) { Level6Extracts = 4 }
    else { Level6Extracts = 5 }
}


// 
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function Statistics (cid) {
    msg = mystats.Character + ', Level= ' + mystats.Level + ', has the following statistics: '
        + '\n   AttackBonus : ' + mystats.AttackBonus 
        + '\n   MaxHitPoints : ' + mystats.MaxHitPoints 
        + '\n   Constitution : ' + mystats.CON
        + '\n   AttackDamage  : ' + mystats.AttackDamage
        + '\n   Bombs Remaining : ' + mystats.NumBombsRemaining
        + '\n   MaxBombs : ' + mystats.MaxBombs
        + '\n   HitPoints : ' + mystats.HitPoints
    botmsg(cid, msg)
}

function Statistics2 (cid) {
    botmsg (cid,mystats.Character + ', Level= ' + mystats.Level + ', has the following statistics: ')
    var little = 800
    sleep(little).then(() => {  
        botmsg (cid,'   AttackBonus : ' + mystats.AttackBonus)
        sleep(little).then(() => {  
            botmsg (cid,'   MaxHitPoints : ' + mystats.MaxHitPoints )
            sleep(little).then(() => {  
                botmsg (cid,'   Constitution : ' + mystats.CON)
                sleep(little).then(() => {  
                    botmsg (cid,'   AttackDamage  : ' + mystats.AttackDamage)
                    sleep(little).then(() => {  
                        botmsg (cid,'   Bombs Remaining : ' + mystats.NumBombsRemaining)
                        sleep(little).then(() => {  
                            botmsg (cid,'   MaxBombs : ' + mystats.MaxBombs)
                            sleep(little).then(() => {  
                                botmsg (cid,'   HitPoints : ' + mystats.HitPoints)
                            })
                        })
                    })
                })
            })
        })
    })
}

function ModBombs (deltax) { 
    mystats.NumBombsRemaining = mystats.NumBombsRemaining + deltax;
    if (mystats.NumBombsRemaining > mystats.MaxBombs) mystats.NumBombsRemaining = mystats.MaxBombs
}

function ModHP (deltaHP) {
    mystats.HitPoints = mystats.HitPoints + deltaHP
    if (mystats.HitPoints > mystats.MaxHitPoints) { mystats.HitPoints = mystats.MaxHitPoints; }
}
function StatHP () { 
    return 'HitPoints='+ mystats.HitPoints 
}
function ConcernHP (cid) { 
    if (mystats.HitPoints <= 0) {
        msg = ''
        if (mystats.HitPoints == 0) {
            msg = 'Hit Points = ' + mystats.HitPoints + '. You are disabled.'
        }
        else if (mystats.HitPoints < 0 && mystats.HitPoints > -mystats.CON) {
            msg = 'Hit Points = ' + mystats.HitPoints + '. You are unconscious and dying. http://legacy.aonprd.com/coreRulebook/glossary.html#unconscious http://legacy.aonprd.com/coreRulebook/glossary.html#dying'
        }
        else if (mystats.HitPoints <= -mystats.CON) {
            msg = 'Hit Points = ' + mystats.HitPoints + '. You are dead. http://legacy.aonprd.com/coreRulebook/glossary.html#dead'
        }
        botmsg( cid,msg) 
    }
}

function DiceParser (n,s,p) {
    var tot = 0

    var msg = 'Details:['+n+'d'+s
    if (p > 0) { 
        msg += '+' + p
        tot = tot + p
    }
    msg +=    '] ('
    var i;
    for (i = 0; i < n; i++) { 
        var diceRoll = Math.floor( Math.random() * s ) +1;
        tot = tot + diceRoll
        msg += diceRoll + ' ' 
    }
    msg += ')]'
    msg = '#' + tot + ' ' + msg
    return [msg, tot]
}

function botmsg( cid,strtxt) {
    bot.sendMessage({
        to: cid,
        message: strtxt
        });
}




// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, cid, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '?') {
        //botmsg(cid,  Character);
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        switch(cmd) {
            case 'curemoderatewounds':
                botmsg (cid, 'https://www.d20pfsrd.com/magic/all-spells/c/cure-moderate-wounds/')
            break;
            case 'curelightwounds':
                botmsg (cid, 'https://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds')
            break;
            case 'fast':
                botmsg (cid, 'https://www.d20pfsrd.com/classes/base-classes/alchemist/discoveries/paizo-alchemist-discoveries/fast-bombs/' )
                if (mystats.NumBombsRemaining < 2) {  
                    botmsg (cid, 'Insufficient Bombs Remain; only have ' + mystats.NumBombsRemaining) }
            break;
            case 'precise':
                botmsg (cid, 'https://www.d20pfsrd.com/classes/base-classes/alchemist/discoveries/paizo-alchemist-discoveries/precise-bombs/')
                if (NumBombsRemaining < 1) {  botmsg (cid, 'Insufficient Bombs Remain; only have ' + NumBombsRemaining )}
            break;

        }
    }
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        var args1 ;
        if ((args.length > 1) && (cmd.startsWith('damage') || cmd.startsWith('heal'))) 
        { 
            args1 = parseInt(args[1]) 
        } 
        else 
        {
            args1 = args[1]
        }

        var username = message.author;
       
        args = args.splice(1);
        switch(cmd) {
            case 'startday':
                // In order to create a bomb, the alchemist must use a small vial containing an ounce of liquid catalyst—the alchemist can create this liquid catalyst from small amounts of chemicals from an alchemy lab, and these supplies can be readily refilled in the same manner as a spellcaster’s component pouch. Most alchemists create a number of catalyst vials at the start of the day equal to the total number of bombs they can create in that day—once created, a catalyst vial remains usable by the alchemist for years
                mystats.NumBombsRemaining = mystats.MaxBombs
                msg = mystats.Character + ' has started created ' +  mystats.NumBombsRemaining + ' catalyst vials for her bombs.'
                botmsg (cid, msg)
            break;
            case 'curelightwounds':
                // When laying your hand upon a living creature, you channel positive energy that cures 1d8 points of damage +1 point per caster level (maximum +5). Since undead are powered by negative energy, this spell deals damage to them instead of curing their wounds. An undead creature can apply Spell Resistance, and can attempt a Will save to take half damage.
                var Roll = DiceParser(1,8,Math.min(5,mystats.Level))
                var msg = Roll[0];
                var val = Roll[1];
                botmsg (cid, msg + ' # ' + mystats.Character + ' Cure Light Wounds roll')
                botmsg (cid, val + ' # ' + mystats.Character + ' Cure Light Wounds roll')
                ModHP(val);
                sleep(2000).then(() => {  
                    ConcernHP (cid)
                    botmsg (cid,StatHP())
                })
            break;
            case 'curemoderatewounds':
                // This spell functions like cure light wounds, except that it cures 2d8 points of damage + 1 point per caster level (maximum +10).
                var Roll = DiceParser(2,8,Math.min(10,mystats.Level))
                var msg = Roll[0];
                var val = Roll[1];
                botmsg (cid, msg + ' # ' + mystats.Character + ' Cure Moderate Wounds roll')
                botmsg (cid, val + ' # ' + mystats.Character + ' Cure Moderate Wounds roll')
                ModHP(val);
                sleep(2000).then(() => {  
                    ConcernHP (cid)
                    botmsg (cid,StatHP())
                })
            break;
            
            case 'newday':
                NumBombsRemaining = MaxBombs
            break;
            case 'fast':
                if (mystats.NumBombsRemaining < 2) {  
                    botmsg (cid, 'Insufficient Bombs Remain; only have ' + mystats.NumBombsRemaining )}
                else {
                    ModBombs (-2)
                    
                    var Roll = DiceParser(1,20,mystats.AttackBonus)
                    var msg = Roll[0];
                    var val = Roll[1];
                    botmsg (cid,msg + ' # ' + mystats.Character + ' attack with Fast Bomb (1st)')
                    sleep(2000).then(() => {  
                        var Roll = DiceParser(4,6,mystats.AttackDamage)
                        var msg = Roll[0];
                        var val = Roll[1];
                        botmsg (cid,msg + ' # Damage Roll for 1st ' + mystats.Character + ' Fast Bomb')
                        sleep(2000).then(() => {
                            FastAttackBonus = mystats.AttackBonus - 5
                            var Roll = DiceParser(1,20,mystats.AttackBonus)
                            var msg = Roll[0];
                            var val = Roll[1];
                            botmsg (cid,msg + ' # ' + mystats.Character + ' attack with Fast Bomb (2nd)')
                            sleep(2000).then(() => {
                                var Roll = DiceParser(4,6,mystats.AttackDamage)
                                var msg = Roll[0];
                                var val = Roll[1];
                                botmsg (cid,msg + ' # Damage Roll for 2nd ' + mystats.Character + ' Fast Bomb')
                            })
                        })
                    })
                }
            break;
            case 'precise':
                if (mystats.NumBombsRemaining < 1) {  
                    botmsg (cid, 'Insufficient Bombs Remain; only have ' + mystats.NumBombsRemaining )}
                else {
                    ModBombs (-1)
                    var Roll = DiceParser(1,20,mystats.AttackBonus)
                    var msg = Roll[0];
                    var val = Roll[1];
                    botmsg (cid,msg + ' # ' + mystats.Character + ' attack with Precise Bomb')
                    sleep(2000).then(() => {  
                        var Roll = DiceParser(4,6,mystats.AttackDamage)
                        var msg = Roll[0];
                        var val = Roll[1];
                        botmsg (cid,msg + ' # Damage Roll for ' + mystats.Character + ' Precise Bomb')
                    })
                }
            break;
            case 'heal':
                var dataHP = args1;
                ModHP(+dataHP);
                sleep(2000).then(() => {  
                    ConcernHP (cid)
                    botmsg (cid,StatHP())
                })
            break;
            case 'damage':
                var dataHP = args1;
                ModHP(-dataHP);
                sleep(2000).then(() => {  
                    ConcernHP (cid)
                    botmsg (cid,StatHP())
                })
            break;
            case 'stat':
                Statistics(cid)
            break;
            case 'endsession':
                // {"message":{"name":"John","age":30,"city":"New York"},"level":"info"}
                msg = '{"Character":"' + mystats.Character + '",' 

                        + '"Level":'    +mystats.Level + ','  
                        + '"AttackBonus":'+mystats.AttackBonus + ',' 
                        + '"AttackDamage":'+mystats.AttackDamage + ',' 
                        + '"HitPoints":'+mystats.HitPoints + ',' 
                        + '"MaxHitPoints":'+mystats.MaxHitPoints + ',' 
                        + '"MaxBombs":'+mystats.MaxBombs + ',' 
                        + '"NumBombsRemaining":'+mystats.NumBombsRemaining + ',' 
                        + '"Constitution":'+mystats.CON+ '}'

                msg = 'Save this message for your next session:' + msg
                botmsg (cid,msg)
            break;
            case 'startsession':
                var SessionString = args1;
                mystats = JSON.parse(SessionString)
                botmsg(cid, mystats.Character + " has been built")
            break;
            // Just add any case commands if you want to..
         }
     }
});
