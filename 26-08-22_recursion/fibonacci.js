//0,1,1,3,5..

function findFibonacci(n) {

    if (n == 0 || n == 1) {
        return n;
    }
    // this give the num at the particular position
    return findFibonacci(n-1) +findFibonacci(n-2);

}
//console.log(findFibonacci(5));
console.log(findFibonacci(1));