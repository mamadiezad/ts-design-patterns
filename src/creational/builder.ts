/**
 * Builder Pattern
 * Separates construction of a complex object from its representation,
 * allowing the same construction process to create different representations.
 */

class House {
  walls = 0;
  doors = 0;
  windows = 0;
  roof = "";
  hasGarage = false;
  hasSwimmingPool = false;
  hasGarden = false;

  describe(): string {
    return [
      `House with ${this.walls} walls, ${this.doors} doors, ${this.windows} windows,`,
      `roof: ${this.roof},`,
      `garage: ${this.hasGarage}, pool: ${this.hasSwimmingPool}, garden: ${this.hasGarden}`,
    ].join(" ");
  }
}

export class HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  setWalls(count: number): this {
    this.house.walls = count;
    return this;
  }

  setDoors(count: number): this {
    this.house.doors = count;
    return this;
  }

  setWindows(count: number): this {
    this.house.windows = count;
    return this;
  }

  setRoof(type: string): this {
    this.house.roof = type;
    return this;
  }

  addGarage(): this {
    this.house.hasGarage = true;
    return this;
  }

  addSwimmingPool(): this {
    this.house.hasSwimmingPool = true;
    return this;
  }

  addGarden(): this {
    this.house.hasGarden = true;
    return this;
  }

  build(): House {
    const result = this.house;
    this.house = new House(); // Reset for next build
    return result;
  }
}
