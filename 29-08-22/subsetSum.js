
// print all the subset of pair  to the  given target sum.
let combArr = [];
function printSum(array, sum, start) {
    // base condition
    if (start > array.length - 1) {
        console.log(...combArr);
        return;
    }
    if (array[start] == sum) {
        combArr.push([array[start]]);
    }

    let sum1 = [];
    if (array[start] < sum) {
        sum1.push(array[start]);
    }
    for (let i = start + 1; i < array.length; i++) {
        let p = sum1.reduce((a, c) => a + c, 0);
        //console.log(p);
        if (p + array[i] <= sum) {
            sum1.push(array[i]);
            //console.log(sum1);
        }
    }
    if (sum1.reduce((a, c) => a + c, 0) == sum) {
        combArr.push(sum1);
    }
    for (let j = start + 1; j < array.length; j++) {
        sum1 =[];
        if ((array[start] + array[j]) == sum) {

            sum1.push(array[start], array[j]);
            
            let isDuplicate = combArr.some( a => a.every((v, ind) => v == sum1[ind]));
        
            if(!isDuplicate){
                combArr.push(sum1);
            }
        }
    }
    printSum(array, sum, ++start);
}
printSum([3, 4, 1, 2, 1], 5, 0);
//printSum([1, 2, 1], 2, 0);

// let y=[[4,1],[1,2,3]];
// let x= [1,2,3];
// console.log( y.some( a => a.every((v,i) => v== x[i])));