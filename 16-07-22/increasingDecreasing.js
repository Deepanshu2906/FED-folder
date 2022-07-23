// problem 2  => checking Decreasing and decreasing order



function checkOrder(a,b,c){
    if(a>b && b>c){
        console.log("Decreasing Order");
    }
    else if(a<b && b<c){
        console.log("Increasing order");

    }else{
        console.log("Neither Increasing nor decreasing");
    }
}
checkOrder(2,5,16);
checkOrder(12,5,16);
checkOrder(12,5,-2);
