
// Wap to find the second smallest number in an given array.
//method -1
function secondSmallestNum(arr){
    let firstSmallest = Number.MAX_VALUE;
    let secondSmallest =Number.MAX_VALUE;

    for(let i =0 ;i< arr.length ; i++){
        if(arr[i]<firstSmallest){
            firstSmallest =arr[i];
        }
    }

    for(let j=0; j <arr.length;j++){
        if(arr[j]<secondSmallest &&arr[j]>firstSmallest){
            secondSmallest =arr[j];
        }
    }
    console.log(secondSmallest);
}
 secondSmallestNum([10,3,2,2,25,3,30]);
 secondSmallestNum([1,2,3,4,5]);
secondSmallestNum([5,4,3,2,1]);

// Method => 2  saving one loop
// function secondSmallestNum(arr){
//     let firstSmallest = Number.MAX_VALUE;
//     let secondSmallest =Number.MAX_VALUE;

//     for(let i =0 ;i< arr.length ; i++){
//         if(arr[i]<firstSmallest){
//             firstSmallest =arr[i];
//         }

//         if(arr[i+1]<secondSmallest  && arr[i+1]>firstSmallest){
//             secondSmallest =arr[i+1];
//         }
//     }
//     console.log(secondSmallest);
// }
// secondSmallestNum([10,3,2,2,25,3,30,2,1]);
// secondSmallestNum([1,2,3,4,5]);
// secondSmallestNum([5,4,3,2,1]);

// way -3
// let min = 100;
// let secondMin = 100;
// function findsecondMin(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             secondMin = min;
//             min = arr[i];

//         } else if (arr[i] < secondMin) {
//             secondMin = arr[i];

//         }
//     }
//     console.log(secondMin);
// }
// //findsecondMin([10, 3, 25, 30]);
// findsecondMin([10, 3, 2, 2, 25, 3, 30,4]); // fails here