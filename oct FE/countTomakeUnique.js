
function findMinIncForUniqueArray( array){
    
    let incCounter =0;
    let obj ={};
    for( let i=0; i< array.length ;i++){
        if( !obj[array[i]]){
            obj[array[i]] = 1;
        }else {
            obj[array[i]]++;
        }
    }
    let max = Math.max(...array) + array.length;
    let buffer = [];
    for( let i=0; i< max; i++){
        if(obj.hasOwnProperty(i) && obj[i]>1){
            buffer.push(i);
        }
        else if( buffer.length > 0 && !obj.hasOwnProperty(i)){
            if( obj[buffer[0]] ==2){
                incCounter += i- buffer.shift();
            }else {
            incCounter += i-buffer[0];
            obj[buffer[0]]--;
            }
        }
    }
    console.log(incCounter);
}
//let array = [1,4,5,2,3,1,3,6];
let array = [1,5,5,5,2,2,2,2];
findMinIncForUniqueArray(array);
