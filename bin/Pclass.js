
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


    this.addFeat = function (featstr) {
        if ( this.Feats.length < this.NumFeats ) {
            this.Feats.push (featstr)
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



// me = new Pclass ("Alchemist", 8 , 0.75, 1, 1, 0)
// me.addFeat("PointBlankShot")

// console.log(me.name)
// console.log('Feats = ' + me.Feats)
// console.log('R = ' + me.ReflexBaseSave)
// console.log('W = ' + me.WillBaseSave)
// console.log('BaseAttackBonus = ' + me.BaseAttackBonus)

