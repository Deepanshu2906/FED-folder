// find power of a digit (A,B) => A^B

function Power(num,pow){
    if(pow==0){
        console.log(1);
        return;
    }else {
        let result=1;
        for(let i=1;i<=pow;i++){
            result= result*num;
        }
        return result;
    }
}
console.log(Power(10,2));
console.log(Power(2,3));
console.log(Power(2,4));