//
function chilrenPermission(temp,isRainning){
    if(temp>=20 && temp<=25 && !isRainning){
        console.log("Play in park");
    }else if(temp>=18 && temp<=20 && isRainning){
        console.log("Don't go to park");
    }else{
        console.log("Stay at home");
    }
}
chilrenPermission(23,false);
chilrenPermission(19,true);
chilrenPermission(19, false);