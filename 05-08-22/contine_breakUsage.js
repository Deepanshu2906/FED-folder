//
for (i=0; i<=9;i++) {
    if(i==5){
        break;
    }
    
    console.log(i);
}
console.log("Next loop   with continue");
for (i=0; i<=9;i++) {
    if(i==5){
        continue;
        console.log("after continue",i);
         // not works here after
    }
    
    console.log(i);
}