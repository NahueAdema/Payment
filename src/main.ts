import { processPayment } from "./controller/paymentController";
import { CreditCardPayment } from "./service/creditCardPaymentService";

function main() {
  const creditCardPaymentService = new CreditCardPayment(150, 160);
  const creditCardPaymentNoFoundService = new CreditCardPayment(200, 100);

  console.log(
    "Pago con tarjeta de crédito:",
    processPayment(creditCardPaymentService)
  );
  console.log(
    "Pago con tarjeta de crédito (sin fondos):",
    processPayment(creditCardPaymentNoFoundService)
  );
}

main();
