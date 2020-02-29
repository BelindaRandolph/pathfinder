
//  Pclass.prototype.BaseSave = function ( level, good) {
//          if (good == 1) { 
//              x = 2
//              y = 2}
//          else if (good == 0) {
//              x = 3
//              y = 0}
//  
//          return Math.floor (level / x) + y
//  }

function Pclass(name, level, BaseMod, GoodBadFortitude, GoodBadReflex, GoodBadWill) {
    this.name = name;
    this.level = level;
    this.NumFeats = Math.ceil (level/2)
    this.RemFeats = this.NumFeats
    this.Feats = []
    // console.log ("name is " + name)
    // console.log ("level is " + level)
    // console.log (GoodBadFortitude, GoodBadReflex, GoodBadWill)


    x = [ Math.floor(BaseMod * level),
                            Math.max (0, Math.floor(BaseMod * level) -5),
                            Math.max (0, Math.max (0, Math.floor(BaseMod * level) -5) - 5)]

    this.BaseAttackBonus = [ Math.floor(BaseMod * level), 
                            Math.max (0, Math.floor(BaseMod * level) -5),  
                            Math.max (0, Math.max (0, Math.floor(BaseMod * level) -5) - 5)]

    this.setAttackBonus = function (AttackBase, Modifier) {
        havePointBlankShot = 0;
        if (this.Feats.includes ( "Point Blank Shot" ) ) { havePointBlankShot = 1 }
        this.AttackBonus = [0,0,0]
        var i;
        for (i = 0; i < 3; i++) {
            if (this.BaseAttackBonus[i] > 0 ) {
                this.AttackBonus[i] = this.BaseAttackBonus[i] + Modifier + havePointBlankShot;
            }
        }
    }


    this.setAbilities = function (STR,DEX,CON, INT,WIS,CHA) {
        this.STR = STR
        this.DEX = DEX
        this.CON = CON
        this.INT = INT
        this.WIS = WIS
        this.CHA = CHA

        this.STRMod = Math.floor((STR-10)/2)
        this.DEXMod = Math.floor((DEX-10)/2)
        this.CONMod = Math.floor((CON-10)/2)
        this.INTMod = Math.floor((INT-10)/2)
        this.WISMod = Math.floor((WIS-10)/2)
        this.CHAMod = Math.floor((CHA-10)/2)
    }

    this.addFeat = function (featstr) {

        if ( this.RemFeats > 0 ) {
            this.Feats.push (featstr)
            this.RemFeats = this.RemFeats - 1
        }
    }

    BaseSave = function ( level, good) {
        if (good == 1) {
            x = 2
            y = 2
        }
        else if (good == 0) {
            x = 3
            y = 0}

        return Math.floor (level / x) + y
    }

    this.FortitudeBaseSave = BaseSave (this.level, GoodBadFortitude)
    this.ReflexBaseSave = BaseSave (this.level, GoodBadReflex)
    this.WillBaseSave = BaseSave (this.level, GoodBadWill)
}



me = new Pclass ("Alchemist", 8 , 0.75, 1, 1, 0)
me.addFeat("PointBlankShot")
me.setAbilities (10,22,14,19,12,5)

// console.log(me.name)
// console.log('Feats = ' + me.Feats)
// console.log('R = ' + me.ReflexBaseSave)
// console.log('W = ' + me.WillBaseSave)
// console.log('BaseAttackBonus = ' + me.BaseAttackBonus)
// console.log (me.STR)
// console.log (me.DEX)
// console.log (me.CON)
// console.log (me.INT)
// console.log (me.WIS)
// console.log (me.CHA)

