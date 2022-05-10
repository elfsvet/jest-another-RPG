// require a module. we don't need to provide the js extension
const Player = require('../lib/Player');
// write a test that will fail
test('creates a player object', () => {
    const player = new Player("Dave");

    expect(player.name).toBe("Dave");
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});
// write minimal functional code in Player.js to make it pass
