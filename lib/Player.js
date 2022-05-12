const Potion = require('../lib/Potion');
const Character = require('./Character');

// write the constructor function that creates those objects.
// name sets a default empty string if no name is provided. This is another ES6 trick babe)
// function Player(name = '') {


/* With ES5
function Player(name = '') {
 Character.call(this, name);

 this.inventory = [new Potion('health'), new Potion()];
}
 */




//     this.name = name;

//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);

//     this.inventory = [new Potion('health'), new Potion()];
// }

// // inherit prototype methods from Character here: super() does it in ES6 keyword referencing the parent object
// Player.prototype = Object.create(Character.prototype);

// Player.prototype.getStats = function () {
//     return {
//         potions: this.inventory.length,
//         health: this.health,
//         strength: this.strength,
//         agility: this.agility
//     };
// };

// Player.prototype.getInventory = function () {
//     if (this.inventory.length) {
//         return this.inventory;
//     }
//     return false;
// };

// Player.prototype.addPotion = function (potion) {
//     this.inventory.push(potion);
// };

// Player.prototype.usePotion = function (index) {
//     const potion = this.getInventory().splice(index, 1)[0];

//     switch (potion.name) {
//         case 'agility':
//             this.agility += potion.value;
//             break;
//         case 'health':
//             this.health += potion.value;
//             break;
//         case 'strength':
//             this.strength += potion.value;
//             break;
//     }
// };

class Player extends Character{
    constructor(name = '') {
            // call parent constructor here:
        super(name);
        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];
        
        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}



module.exports = Player;