

function bubbleSort(arr,k){
    for( let i=0; i< k; i++){
        for( let j=0; j< arr.length; j++){
            if(arr[j+1]< arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}
const arr = [5,4,3,2,1,6,2];
bubbleSort(arr, 3);