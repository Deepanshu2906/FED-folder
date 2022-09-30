// let a =[1, 2, 3];
// let b =[4, 5, 6];
// console.log(a.concat(b));

// prime num 
function findPrimeTilln(n) {
    let str ="";
    for (i = 2; i <= n; i++) {
            let isprime =true;
            for (j = 2; j*j <= i; j++) { // 2 ke liye loop run nahi ho raha  j*J se time complexity reduce ho gayi
                if (i % j == 0) {
                    isprime =false;
                    break;
                    
                }
            }
            if(isprime){
            str =str+i+" ";
            }

        }
        console.log(str);
    
}
findPrimeTilln(50);
