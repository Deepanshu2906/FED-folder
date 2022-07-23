// Iterate from 1 to 100 based on  different condition

for (let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("MindBuzz");
    }
    else if(i%3 == 0){
        console.log("Relevel");
    } 
    else if(i%5 == 0){
        console.log("Buzz");

    }else{
        console.log(i);
    }
}