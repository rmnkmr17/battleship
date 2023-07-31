import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

describe("Gameboard", () => {
  test("placeShip() should place a ship on the board", () => {
    const gameboard = Gameboard();
    const ship = Ship(3);
    gameboard.placeShip(ship, 0, 0, true);
    // Check if the ship has been placed correctly on the board
    for (let i = 0; i < ship.length; i++) {
      expect(gameboard.board[0 + i][0].ship).toBe(ship);
    }
    // Check if the ship has been added to the 'ships' array in the gameboard
    expect(gameboard.ships).toContain(ship);
  });

  test("receiveAttack() should record a missed shot", () => {
    // Test case 1: Attack a cell with no ship

    const gameboard = Gameboard();
    const x = 2;
    const y = 3;

    gameboard.receiveAttack(x, y);

    // Check if the cell is recorded as missed
    expect(gameboard.board[y][x].hit).toBe(true);
    expect(gameboard.board[y][x].ship).toBe(null);
  });
  // Test case 2: Attack a cell with a ship
  test("receiveAttack() should hit the ship and call its hit() method", () => {
    const gameboard = Gameboard();
    const ship = Ship(3); // Create a ship of length 3
    gameboard.placeShip(ship, 0, 0, true); // Place the ship vertically at (0, 0)

    const x = 0;
    const y = 1;

    gameboard.receiveAttack(x, y);

    // Check if the cell is recorded as hit
    expect(gameboard.board[y][x].hit).toBe(true);
    console.log(gameboard.board[y][x]);
    // Check if the hit() method of the ship is called
    expect(ship.hits).toBeGreaterThan(0);
  });
  // Test case 3: Attack the same cell twice
  test("receiveAttack() should ignore repeated attacks on the same cell", () => {
    const gameboard = Gameboard();
    const ship = Ship(3); // Create a ship of length 3
    const x = 4;
    const y = 5;
    gameboard.placeShip(ship, x, y, true); // Place the ship vertically at (0, 0)

    gameboard.receiveAttack(x, y);
    gameboard.receiveAttack(x, y);

    // Check if the cell is recorded as hit only once
    expect(gameboard.board[y][x].hit).toBe(true);
    // Check if the ship's hit() method is called only once
    expect(ship.hits).toBe(1);
  });

  test("getMissedAttacks() should return the correct missed attack coordinates", () => {
    const gameboard = Gameboard();
    const x1 = 2;
    const y1 = 3;
    const x2 = 5;
    const y2 = 7;

    gameboard.receiveAttack(x1, y1);
    gameboard.receiveAttack(x2, y2);

    const missedAttacks = gameboard.getMissedAttacks();

    expect(missedAttacks).toHaveLength(2);
    expect(missedAttacks).toContainEqual({ x: x1, y: y1 });
    expect(missedAttacks).toContainEqual({ x: x2, y: y2 });
  });

  test("allShipsSunk() should return true when all ships have been sunk", () => {
    const gameboard = Gameboard();
    const ship1 = Ship(2); // Create a ship of length 2
    const ship2 = Ship(3); // Create a ship of length 3

    gameboard.placeShip(ship1, 0, 0, true); // Place ship1 at (0, 0)
    gameboard.placeShip(ship2, 5, 5, false); // Place ship2 at (5, 5)

    // Attack all cells of ship1 and ship2 to sink them
    for (let i = 0; i < ship1.length; i++) {
      gameboard.receiveAttack(0, i);
    }

    for (let i = 0; i < ship2.length; i++) {
      gameboard.receiveAttack(i + 5, 5);
    }

    // Both ships should be sunk, so allShipsSunk() should return true
    expect(gameboard.allShipsSunk()).toBe(true);
  });

  // Add more test cases as needed for edge cases and additional scenarios
});
