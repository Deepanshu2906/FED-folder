function insertionSort( arr,n){

     for( let  i=1 ; i< n ;i++){

        let temp = arr[i];
        let j = i-1;
        while ( j>=0 && arr[j]> temp){
             arr[j+1] = arr[j];
             // DOn't foregt  base condition;
             j--;
        }
        arr[j+1] = temp;

     }  
        
}
     let arr = [ 4, 2,5,6,1];
     let n = arr.length;
     console.log(n);
     insertionSort( arr, n);
     console.log( arr);