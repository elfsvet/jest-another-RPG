const Potion = require('./Potion');

function Enemy(name, weapon) {
    this.name = name;
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

Enemy.prototype.getHealth = function () {
    return `The ${this.name}'s health is now ${this.health}!`;
};

Enemy.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    }
    return true;
};

Enemy.prototype.getAttackValue = function () {
    // 0-4
    const min = this.strength - 5;
    // 10-14
    const max = this.strength + 5;
    // min 0 max 13
    return Math.floor(Math.random() * (max - min) + min);
};

Enemy.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

Enemy.prototype.getDescription = function() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
};



module.exports = Enemy;