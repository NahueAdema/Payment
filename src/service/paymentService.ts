export abstract class PaymentService {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  abstract processPayment(): string;
}

export class InsufficientFundsException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InsufficientFundsException";
  }
}
