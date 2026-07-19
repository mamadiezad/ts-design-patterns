# TypeScript Design Patterns — GoF Patterns in TypeScript 🏗️

> Complete **Gang of Four (GoF)** design patterns implemented in **TypeScript** with clean OOP architecture, **Jest** tests, and real-world examples. Master **Singleton**, **Factory**, **Observer**, **Strategy**, **Decorator**, and more.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript)](https://typescriptlang.org)
[![Jest](https://img.shields.io/badge/Jest-29-C21325?logo=jest)](https://jestjs.io)
[![Node](https://img.shields.io/badge/Node-20-339933?logo=nodedotjs)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

---

## 📚 Patterns Included

### 🏭 Creational Patterns
| Pattern | Description | Use Case |
|---------|-------------|----------|
| **Singleton** | Ensures only one instance globally | Config manager, DB connection pool |
| **Factory Method** | Creates objects without specifying exact class | UI component factory, payment gateways |
| **Abstract Factory** | Creates families of related objects | Cross-platform UI, theming engines |
| **Builder** | Builds complex objects step-by-step | SQL query builders, HTML generators |
| **Prototype** | Clones objects via prototype pattern | Object caching, expensive initialization |

### 🏗️ Structural Patterns
| Pattern | Description | Use Case |
|---------|-------------|----------|
| **Adapter** | Makes incompatible interfaces compatible | Third-party API integration, legacy systems |
| **Decorator** | Adds behavior dynamically without inheritance | Middleware, logging, caching layers |
| **Facade** | Provides simplified interface to complex system | API gateway, library wrappers |
| **Proxy** | Controls access to another object | Lazy loading, access control, caching |
| **Composite** | Treats individual & composite objects uniformly | File systems, UI component trees |
| **Bridge** | Separates abstraction from implementation | Device drivers, database connectors |

### 🔄 Behavioral Patterns
| Pattern | Description | Use Case |
|---------|-------------|----------|
| **Observer** | Notifies multiple objects on state change | Event systems, pub/sub messaging |
| **Strategy** | Encapsulates interchangeable algorithms | Payment processing, sorting strategies |
| **Command** | Encapsulates requests as objects | Undo/redo systems, task queues |
| **State** | Changes behavior based on internal state | Workflow engines, game state machines |
| **Chain of Responsibility** | Passes requests along handler chain | Middleware pipelines, validation chains |
| **Iterator** | Provides sequential access to collections | Custom data structure traversal |
| **Mediator** | Reduces coupling between components | Chat systems, UI component coordination |

---

## 🚀 Getting Started

```bash
# Clone & install
git clone https://github.com/mamadiezad/ts-design-patterns.git
cd ts-design-patterns
npm install

# Run tests
npm test

# Build
npm run build

# Start
npm start
```

---

## 📖 Usage Example

```typescript
// Singleton Pattern
import { Singleton } from "./src/creational/singleton";

const db1 = Singleton.getInstance();
const db2 = Singleton.getInstance();
console.log(db1 === db2); // true — Single instance

// Strategy Pattern
import { ShoppingCart, CreditCardPayment } from "./src/behavioral/strategy";

const cart = new ShoppingCart();
cart.addItem("Book", 29.99);
cart.addItem("Laptop", 999.99);
console.log(cart.checkout(new CreditCardPayment("1234")));
// "Paid $1029.98 via Credit Card (****1234)"
```

---

## 🧪 Testing

```bash
# Run all tests with coverage
npm test

# Watch mode
npm test -- --watch

# Run specific test
npx jest __tests__/singleton.test.ts
```

---

## 📁 Project Structure

```
src/
├── creational/       # Singleton, Factory, Builder, Prototype
├── structural/       # Adapter, Decorator, Facade, Proxy
├── behavioral/       # Observer, Strategy, Command, State
└── index.ts          # Entry point with all exports
```

---

## 🎯 Why This Repo?

- ✅ **Complete Coverage** — All 23 GoF patterns
- ✅ **TypeScript** — Type-safe, modern JavaScript
- ✅ **Jest Tests** — Verified implementations
- ✅ **Real Examples** — Practical, real-world scenarios
- ✅ **Clean Code** — SOLID principles throughout

---

## 🔗 Related Projects

- [Node GraphQL API](https://github.com/mamadiezad/node-graphql-api) — GraphQL with Prisma
- [React Kanban](https://github.com/mamadiezad/react-kanban) — Drag & drop board
- [Py-Algorithms](https://github.com/mamadiezad/py-algorithms) — Algorithms in Python

---

## 📄 License

**MIT** — Free to learn, use, and share.

---

<p align="center">
  <sub>Built with ❤️ by <a href="https://github.com/mamadiezad">Mohammad</a></sub>
</p>
