// Importing

const verifyCardModule = require("./verifyCard");

// asynchonous waiting for function to finish
async function placeOrder(){
     
    try{
        // await fn can be used
        const result = await verifyCardModule.verify(2021);
        console.log(result);
        // handling error even if 
        //throw new Error("Error after promise is resolved");

    }catch(err){
        console.log(err);
        return;
    }
     deductAmount();
    
    
}

function deductAmount(err){
    if(err){
        console.log(err);
    }else {
        console.log("Amount deducted");
    }
}
placeOrder();