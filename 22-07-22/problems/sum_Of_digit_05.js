// to find the sum of innner digits 
// 5125 => 1+2 =3

function findSumOfDigit(num){
    let sum =0;

    // using toString method to convert number to string
    let str = num.toString();
    let len =str.length;
    
    //excluding first and loast index in loop
    for(let i=1; i< str.length-1;i++){
        
        sum += Number(str[i]);
    }
    if(sum >0){
         console.log(sum);
    }else {
        console.log("-1");
    }
    
}
//findSumOfDigit(2134);
findSumOfDigit(90);
findSumOfDigit(1);