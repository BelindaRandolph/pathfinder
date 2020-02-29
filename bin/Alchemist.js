
// This is where I put all my prototype functions
//
Alchemist.prototype.addDiscovery = function (discoverystr) {
    if ( this.Discoveries.length < this.NumDiscovery ) {
        this.Discoveries.push (discoverystr)
    }
}  

// SKILLSTR = 5
// MODTYPE = 1
// RANKS = 3
// MISCMOD = 4
// ABILITYMOD = 2
// TOT = 0

var alchemistskills = ["Appraise" , "Craft", "Disable Device" , "Fly" , "Heal" , "Knowledge (arcana)" , "Knowledge (nature)" , "Perception" , "Profession" , "Sleight of Hand" , "Spellcraft" , "Survival" , "Use Magic Device" ]



function Alchemist(level) {
    this.mindchemist = false
    this.BaseMod = 0.75
    this.GoodBadFortitude = 1
    this.GoodBadReflex= 1
    this.GoodBadWill= 0
    this.NumDiscovery = 0 
    this.ExtractsPerDay = this.GetExtractsPerDay(level)
    this.NumAttackBombDice = Math.floor(level/2)

    Pclass.call (this, "Alchemist", level,  this.BaseMod, this.GoodBadFortitude, this.GoodBadReflex, this.GoodBadWill) 
    this.Discoveries = []
    this.skills = []
}

Alchemist.prototype.setMindchemist= function () {
    this.mindchemist = true
    this.NumDiscovery = 3 // the following 3 discoveries are free for MindChemists
    console.log ("no discoveries, right?")
    console.log (this.Discoveries) 
    this.addDiscovery("grand cognatogen")
    this.addDiscovery("greater cognatogen")
    this.addDiscovery("infuse mutagen")
    console.log ("setMindchemist ") 
    console.log (this.Discoveries) 
}

Alchemist.prototype.setNumRanks= function () {
    this.TotSkillRanks = this.level * (4 + this.INTMod)
    this.RemSkillRanks = this.TotSkillRanks
}


    // The alchemist’s class skills are Appraise (Int), Craft (any) (Int), Disable Device (Dex), Fly (Dex), Heal (Wis), Knowledge (arcana) (Int), Knowledge (nature) (Int), Perception (Wis), Profession (Wis), Sleight of Hand (Dex), Spellcraft (Int), Survival (Wis), Use Magic Device (Cha).

Alchemist.prototype.findSkill = function (skillstr) {
    found = false
    for (i = 0; i < n; i++) {
        if (skills[i][SKILLSTR] == skillstr) {
            found = true
            foundskill = skills[i];
        }
    }
    return foundskill
}

// For !bluff just do same action as !linguistics
// Alchemist.prototype.addSpecialSkill= function (skillstr) {
//     console.log("addSpecialSkills")
//     console.log(this.Feats)
//     console.log (skillstr)
//     console.log (( (skillstr == "Bluff" || skillstr == "Diplomacy" || skillstr == "Intimidate" ) && this.Feats.includes ("Orator") ))
//     if ( (skillstr == "Bluff" || skillstr == "Diplomacy" || skillstr == "Intimidate" ) && this.Feats.includes ("Orator") ) {
//         foundskill =  this.findSkill ("Linguistics")
//         this.skills.push  ([ this.findSkill ("Linguistics")[TOT], 'XXX', 0, 0, 0, skillstr])
//     }
//     console.log(this.skills)
// }

Alchemist.prototype.getAbilityModifier= function (ability) {
    switch (ability) {
        case "DEX" :
            AbilityMod  = this.DEXMod;
            break;
        case "WIS" :
            AbilityMod  = this.WISMod;
            break;
        case "INT" :
            AbilityMod  = this.INTMod;
            break;
        case "CHA" :
            AbilityMod  = this.CHAMod;
            break;
        case "STR" :
            AbilityMod  = this.STRMod;
            break;
        case "CON" :
            AbilityMod  = this.CONMod;
            break;
    }
    return AbilityMod
}

Alchemist.prototype.getSkillAbilityModifier= function (skillstr) {
    foundskill = this.findSkill (skillstr)
    foundskill[RANKS] = ranks;
    switch (foundskill[MODTYPE]) {
        case "DEX" :
            AbilityMod  = this.DEXMod;
            break;
        case "WIS" :
            AbilityMod  = this.WISMod;
            break;
        case "INT" :
            AbilityMod  = this.INTMod;
            break;
        case "CHA" :
            AbilityMod  = this.CHAMod;
            break;
        case "STR" :
            AbilityMod  = this.STRMod;
            break;
        case "CON" :
            AbilityMod  = this.CONMod;
            break;
    }
    return AbilityMod 
}

Alchemist.prototype.addSkills= function (skillstr,ranks) {
    var n = skills.length;
    var i;
    var enough_ranks = (this.RemSkillRanks >= ranks)
    foundskill = this.findSkill (skillstr)
    foundskill[RANKS] = ranks;
    if (ranks > 0 && alchemistskills.includes(skillstr)) { foundskill[MISCMOD] = 3
    }
    if (skillstr.startsWith("Linguistics") && this.Feats.includes( "Skill Focus (Linguistics)")) { foundskill[MISCMOD] =  3
    }
    if (foundskill[RANKS] > 0 && enough_ranks) {
        foundskill[TOT] = foundskill[ABILITYMOD] + foundskill[RANKS] + foundskill[MISCMOD]

        this.RemSkillRanks = this.RemSkillRanks - ranks
    }
    if (enough_ranks) {
        this.skills.push (foundskill)
        console.log ("Added the skill [" + skillstr+ "]. Only " + this.RemSkillRanks + " remain.")
    }
    else if ( enough_ranks == false) {
        console.log ("Did not add skill [" + skillstr + "]. Because there were insufficient ranks remaining." )
      }
}  
 
Alchemist.prototype.Special = function ( ) {
    level = this.level
    // Feats = [ ] This was initialized in Pclass
    Features = [ ]
    NumDiscovery = this.NumDiscovery + Math.floor (level/2)
    PoisonResistance = 0
    switch (level){
            case 20:
            case 19:
            case 18:
                Features.push ("Instant Alchemy")
            case 17:
            case 16:
            case 15:
            case 14:
                Features.push ("Persistent Mutagen")
            case 13:
            case 12:
            case 11:
            case 10:
                PoisonResistance = 100 // At 10th level, an achemist becomes completely immune to poison
                Features.push ("Poison Immunity")
            case 9:
            case 8: 
                PoisonResistance = PoisonResistance + 2
            case 7: 
            case 6: 
                Features.push ("Swift Poisening")
            case 5: 
                PoisonResistance = PoisonResistance + 2
            case 4: 
            case 3: 
                Features.push ("Swift Alchemy")
            case 2: 
                PoisonResistance = PoisonResistance + 2
                if (this.mindchemist)  { Features.push ("Perfect Recall") }
                else                   { Features.push ("Poison Use") }
            case 1:
                Features.push ("Alchemy")
                this.Feats.push ("Brew Potion")
                // skipped Mutagen becase it should be Congnatgen because I am d ArchType Mind Chemist
                this.Feats.push ("Throw Anything")
                break;
    }
    // this.Feats = Feats
    this.Features = Features
    this.NumDiscovery = NumDiscovery
    this.PoisonResistance = PoisonResistance
}
    
// Alchemist.prototype = new Pclass();
Alchemist.prototype.BaseSave = Pclass.BaseSave;
Alchemist.prototype.addFeat = Pclass.addFeat;
Alchemist.prototype.setAbilities= Pclass.setAbilities;
Alchemist.prototype.setAttackBonus= Pclass.setAttackBonus;
// Alchemist.prototype = new Pclass();
// Alchemist.prototype.constructor = Pclass;
Alchemist.prototype.GetExtractsPerDay = function ( level  ) 
{
    let ExtractsPerDay = [0,0,0,0,0, 0,0]

    switch (level) {
            case 1:
                ExtractsPerDay = [0, 1,0,0,0,0,0]
                break;
            case 2:
                ExtractsPerDay = [0, 2,0,0,0,0,0]
                break;
            case 3:
                ExtractsPerDay = [0, 3,0,0,0,0,0]
                break;
            case 4:
                ExtractsPerDay = [0, 3,1,0,0,0,0]
                break;
            case 5:
                ExtractsPerDay = [0, 4,2,0,0,0,0]
                break;
            case 6:
                ExtractsPerDay = [0, 4,3,0,0,0,0]
                break;
            case 7:
                ExtractsPerDay = [0, 4,3,1,0,0,0]
                break;
            case 8:
                ExtractsPerDay = [0, 4,4,2,0,0,0]
                break;
            case 9:
                ExtractsPerDay = [0, 5,4,3,0,0,0]
                break;
            case 10:
                ExtractsPerDay = [0, 5,4,3,1,0,0]
                break;
            case 11:
                ExtractsPerDay = [0, 5,4,4,2,0,0]
                break;
            case 12:
                ExtractsPerDay = [0, 5,5,4,3,0,0]
                break;
            case 13:
                ExtractsPerDay = [0, 5,5,4,3,1,0]
                break;
            case 14:
                ExtractsPerDay = [0, 5,5,4,4,2,0]
                break;
            case 15:
                ExtractsPerDay = [0, 5,5,5,4,3,0]
                break;
            case 16:
                ExtractsPerDay = [0, 5,5,5,4,3,1]
                break;
            case 17:
                ExtractsPerDay = [0, 5,5,5,4,4,2]
                break;
                break;
            case 18:
                ExtractsPerDay = [0, 5,5,5,5,4,3]
                break;
            case 19:
                ExtractsPerDay = [0, 5,5,5,5,5,4]
                break;
            case 20:
                ExtractsPerDay = [0, 5,5,5,5,5,5]
                break;

    } // switch
    return ExtractsPerDay 
}


me = new Alchemist (8 )
me.setMindchemist()
me.Special ();
me.setAbilities (10,22,14,19,12,5)
me.setNumRanks()
console.log(me.AttackBase)
me.setAttackBonus( me.AttackBase, me.DEXMod)
console.log( me.name + " has AttackBonus of " + me.AttackBonus + " since she has Point Blank Shot" )
me.addFeat("Point Blank Shot")
me.addFeat("Precise Shot")
me.addFeat("Skill Focus (Linguistics)")
me.addFeat("Orator")
console.log(me.Feats)
me.addDiscovery ("Infusion")
me.addDiscovery ("Precise Bombs")
me.addDiscovery ("Smoke Bombs")
me.addDiscovery ("Fast Bombs")
console.log ("about to addSkills")
me.addSkills ("Appraise", 1)
//me.addSkills ("Craft Alchemy", 4)
me.addSkills ("Craft", 4)
me.addSkills ("Fly", 1)
me.addSkills ("Knowledge (arcana)",7)
me.addSkills ("Knowledge (dungeoneering)",7)
me.addSkills ("Knowledge (engineering)",1)
me.addSkills ("Knowledge (geography)",1)
me.addSkills ("Knowledge (history)",1)
me.addSkills ("Knowledge (local)",4)
me.addSkills ("Knowledge (nature)",7)
me.addSkills ("Knowledge (nobility)",1)
me.addSkills ("Knowledge (planes)",7)
me.addSkills ("Knowledge (religion)",7)
me.addSkills ("Linguistics", 8)
me.addSkills ("Perception", 1)
me.addSkills ("Spellcraft", 7)
me.addSkills ("Survival", 1)

me.setAttackBonus( me.AttackBase, me.DEXMod)
console.log( me.name + " has AttackBonus of " + me.AttackBonus + " since she has Point Blank Shot" )
// Calculate my AttackBonus based on Base Attack Bonus + Dex Mod + PointBlankShot
// NumFeats = Math.ceiling (level/2)


console.log(me.name)
console.log(me.level)
console.log('F = ' + me.FortitudeBaseSave)
console.log('R = ' + me.ReflexBaseSave)
console.log('W = ' + me.WillBaseSave)
console.log('BaseAttackBonus = ' + me.BaseAttackBonus)
console.log(me.Features)
console.log(me.Feats)
console.log(me.Discoveries)
console.log("NumFeats is " + me.NumFeats)
console.log("NumDiscovery is " + me.NumDiscovery)
console.log("PoisonResistance is " + me.PoisonResistance)
console.log("Extracts is " + me.ExtractsPerDay)
console.log("Discoveries " + me.Discoveries)
console.log( me.name + " has AttackBonus of " + me.AttackBonus + " since she has Point Blank Shot" )
console.log (me.skills)
console.log (me.findSkill('Linguistics'))

// After you are done, I have a couple of Pathfinder questions regarding skills.   Sometimes my INT modifier is a 4, but other times it is listed as an 8.  It is really a 4.  Also, what is the formula for the total number of ranks allowed.  And, what is the MiscMod  of 3?
    // the summary is that certain skills are alchemist class skills which is where the misc +3 comes from and since you are a MindChemist you get double your intelligence on knowledge skills which is where the 8 comes from.
    // The alchemist’s class skills are Appraise (Int), Craft (any) (Int), Disable Device (Dex), Fly (Dex), Heal (Wis), Knowledge (arcana) (Int), Knowledge (nature) (Int), Perception (Wis), Profession (Wis), Sleight of Hand (Dex), Spellcraft (Int), Survival (Wis), Use Magic Device (Cha).
    // Skill Ranks per Level: 4 + Int modifier = 8*(4+4)=64.
    // The definition of a class skill is that you get a +3 to the skill if it is a skill you have ranks in.  So, if for a given skill, the rank is still 0, then the MiscMod can not be applied.
    // In theory the purpose is to incentivize the player to take at least one rank in each of their class skills. But obviously theory is different than practice

// Discuss with Matthew: A mindchemist may select Skill Focus (Disable Device, Disguise, Heal, any Knowledge skill, Sense Motive, or Spellcraft) in place of a discovery.
// Discuss with Matthew: At 1st level, a mindchemist learns how to create a cognatogen, as per the cognatogen discovery.
// Discuss with Matthew: A mindchemist may learn three languages in place of a discovery.  
// Implemented.  Discuss with Matthew: Discoveries: The following discoveries complement the mindchemist archetype: grand cognatogen, greater cognatogen, infuse mutagen.
