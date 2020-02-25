function Alchemist(level) {

    this.BaseMod = 0.75
    this.GoodBadFortitude = 1
    this.GoodBadReflex= 1
    this.GoodBadWill= 0
    this.ExtractsPerDay = this.GetExtractsPerDay(this.level)
    this.NumAttackBombDice = Math.floor(level/2)

    Pclass.call (this, "Alchemist", level,  this.BaseMod, this.GoodBadFortitude, this.GoodBadReflex, this.GoodBadWill) 

}

// This is where I put all my prototype functions
Alchemist.prototype.Special = function ( level ) {
    Feats = [ ] 
    Features = [ ]
    NumDiscovery = Math.floor (level/2)
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
                Features.push ("Poison Use")
            case 1:
                Features.push ("Alchemy")
                Feats.push ("Brew Potion")
                // skipped Mutagen becase it should be Congnatgen because I am d ArchType Mind Chemist
                Feats.push ("Throw Anything")
                break;
    }
    this.Feats = Feats
    this.Features = Features
    this.NumDiscovery = NumDiscovery
    this.PoisonResistance = PoisonResistance
}
    
// Alchemist.prototype = new Pclass();
Alchemist.prototype.BaseSave = Pclass.BaseSave;
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

console.log(me.name)
console.log(me.level)
console.log('F = ' + me.FortitudeBaseSave)
console.log('R = ' + me.ReflexBaseSave)
console.log('W = ' + me.WillBaseSave)
console.log('BaseAttackBonus = ' + me.BaseAttackBonus)
console.log(me.Features)
console.log(me.Feats)
console.log("NumDiscovery is " + me.NumDiscovery)
console.log("PoisonResistance is " + me.PoisonResistance)

