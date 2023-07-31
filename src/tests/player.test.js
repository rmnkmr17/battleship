import { Gameboard } from "../gameboard";
import { Player } from "../player";

describe("Player", () => {
  test("player should attack the enemy Gameboard", () => {
    const playerGameboard = Gameboard();
    const enemyGameboard = Gameboard();
    const player = Player(playerGameboard);

    // Attack the enemy Gameboard
    player.attack(enemyGameboard, 0, 0);

    // Check if the attack is made on the enemy Gameboard
    expect(enemyGameboard.getMissedAttacks()).toContainEqual({ x: 0, y: 0 });
  });
});
