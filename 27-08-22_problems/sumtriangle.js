// let a =[1,2,3,4,5]
//

function sumTriangle(arr){
    if(arr.length ==1){
        console.log(arr);
        return ;
    }

    let reducedArray =[];
    for(i=0; i< arr.length-1;i++){
        reducedArray.push(arr[i]+arr[i+1]);
    }
    sumTriangle(reducedArray);
    console.log(arr);

}
let arr =[1,2,3,4,5];
sumTriangle(arr);