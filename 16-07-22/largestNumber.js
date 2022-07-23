// problem 3 => Largest number finder


let a,b,c;
function largestNumber(a,b,c){
    // if(a>b){
    //     if(b>c){
    //         console.log(a +"is the greatest number");
    //     }else if(a>c){
    //         console.log(a + " is the grestest");
    //     }
    //     else{
    //         console.log(c+ " is the greatest");
    //     }
    // }else {
    //     if(b>c){
    //         console.log(b +" is the greatest");
    //     }
    //     else{
    //         console.log(c +" is the grestest");
    //     }
    // }
    if(a>b && a>c){
        console.log(a + " is the largest number");
    }
    else if(b>a && b>c){
        console.log(b+ " is the largest number");
    }
    else {
        console.log(c + " is the largest number");
    }
}
largestNumber(12,34,56);
largestNumber(12,34,3);
largestNumber(125,34,56);