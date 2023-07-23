import { Ship } from "../ship";

describe("Ship", () => {
  test("hit() should increase the number of hits", () => {
    const ship = Ship(3); // Create a ship of length 3
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test("isSunk() should correctly calculate if the ship is sunk", () => {
    const ship = Ship(3); // Create a ship of length 3
    expect(ship.isSunk()).toBe(false); // Ship is not sunk yet
    ship.hit();
    expect(ship.isSunk()).toBe(false); // Ship is not sunk yet
    ship.hit();
    expect(ship.isSunk()).toBe(false); // Ship is not sunk yet
    ship.hit();
    expect(ship.isSunk()).toBe(true); // Ship is now sunk
  });
});
