const Potion = require('./Potion');
const Character = require('./Character');
// function Enemy(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//     // math random * 10 = 0-9 and + 85 range 85-94
//     // math.floor returns equal or less closest to the number we got 5 and 5.5 return 5. -5.5 return -6.
//     this.health = Math.floor(Math.random() * 10 + 85);
//     // 5-9
//     this.strength = Math.floor(Math.random() * 5 + 5);
//     // from 5-9
//     this.agility = Math.floor(Math.random() * 5 + 5);
// }

// Enemy.prototype = Object.create(Character.prototype);

// Enemy.prototype.getDescription = function() {
//     return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };


class Enemy extends Character {
    constructor(name, weapon) {
            // call parent constructor here:
        super(name);
        this.weapon = weapon;
        this.potion = new Potion();

        // math random * 10 = 0-9 and + 85 range 85-94
        // math.floor returns equal or less closest to the number we got 5 and 5.5 return 5. -5.5 return -6.
        this.health = Math.floor(Math.random() * 10 + 85);
        // 5-9
        this.strength = Math.floor(Math.random() * 5 + 5);
        // from 5-9
        this.agility = Math.floor(Math.random() * 5 + 5);
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}



module.exports = Enemy;