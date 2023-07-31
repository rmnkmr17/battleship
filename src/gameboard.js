function Gameboard() {
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill({ ship: null, hit: false }));

  const missedAttacks = [];

  return {
    board,
    ships: [],
    placeShip(ship, x, y, isVertical) {
      const shipCoordinates = [];
      if (
        (isVertical && y + ship.length > 10) ||
        (!isVertical && x + ship.length > 10)
      ) {
        throw new Error("Ship placement is out of bounds.");
      }
      for (let i = 0; i < ship.length; i++) {
        if (isVertical) {
          if (board[y + i][x].ship) {
            throw new Error(
              "There is already a ship at the specified position."
            );
          }
          shipCoordinates.push({ x, y: y + i });
        } else {
          if (board[y][x + i].ship) {
            throw new Error(
              "There is already a ship at the specified position."
            );
          }
          shipCoordinates.push({ x: x + i, y });
        }
      }
      shipCoordinates.forEach(({ x, y }) => {
        board[y][x] = { ship, hit: false };
      });
      this.ships.push(ship);
    },
    receiveAttack(x, y) {
      const cell = board[y][x];

      if (cell.hit) {
        // Ignore repeated attacks on the same cell
        return;
      }

      if (cell.ship) {
        // Hit a ship
        cell.ship.hit();
        cell.hit = true;
      } else {
        // Missed the ship
        cell.hit = true;
        missedAttacks.push({ x, y });
      }
    },
    getMissedAttacks() {
      return missedAttacks;
    },
    allShipsSunk() {
      return this.ships.every((ship) => ship.isSunk());
    },
  };
}

export { Gameboard };
