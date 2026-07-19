/**
 * Strategy Pattern
 * Defines a family of algorithms, encapsulates each one, and makes them interchangeable.
 */

// Strategy interface
interface PaymentStrategy {
  pay(amount: number): string;
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
  constructor(private cardNumber: string) {}

  pay(amount: number): string {
    const masked = `****${this.cardNumber.slice(-4)}`;
    return `Paid $${amount} via Credit Card (${masked})`;
  }
}

class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): string {
    return `Paid $${amount} via PayPal (${this.email})`;
  }
}

class CryptoPayment implements PaymentStrategy {
  constructor(private walletAddress: string) {}

  pay(amount: number): string {
    return `Paid $${amount} via Crypto (${this.walletAddress.slice(0, 6)}...)`;
  }
}

// Context
export class ShoppingCart {
  private items: { name: string; price: number }[] = [];

  addItem(name: string, price: number): void {
    this.items.push({ name, price });
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  checkout(paymentStrategy: PaymentStrategy): string {
    const total = this.getTotal();
    return paymentStrategy.pay(total);
  }
}

export { CreditCardPayment, PayPalPayment, CryptoPayment };
