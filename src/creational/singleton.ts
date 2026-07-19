/**
 * Singleton Pattern
 * Ensures a class has only one instance and provides a global point of access.
 */
export class Singleton {
  private static instance: Singleton;
  private data: Map<string, unknown> = new Map();

  private constructor() {
    // Private constructor prevents direct instantiation
  }

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  set(key: string, value: unknown): void {
    this.data.set(key, value);
  }

  get(key: string): unknown {
    return this.data.get(key);
  }

  clear(): void {
    this.data.clear();
  }
}
