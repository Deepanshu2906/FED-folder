//

function find2ndSmallestNum(array){
    var a =0;
    
    for(let i=0 ; i<array.length; i++){
        if(array[i] >array[i+1]){
            a =array[i];
            array[i] = array[i+1];
            array[i+1] = a;
        }
    }
    console.log(array[1]);
}
find2ndSmallestNum([11,34,54,22,13,78]);