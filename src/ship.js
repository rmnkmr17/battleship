function Ship(length) {
  // a factory function which simply returns an object
  return {
    length,
    hits: 0,
    hit() {
      this.hits += 1;
    },
    isSunk() {
      return this.hits >= this.length;
    },
  };
}

export { Ship };
