//Wap to sum numbers from 1 to n.

// n =5  => 1+2+3+4+5 =15


function findSum(n){
    let sum =0;
    for(let i=1; i<=n;i++){
        sum+=i;

    }
    console.log("Sum upto "+n+ " is "+sum);
}


findSum(10);