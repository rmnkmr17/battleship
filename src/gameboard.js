function Gameboard() {
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill({ ship: null, hit: false }));

  return {
    board,
    ships: [],
    placeShip(ship, x, y, isVertical) {
      // Implement placing ships on the board
    },
    receiveAttack(x, y) {
      // Implement receiving attacks and handling hits/misses
    },
    allShipsSunk() {
      // Implement checking if all ships have been sunk
    },
  };
}

export { Gameboard };
