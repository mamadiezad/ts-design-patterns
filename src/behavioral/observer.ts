/**
 * Observer Pattern
 * Defines a one-to-many dependency between objects so that when one
 * object changes state, all its dependents are notified.
 */

interface Observer {
  update(news: string): void;
}

interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(news: string): void;
}

export class NewsAgency implements Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(news: string): void {
    for (const observer of this.observers) {
      observer.update(news);
    }
  }

  publishNews(news: string): void {
    console.log(`NewsAgency publishing: "${news}"`);
    this.notify(news);
  }
}

export class NewsChannel implements Observer {
  constructor(private name: string) {}

  update(news: string): void {
    console.log(`[${this.name}] Breaking news: ${news}`);
  }

  getName(): string {
    return this.name;
  }
}
