function secondSmallest(array){

    smallest1 = array[0];
    smallest2 = array[1];
for(let i=0;i<array.length;i++){

    if(smallest1 > array[i]){
        smallest1 = array[i];
    }


}
for(let i=0;i<array.length;i++){

    if( smallest1 == smallest2){
        smallest2 = array[i];
    }
}
for(let i=0;i<array.length;i++){

    if(i == array.indexOf(smallest1)){
        continue;
    }
    if(smallest2 > array[i]){
        smallest2 = array[i];
    }

}
console.log("Second Smallest number is ",smallest2);
}
// secondSmallest([10,3,5,4]);
// secondSmallest([10,3,5,4,3]);