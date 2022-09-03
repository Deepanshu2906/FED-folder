// This is a pure function 
        // 1. It does'nt depend on external data
        // 2. It only depends upon the aruments passed.
        // 2. Its behavior is not changed, as no sideeffect.
        
// function pureFunction(a,b){
//     return a+b;

// }
// console.log(pureFunction(20,40));

// This is the Impure function
    // 1. It depends on external data.
    // 2. Its behaviour might be changed, as sideeffects.

const numC =20;
function impureFunction(a,b){
    return a+b+numC;

}
console.log(impureFunction(20,40));    