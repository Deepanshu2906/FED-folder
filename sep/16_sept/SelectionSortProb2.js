


function selectionSort(arr){
    let  n = arr.length;
    // moving the boundary of an unsorted array

    for( i = 0; i< n-1; i++){

        // finding the minimun element from the unsorted part
        minValIndx =i;

        for(j = i+1; j< n ; j++){

          

            if( arr[j].localeCompare( arr[minValIndx]) == -1){
                // here second is lower(cd) than first(ab) so -1 ,
                minValIndx = j; // min value ka index store kara rahe hai

            }
              
        }
        let temp = arr[i];
        arr[i] = arr[minValIndx];
        arr[minValIndx] = temp;
    }
    return arr;
};
console.log(selectionSort(["India","Australia","China","Russia","Brazil","Japan"]));