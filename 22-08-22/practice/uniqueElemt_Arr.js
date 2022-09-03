
// find  all the unique number which are not duplicate in an array
//var arr =[3,2,1,2,3];


var arr = [3, 2, 1, 1, 2, 3, 4, 4, 5,6];
let uniqArr =[];
                    // my method
// for (i = 0; i < arr.length; i++) {
//     let count = 1;
//     for (j = 0; j < arr.length; j++) {
//         // checking for reoccuring / duplicate value
//         if (i != j) {
//             if (arr[i] == arr[j]) {
//                 // two if => make && operator
//                 count++;
//             }
//         }
//     }
//     if (count != 2) {
//         uniqArr.push(arr[i]); 
//     }
// }
// console.log(uniqArr);

                //method  2 sir 
 for (i = 0; i < arr.length; i++) {
    for(j=0; j<arr.length;j++){
        if(i!=j &&arr[i]==arr[j]){
            break;
        }
        if(j== arr.length -1){
            uniqArr.push(arr[i]);
        }
    }
 }    
 console.log(uniqArr);          