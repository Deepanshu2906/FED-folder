// Quick sort technique 
/* partion technique mein all the small element are sorted left
 side of the pivot and
 greater element than pivot are goes right of the pivot
 */ 
function swap( array, start, end){
    let temp = array[start];
     array[start] = array[end];
     array[end] = temp;
}
function quickSort(array, low, high){

    // making copy 
    let start = low;
    let end = high;

    // base condition
    if(start>= end){
        return;
    }
     let mid = Math.floor(( start + end)/2);
     // fixing the pivot for each subarray ; i.e is middle
     const pivot = array[mid];

     while( start < end){

          while(array[start] < pivot){
            start++;
          }
          while( array[end] > pivot){
             end--;
          }
          if( start<= end){
            swap(array, start, end);
            start++;
            end--;
          }
     }

     // recursion  and partition 

     // as start and end keep changing ( at one point s=e)
     // left array
     quickSort(array, low, end );
     // right  array
     quickSort(array, start, high );
}


let array = [15, 13,2,  17, 9, 12, 0, 4];
quickSort(array, 0, array.length-1);
console.log( array);