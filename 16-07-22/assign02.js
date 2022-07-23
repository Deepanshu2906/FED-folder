// write a function taht compares two numbers and returns
 //   the larger of the two with appropiate condition
 
 function findLargerOfTwo(num1,num2){
    if(num1 ===num2){
        console.log("Equal");
    }else if(num1 >num2){
        console.log(num1 + " is larger than "+ num2);
    }
    else if (num1==num2){
        console.log("can't compare");

    } else {
        console.log(num2 +" is larger than "+ num1);
    }
 }
 // calling the function
  findLargerOfTwo(23,56);
  findLargerOfTwo(234,-56);
  findLargerOfTwo(234, 234);
  findLargerOfTwo("11", 11);