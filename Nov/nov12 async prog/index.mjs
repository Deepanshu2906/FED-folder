

import verify from "./upiverification.mjs";

// placing order
function placeOrder() {
    console.log("order placed...");
}

// upi verification
function validePaymentSystem() {
    verify("xyz@icici", deductMoney);
}

function deductMoney() {
    console.log("Deducting Money..");
}

placeOrder();
// verify();
validePaymentSystem();

// deductMoney();

