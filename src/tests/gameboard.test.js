import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

describe("Gameboard", () => {
  test("placeShip() should place a ship on the board", () => {
    const gameboard = Gameboard();
    const ship = Ship(3); // Create a ship of length 3

    gameboard.placeShip(ship, 0, 0, true); // Place the ship vertically at (0, 0)

    // You should write assertions to check if the ship has been placed correctly on the board
    // For example, you can check if the board state reflects the ship's position
    // and if the ship is correctly added to the 'ships' array in the gameboard object.
  });

  test("receiveAttack() should handle hits and misses", () => {
    const gameboard = Gameboard();
    const ship = Ship(3); // Create a ship of length 3

    gameboard.placeShip(ship, 0, 0, true); // Place the ship vertically at (0, 0)

    gameboard.receiveAttack(0, 0); // Attack the ship at (0, 0)
    expect(ship.hits).toBe(1);

    gameboard.receiveAttack(1, 0); // Attack the ship at (1, 0) - miss
    expect(ship.hits).toBe(1); // The ship should not be hit again

    // You should write more assertions to check how the gameboard handles hits and misses.
    // For example, you can check if the 'hit' function is called on the ship when hit,
    // and if the missed coordinates are properly recorded in the gameboard object.
  });

  test("allShipsSunk() should report whether all ships have been sunk", () => {
    const gameboard = Gameboard();
    const ship1 = Ship(3); // Create a ship of length 3
    const ship2 = Ship(2); // Create a ship of length 2

    gameboard.placeShip(ship1, 0, 0, true); // Place ship1 vertically at (0, 0)
    gameboard.placeShip(ship2, 2, 2, false); // Place ship2 horizontally at (2, 2)

    // Attack all the ship cells to sink both ships
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);
    gameboard.receiveAttack(2, 2);
    gameboard.receiveAttack(3, 2);

    expect(gameboard.allShipsSunk()).toBe(true);

    // You should write more test cases to check the behavior of allShipsSunk() in different scenarios.
  });

  // Add more test cases as needed for edge cases and additional scenarios
});
