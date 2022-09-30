// given arr =[1,2,5,10,3,4];

// convert  1st  maximum to  n-1
// second maximum to n-2;
//... 0 = n
let arr =[1,2 ,5, 10, 4];
console.log(arr);

let  b = [...arr.sort((a,b)=> a-b)];
console.log(b);

for( let i=b.length-1;i >=0 ; i++){
    let index = arr.indexOf(b[i]);
    arr[index] = i;
}
//console.log(arr);
