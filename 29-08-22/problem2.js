// you hv to return the total number of steps to make a num(n) to 1. perform these tasks
// 1. n= n-1
// 2. if(n%2==0) , n=n/2
// 3. if(n%3==3), n=n/3
    // 10 -1 => 9, 9%3 => 3,  step 1
    // 3-1=> 2, 2%2 => 1 ,  step 2

function makeItOne( num, steps){

    if(num ==1){
        console.log(steps);
        return;
    }
    num = num-1;
    if(num%2==0){
        num = num/2;
    }
    if(num%3==0){
        num = num/3;
    }
    makeItOne(num, ++steps);
}
//makeItOne(10, 0);
//makeItOne(50, 0);
makeItOne(20, 0);