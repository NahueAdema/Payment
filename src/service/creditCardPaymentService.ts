import { PaymentService, InsufficientFundsException } from "./paymentService";

export class CreditCardPayment extends PaymentService {
  private avaibleCredit: number;
  constructor(amount: number, avaibleCredit: number) {
    super(amount);
    this.avaibleCredit = avaibleCredit;
  }

  processPayment(): string {
    if (this.amount > this.avaibleCredit) {
      throw new InsufficientFundsException(
        "Credito insuficiente para hacer este pago"
      );
    }
    this.avaibleCredit -= this.amount;
    return `Pago realizado con éxito. Crédito disponible: ${this.avaibleCredit}`;
  }
}
