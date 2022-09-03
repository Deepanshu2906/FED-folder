
// nested ternary condition
function checkALargest(a,b,c){


    return a>b ? a>c ? "Largest" :"Not largest" :"Not the largest";
}

console.log(checkALargest(1,2,3));
console.log(checkALargest(3,2,1));
console.log(checkALargest(2,1,3));