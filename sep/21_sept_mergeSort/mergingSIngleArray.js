
function mergingInSameArray( a){
    let len = a.length  ;
    
    let i=0;
    let mid  = Math.floor( i+ ( len-i-1)/2);
    while( i < len){

        if( a[mid] > a[mid+1])
        break;
        else {
            s= mid +1;
        }
        mid = Math.floor(s+ ( e-s)/2);  
        
    }
    //console.log(mid);
    let j = mid +1;
    let k=0;
    let c = [];
    while( i<= mid && j < len ){
         if( a[i] < a[j]){
            c[k++] = a[i++];
         }
         else {
            c[k++] = a[j++];

         }
    }
    while( i <=  mid){
        c[k++] = a[i++];
        
    }
    while( j < len){
        c[k++] = a[j++];
        
    }
    console.log(c);
}
let a = [2,6,9,12,3,6, 7];

mergingInSameArray(a);