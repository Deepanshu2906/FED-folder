

function verify(upi, cb) {
    setTimeout(() => {
        console.log("Verified ");
        cb();
        // cb();  at third party my mistake may be called many times
    }, 2000);
}

export default verify;