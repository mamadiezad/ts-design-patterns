/**
 * TypeScript Design Patterns — Entry Point
 * Gang of Four patterns with clean TypeScript implementations.
 */

// Creational
export { Singleton } from "./creational/singleton";
export { Logistics, RoadLogistics, SeaLogistics, AirLogistics } from "./creational/factory";
export { HouseBuilder } from "./creational/builder";

// Structural
export { XmlToJsonAdapter, DataConsumer } from "./structural/adapter";
export { Coffee, SimpleCoffee, MilkDecorator, SugarDecorator, WhippedCreamDecorator } from "./structural/decorator";

// Behavioral
export { NewsAgency, NewsChannel } from "./behavioral/observer";
export { ShoppingCart, CreditCardPayment, PayPalPayment, CryptoPayment } from "./behavioral/strategy";

console.log("🏗️ TypeScript Design Patterns loaded successfully!");
