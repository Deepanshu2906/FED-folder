// take input a num let 15
// find a, b such prime number as a+b =num
// 2+13 =15
function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i ==0){
            return false
        }
        
    }
    return true;
}
// a=10, x=2,y=8
function find2PrimeNum(a){
    for(let i=2; (i<a-2 ||a<5); i++) {// will skill last three
      if(isPrime(i) && isPrime(a-i)){
        console.log(i,a-i);
        return;

    }
  }
  console.log("No primes")
}
find2PrimeNum(10);
find2PrimeNum(15);
find2PrimeNum(4);
find2PrimeNum(11);