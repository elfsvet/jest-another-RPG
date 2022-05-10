// write the constructor function that creates those objects.
// name sets a default empty string if no name is provided. This is another ES6 trick babe)
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random()*5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
} 

module.exports = Player;