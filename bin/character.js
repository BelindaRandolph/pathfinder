function Character (name, level, Pclass, race, STR, DEX, CON, INT, WIS, CHA) {
    this.name = name;
    this.level = level;
    this.class = Pclass;
    this.race = race;
    this.STR = STR
    this.DEX = DEX
    this.CON = CON
    this.INT = INT
    this.WIS = WIS
    this.CHA = CHA
}

Character.prototype = {
    constructor: Character,

    // Based on first two columns of Table 1-3: Ability Modifiers and Bonus Spells
    AbilityModifier:function (AbilityScore)  { return Math.floor((AbilityScore - 10) / 2) },

    // Based on first and 3-12th columns of Table 1-3: Ability Modifiers and Bonus Spells
    BonusSpells:function (AbilityScore) 
        { 
        let BonusSpells = [0,0,0,0,0, 0,0,0,0]
        if (AbilityScore < 14) { BonusSpells = [0,1,0,0,0,0,0,0,0,0] }
        else if (AbilityScore < 16) { BonusSpells = [0,1,1,0,0,0,0,0,0,0] }
        else if (AbilityScore < 18) { BonusSpells = [0,1,1,1,0,0,0,0,0,0] }
        else if (AbilityScore < 20) { BonusSpells = [0,1,1,1,1,0,0,0,0,0] }
        else if (AbilityScore < 22) { BonusSpells = [0,2,1,1,1,1,0,0,0,0] }
        else if (AbilityScore < 24) { BonusSpells = [0,2,2,1,1,1,1,0,0,0] }
        else if (AbilityScore < 26) { BonusSpells = [0,2,2,2,1,1,1,1,0,0] }
        else if (AbilityScore < 28) { BonusSpells = [0,2,2,2,2,1,1,1,1,0] }
        else if (AbilityScore < 30) { BonusSpells = [0,3,2,2,2,2,1,1,1,1] }
        else if (AbilityScore < 32) { BonusSpells = [0,3,3,2,2,2,2,1,1,1] }
        else if (AbilityScore < 34) { BonusSpells = [0,3,3,3,2,2,2,2,1,1] }
        else if (AbilityScore < 36) { BonusSpells = [0,3,3,3,3,2,2,2,2,1] }
        else if (AbilityScore < 38) { BonusSpells = [0,4,3,3,3,3,2,2,2,2] }
        else if (AbilityScore < 40) { BonusSpells = [0,4,4,3,3,3,3,2,2,2] }
        else if (AbilityScore < 42) { BonusSpells = [0,4,4,4,3,3,3,3,2,2] }
        else if (AbilityScore < 44) { BonusSpells = [0,4,4,4,4,3,3,3,3,2] }
        else if (AbilityScore < 46) { BonusSpells = [0,5,4,4,4,4,3,3,3,3] }
    
        return BonusSpells
        }

}



Xandra = new Character ("Xandra", 8, "Alchemist", "Tiefling" , 10, 22, 14, 19, 12, 5)

console.log(Xandra.name)
console.log(Xandra.level)
console.log(Xandra.class)

console.log(Xandra.BonusSpells(Xandra.INT))
