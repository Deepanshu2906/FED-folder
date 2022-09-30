
function merging( a,b){
    let n = a.length ;
    let m = b.length ;
    let c = [];
    let i=j = k =0;
    while( i< n && j < m ){
         if( a[i] < b[j]){
            c[k++] = a[i++];
         }
         else {
            c[k++] = b[j++];

         }
    }
    while( i < n){
        c[k++] = a[i++];
        
    }
    while( j < m){
        c[k++] = b[j++];
        
    }
    console.log(c);
}
let a = [2,6,9,15,21,23];
let b = [4,8,12,25];
merging(a,b);