

function verify(upi, cb) {
    setInterval((upi) => {
        console.log("Verified ");
        cb();
        // cb();  at third party my mistake may be called two times
    }, 2000);
}

export default verify;