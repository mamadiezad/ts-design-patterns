/**
 * Factory Method Pattern
 * Defines an interface for creating objects, but lets subclasses decide which class.
 */

// Product interface
interface Transport {
  deliver(): string;
}

// Concrete Products
class Truck implements Transport {
  deliver(): string {
    return "Delivering by land (truck)";
  }
}

class Ship implements Transport {
  deliver(): string {
    return "Delivering by sea (ship)";
  }
}

class Drone implements Transport {
  deliver(): string {
    return "Delivering by air (drone)";
  }
}

// Creator
export abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery(): string {
    const transport = this.createTransport();
    return `Planning: ${transport.deliver()}`;
  }
}

// Concrete Creators
export class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

export class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

export class AirLogistics extends Logistics {
  createTransport(): Transport {
    return new Drone();
  }
}
