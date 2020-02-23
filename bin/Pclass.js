function Pclass(name, level) {
    this.name = name;
    this.level = level;
 
}

// This is where I put all my prototype functions
Pclass.prototype = {
    constructor: Pclass,

    // Based on first two columns of Table 1-3: Ability Modifiers and Bonus Spells
    BaseAttackBonus:function (level)  { 
        if (level < 5)         {BaseAttackBonus = [level-1,0,0]}
        else if  (level < 7)   {BaseAttackBonus = [level-2,0,0]}
        else if  (level == 8)  {BaseAttackBonus = [6      ,1,0]}
        else if  (level == 9)  {BaseAttackBonus = [6      ,1,0]}
        else if  (level == 10) {BaseAttackBonus = [7      ,2,0]}
        else if  (level == 11) {BaseAttackBonus = [8      ,3,0]}
        else if  (level == 12) {BaseAttackBonus = [9      ,4,0]}
        else if  (level == 13) {BaseAttackBonus = [9      ,4,0]}
        else if  (level == 14) {BaseAttackBonus = [10      ,5,0]}
        else if  (level == 15) {BaseAttackBonus = [11      ,6,1]}
        else if  (level == 16) {BaseAttackBonus = [12      ,7,2]}
        else if  (level == 17) {BaseAttackBonus = [12      ,7,2]}
        else if  (level == 18) {BaseAttackBonus = [13      ,8,3]}
        else if  (level == 19) {BaseAttackBonus = [14      ,8,4]}
        else if  (level == 20) {BaseAttackBonus = [15      ,10,5]}
        return BaseAttackBonus

    },
    FortitudeBaseSave:function (level)  { return Math.floor (level/2) + 2 },
    ReflexBaseSave:function (level)  { return Math.floor (level/2) + 2 },
    WillBaseSave:function (level)  { return Math.floor (level / 3)}

    // Still need FortitudeSave, ReflexSave, and WillSave which are function of
    // above and AbilityModifiers (CONmod, DEXmod, WISmod)
    // and these are implemented based on my character traits.

}



Alchemist = new Pclass ("Xandra", 8 )

console.log(Alchemist.name)
console.log(Alchemist.level)
console.log('F = ' + Alchemist.FortitudeBaseSave(Alchemist.level))
console.log('R = ' + Alchemist.ReflexBaseSave(Alchemist.level))
console.log('W = ' + Alchemist.WillBaseSave(Alchemist.level))
console.log('BaseAttackBonus = ' + Alchemist.BaseAttackBonus(Alchemist.level))

