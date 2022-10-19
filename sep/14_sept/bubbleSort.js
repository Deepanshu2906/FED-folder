
// find the 3rd largest element;
// bubble sort throw max element to the end of array. for ech passes.

function bubbleSort(arr, k){
    let length = arr.length;
    let isSwapping = false; //  to reduce passes if no swaping .

    for(let i=0; i <  k ; i++){

        for(let j=0; j< length-1-i; j++){

            if(   arr[j] > arr[j+1]   ){
                //swap(arr[j] , arr[j+1]); //  not a func in JS
                let temp = arr[j];
                arr[j]   = arr[j+1];
                arr[j+1] = temp;
                isSwapping = true;
            }
        }
        if(! isSwapping){
            break;
        }
    }
    var element = "";
    for(let i=0; i< length;i++){
        element = element + arr[i].toString()+ " ";

    }
    console.log("sorting till 3 paseses :",element);
    
    console.log("the 3rd largest mum is :",arr[length-k]);
}
bubbleSort([5,4,3,2,1,6,2], 3);