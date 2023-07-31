// Computer factory function
const Computer = () => {
  const attackedCoordinates = [];

  function getRandomCoordinate() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return { x, y };
  }

  return {
    attack(enemyGameboard) {
      let coordinate;
      do {
        coordinate = getRandomCoordinate();
      } while (
        attackedCoordinates.some(
          (coord) => coord.x === coordinate.x && coord.y === coordinate.y
        )
      );

      attackedCoordinates.push(coordinate);
      enemyGameboard.receiveAttack(coordinate.x, coordinate.y);
    },
  };
};

export { Computer };
