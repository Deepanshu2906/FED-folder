

function swap( array, start, end){
    let temp = array[start];
     array[start] = array[end];
     array[end] = temp;
}
function partition(array, low, high,k){
    
    let start = low;
    let end = high;
    let mid = Math.floor( (start+end)/2);

     const pivot = array[mid];
     if( mid == k-1){
        console.log("kth element is :"+array[mid]);
        return;
     }
      if( start>=end){
        return;
      }

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
    if( mid > k-1){

        partition(array, low, end ,k);
    }else {

        partition(array, start, high,k );
    }
    
}
function quickSelect(array, k){
    partition(array, 0, array.length-1,k);
     
}

const array = [15, 13, 2,  17, 9, 12, 0, 4];
//const array = [4, 3, 7, 11, 20, 19, 13];
let k =3;
quickSelect(array, k);