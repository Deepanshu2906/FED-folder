// It's basic algoritmh like bubble
// Basic idea is to find the minimum  element
// less memory writes  as compare to quick sort,
// Standard selection is unstable
/* unstable means it two elements occurs then after sorting 
     there relative position would not be changed.
*/ 


function selectionSort(arr){
    let  n = arr.length;
    // moving the boundary of an unsorted array

    for( i = 0; i< n-1; i++){

        // finding the minimun element from the unsorted part
        minValIndx =i;

        for(j = i+1 ; j< n ; j++){

            if(arr[j] < arr[minValIndx]){

                minValIndx =j; // min value ka index store kara rahe hai
            }
        }
        if( minValIndx !=i){
            // min value 0 index pa  hi ho tab
            let temp = arr[i];
            arr[i] = arr[minValIndx];
            arr[minValIndx] = temp;

        }
    }
    return arr;
}
console.log(selectionSort([10, 5,8,20,2,18]));