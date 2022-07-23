// factorial

function findFactorial(num) {
    let result = 1;
    if (num == 0) {
        result = 1;
    }
    else {
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
    }
    console.log(result);
}
// calling the function
findFactorial(0);
findFactorial(6);
