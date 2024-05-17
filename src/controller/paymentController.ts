import { PaymentService } from "../service/paymentService";

export function processPayment(payment: PaymentService): string {
  try {
    return payment.processPayment();
  } catch (error) {
    if (error instanceof Error) {
      return `Error: ${error.message}`;
    } else {
      return `Error desconocido :(`;
    }
  }
}
