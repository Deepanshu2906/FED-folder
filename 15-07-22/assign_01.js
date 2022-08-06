// Given a positive integer A, 
// find a pair of integer a, b 
// such that
// a and b are positive
// A <= B
// a^2 + b^2 = Ab 
// 0<=A<=100000   

function findMax(num){
    let i=0;
    for(;i*i<=num;i++){

    }
    return (i-1);
}

function find(num){

    let max=findMax(num);

    for(let i=0;i<=max;i++){
        for(let y=0;y<=max;y++){

            if(i*i+(y*y) == num && i>=y)
            {
                console.log("Number pair is \t"+(i)+" and "+(y));    
            }
        }
    }
}

// calling function
find(50);
