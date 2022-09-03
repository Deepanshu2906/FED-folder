// problem  2 =>  findPair sum
//  data structure obj ka use karna
//  
let arr = [10, 20, 45, 30,30,30, 5];
let sum = 60; 
let obj = {};
for (i = 0; i < arr.length; i++) {
    let firstNum = arr[i];
    let secondNum = sum - firstNum;
    if (!obj[firstNum.toString()]) {
        obj[firstNum.toString()] = 1; //  OR     i.toString();   =>   to store index => 
    }
    else {
        obj[firstNum.toString()]++; 

    }
    if (obj[secondNum.toString()] && obj[secondNum.toString()]>1) { // also => ">1" replaced by i.toString();
        console.log(`${firstNum},${secondNum}`);
    }

}
//console.log(obj);