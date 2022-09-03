// let a =[1, 2, 3];
// let b =[4, 5, 6];
// console.log(a.concat(b));

// prime num 
function findPrimeTilln(n) {
    for (i = 2; i <= n; i++) {
            let isprime =true;
            for (j = 2; j < i; j++) { // 2 ke liye loop run nahi ho raha
                if (i % j == 0) {
                    isprime =false;
                    break;
                    
                }

            }
            if(isprime){
                console.log(i);

            }

        }
    
}
findPrimeTilln(23);
