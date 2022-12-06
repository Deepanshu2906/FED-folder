

module.exports.verify = (year) =>{

    // making promise
    // promise has two cb() fn resolve/success & reject/failure
    const cardPromise = new Promise((success,failure)=>{
        setTimeout( ()=> {
            // exception handling in ( e.g while calling api)
            try{
                //throw new Error("Error while in promise");
                // some condition
                if( year >= 2022){
                    success("verified");
                }else{
                    failure("Failed because card is expired");
                }

            }catch(ex){ //  ex will be error using throw keyword
                console.log("error");
                console.log(ex);
                failure("Failed because of error");
            }
        }, 1000);
    });
    return cardPromise;
}