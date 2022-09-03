//  WAp to find the Maximum and minumum element 
// using linear search approach
function find_min_max(arr){
    // let minValue =arr[0]; // fail gai ye approach
    // let maxValue = arr[1];
    let minValue = Number.MAX_VALUE;
     let maxValue = Number.MIN_VALUE;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<minValue){
        minValue=arr[i]
        }
        if(arr[i]>maxValue){
            maxValue =arr[i];
        }

    }
    console.log("Min " +minValue +" and Max is "+ maxValue);

}
let a1 =[2,3,15,6];
a1 =[12,34,56,5,0,32];

// calling the function

// find_min_max(a1);
find_min_max([3,2,9,8]); // test case failed