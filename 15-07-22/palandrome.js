// print all the palandrome numbers under 50


// function checkPalandrome(num) {
    
//     let rev = 0, x = 0, original = num;
//     while (num> 0) {
//         x = num % 10;
//         rev = (rev * 10) + x;
//         num = parseInt(num / 10);
//         //console.log(num);
//     }
//     //console.log(rev);
//     //console.log(original);
//     if (rev == original) {
//         console.log(original);
//     } 
// }
// for(let i=1;i<50;i++){
//     checkPalandrome(i);
// }
function checkPalindrome(n){
    var len = n.length;
   
    for (var i=0;i<len/2;i++){
        if(n[i]!==n[len-1-i]){
            return n+" is not palandrome";
        }
    } 
    return n+" is Palandrome" ;
}

const result=checkPalindrome(2444442);
console.log(result);