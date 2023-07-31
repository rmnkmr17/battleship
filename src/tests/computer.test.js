import { Gameboard } from "../gameboard";
import { Computer } from "../computer";
describe("Computer", () => {
  test("computer should attack the enemy Gameboard with a legal move", () => {
    const enemyGameboard = Gameboard();
    const computer = Computer();

    // Let the computer attack the enemy Gameboard
    computer.attack(enemyGameboard);

    // Check if the attack is a legal move (not already attacked)
    const missedAttacks = enemyGameboard.getMissedAttacks();
    expect(missedAttacks).toHaveLength(1);

    // Attack again, the missedAttacks should still have a length of 1
    computer.attack(enemyGameboard);
    expect(missedAttacks).toHaveLength(1);
  });
});
