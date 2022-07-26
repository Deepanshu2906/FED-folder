
module.exports.verify = (upi, cb) => {
    setTimeout(() => {
        try {

            // throw new Error("Error while verification");
            console.log("verified");
            cb();
            cb();
        }
        catch (ex) {
            cb(ex);
        }
    }, 1000);
}

module.exports.verifyPromise = () => {
    // 1. Create a promise which will encapsulate async code.
    const promise = new Promise((resolve, reject) => {
        //encapsulate async code.
        setTimeout(() => {
            try {
                throw new Error("Error in promise");
                console.log("Verify upi");
                resolve("Verified");
            } catch (ex) {
                reject("Couldn't verify");
                console.log(ex);
            }
        }, 1000);
    });
    return promise;
}
