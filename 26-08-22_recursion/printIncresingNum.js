// n=>5,  1,2,3,4,5

function printIncreasing(n){
    // base conditon
    if(n==0) {
        return 1;
    }
    printIncreasing(n-1);

    // until function complte doest not move forward
    console.log(n);

}
printIncreasing(5);