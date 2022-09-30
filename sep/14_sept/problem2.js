// Bubble sort  
//  sort the  array into lexically order
// in place alro means do not taking extra space
function bubbleSort(arr){
    let length = arr.length;

    for(let i=0; i <  length-1 ; i++){
        let isSwapped = false;

        for(let j=0; j< length-1-i; j++){

            let result = arr[j].localeCompare(arr[j+1]);
            if(result == 1){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }  
        }
        
    }  
    return arr;
    }
console.log(bubbleSort(["India","Australia","China","Russia","Brazil","Japan"]));