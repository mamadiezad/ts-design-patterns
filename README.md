# TypeScript Design Patterns 🏗️

A comprehensive collection of **Gang of Four** design patterns implemented in **TypeScript** with clean architecture, tests, and real-world examples.

## 📚 Patterns

### Creational Patterns
| Pattern | Description | Use Case |
|---------|-------------|----------|
| **Singleton** | Ensures only one instance of a class | Database connection, configuration manager |
| **Factory Method** | Creates objects without specifying exact class | UI component factory |
| **Abstract Factory** | Creates families of related objects | Cross-platform UI toolkit |
| **Builder** | Constructs complex objects step by step | SQL query builder, HTML builder |
| **Prototype** | Clones objects via prototype | Object caching, expensive initialization |

### Structural Patterns
| Pattern | Description | Use Case |
|---------|-------------|----------|
| **Adapter** | Allows incompatible interfaces to work together | Third-party API integration |
| **Decorator** | Adds behavior to objects dynamically | Middleware pipeline, logging |
| **Facade** | Provides simplified interface to complex subsystem | API gateway, library wrapper |
| **Proxy** | Controls access to another object | Lazy loading, caching, access control |
| **Composite** | Composes objects into tree structures | File system, UI hierarchy |

### Behavioral Patterns
| Pattern | Description | Use Case |
|---------|-------------|----------|
| **Observer** | Notifies multiple objects about state changes | Event handling, pub/sub systems |
| **Strategy** | Encapsulates interchangeable algorithms | Payment processing, sorting |
| **Command** | Encapsulates requests as objects | Undo/redo, task queue |
| **State** | Changes behavior based on internal state | Workflow engine, game states |
| **Chain of Responsibility** | Passes requests along a chain of handlers | Middleware, validation pipeline |

## 🚀 Usage

```typescript
// Example: Singleton pattern
import { Singleton } from './src/creational/singleton';

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true

// Example: Observer pattern
import { NewsAgency, NewsChannel } from './src/behavioral/observer';

const agency = new NewsAgency();
const channel = new NewsChannel("BBC");
agency.subscribe(channel);
agency.publishNews("Breaking: TypeScript 5.0 released!");
```

## 🧪 Testing

```bash
npm test
```

## 🛠️ Setup

```bash
npm install
npm run build
npm run start
```

## 📄 License

MIT
