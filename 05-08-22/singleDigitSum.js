//

function findDigitsSum(num){
    let sum =0;
    let numStr = num.toString();
    for(let i =0; i< numStr.length;i++){
         sum +=  Number(numStr[i]);
        // or  sum +=  parseInt(numStr[i]);
         
    }
    // or (sum>9) also can be used, greater than one digit like 10,11
    if(  numStr.length ==1){
        console.log(sum);
        return;
    }
        findDigitsSum(sum); // note sum is now numStr
    
}
findDigitsSum(12345);  // 15 => 6
findDigitsSum(9012316); // 22 => 4
findDigitsSum(999999999999);//108 => 9
findDigitsSum(5); // 5
