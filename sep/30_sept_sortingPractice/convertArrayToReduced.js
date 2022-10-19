// given arr =[1,2,5,10,3,4];

// convert  1st  maximum to  n-1
// second maximum to n-2;
//... 0 = n

function findReducedArray(arr){

    const  copy= [...arr];
    for( let i=0; i < arr.length;i++){ 
        let max = Math.max(...copy);
        let index = arr.indexOf(max); 
        arr[index] = copy.length-1;
     }
}
let arr =[4, 10, 9, 3, 5,10];

 for( let i= arr.length-1; i >=0 ; i--){
    let index = arr.indexOf(copy[i]);
    console.log(index);
    arr[index] = i;
    console.log(arr);
}
console.log(arr);
