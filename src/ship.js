function Ship(length) {
  return {
    length,
    hits: 0,
    get sunk() {
      return this.isSunk();
    },
    hit() {
      this.hits += 1;
    },
    isSunk() {
      return this.hits >= this.length;
    },
  };
}

export { Ship };
