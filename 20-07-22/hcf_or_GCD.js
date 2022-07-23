//
let hcf_value;
function findHCF(num1,num2){
    for(let i =1; i<=num1 && i<=num2;i++){
        if(num1% i ==0 && num2 %i ==0){
            hcf_value =i;
        }
    }
}
findHCF(24,5);
console.log(hcf_value);
