// Player factory function
const Player = (gameboard) => {
  return {
    attack(enemyGameboard, x, y) {
      enemyGameboard.receiveAttack(x, y);
    },
  };
};

export { Player };
