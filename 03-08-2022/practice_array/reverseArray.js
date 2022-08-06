// reverse the array using swap method
// simple loop creating new array

// function revTheArray(arr){
//     let result =[];
//     let j=0;
//     for(i=arr.length-1; i>=0;i--){
//         result[j] = arr[i];
//         j++;
//     }
//     console.log(result);
// }

// method  2 => swapping
function revTheArray(arr){
    let start =0;
    let end =arr.length-1;
    while(start<=end){
        let flag =arr[start];
        arr[start] = arr[end];
        arr[end] =flag;
        start++;
        end--;
    }
    console.log(arr);

}


revTheArray([ 1, 213 , 56,33, 22 ]);

