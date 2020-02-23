function Pclass(name, level) {
    this.name = name;
    this.level = level;

    if (this.name == "Alchemist" ) 
    {
    this.BaseMod = 0.75
    this.GoodBadFortitude = 1
    this.GoodBadReflex= 1
    this.GoodBadWill= 0
    }
    else if (this.name == "WarPriest" ) 
    {
    this.BaseMod = 0.75
    this.GoodBadFortitude = 1
    this.GoodBadReflex= 0
    this.GoodBadWill= 1
    }

    this.BaseAttackBonus = [ Math.floor(this.BaseMod * level), 
                            Math.max (0, Math.floor(this.BaseMod * level) -5),  
                            Math.max (0, Math.max (0, Math.floor(this.BaseMod * level) -5) - 5)]
    this.FortitudeBaseSave = this.BaseSave (this.level, this.GoodBadFortitude)
    this.ReflexBaseSave = this.BaseSave (this.level, this.GoodBadReflex)
    this.WillBaseSave = this.BaseSave (this.level, this.GoodBadWill)


}

// This is where I put all my prototype functions
Pclass.prototype = {
    constructor: Pclass,

    BaseSave:function (level, good ) {
        if (good == 1) { 
            x = 2
            y = 2}
        else if (good == 0) {
            x = 3
            y = 0}

        return Math.floor (level / x) + y
    }
    //
    // Still need FortitudeSave, ReflexSave, and WillSave which are function of
    // above and AbilityModifiers (CONmod, DEXmod, WISmod)
    // and these are implemented based on my character traits.

}



Alchemist = new Pclass ("Alchemist", 8 )

console.log(Alchemist.name)
console.log(Alchemist.level)
console.log('F = ' + Alchemist.FortitudeBaseSave)
console.log('R = ' + Alchemist.ReflexBaseSave)
console.log('W = ' + Alchemist.WillBaseSave)
console.log('BaseAttackBonus = ' + Alchemist.BaseAttackBonus)

