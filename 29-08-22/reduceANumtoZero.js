// given n=23
// choose a digit from that number and subtracting  max num to get min steps till num => 0.
// 27-7 => 20
// 20 -2 => 18
// 18 -8=> 10
// 10- 1 => 9
// 9=9 = 0  =>  steps =5

function reducedNumToZero(num , steps){
    // base condition
    if(num==0){
        console.log(steps);
        return;
    }
    
    // choose largest digit from n
    // 43 => "43" => ['4' , '3' ]
    let array = num.toString().split('').map(i=> Number(i));
    let max = Math.max(...array); // it needs set of numbers

    reducedNumToZero(num - max, ++steps);
}
reducedNumToZero(27,0);
reducedNumToZero(43,0);
