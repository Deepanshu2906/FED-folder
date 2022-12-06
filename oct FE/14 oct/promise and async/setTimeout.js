// Importing

const veryfyCardModule = require("./verifyCard");

function placeOrder() {

    // 1. verify card
    const promise = veryfyCardModule.verify(2024);

    // waiting for promise to complete
    promise.then(

        // when promise is fulfilled
        (msg) => {
            console.log(msg);
            throw new Error("Error inside then fulfulled callback");
            deductAmount();
        },

        // when promise is rejected.
        (err) => {
            // failure parameter msg
            console.log("Error handling inside then");
            console.log(err);

        }

    ).catch((err) => {
        console.log("Error handling in catch function");
        console.log(err);
    });
}

function deductAmount(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Amount deducted");
    }
}
placeOrder();