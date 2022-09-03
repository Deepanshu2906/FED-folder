
//     	function sumAndAverage(n) {
//             let sum =0;
//             for(i=1;i<=n;i++){
//                 sum+=i;

//             }
//             console.log( sum,sum%n);
//             return;
// // write your code here

// }
// sumAndAverage(6);

function countOddNumbers(arr, n) {
    // write your logic here
    if (arr.length > 0 && arr.length <= n) {
        let count = 0;
        
        for (i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0) {
                count++;
            }
        }
        return count;
    }
}


let arr = [2, 20, 44, 66, 88, 3, 5, 3];
console.log(countOddNumbers(arr, 10));


