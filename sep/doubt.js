function func(x, y){
if (y == 0){

    return 1;
}
else if (y%2 == 0){
return func(x, y/2)*func(x, y/2);}
else{

    return x*func(x, y/2)*func(x, y/2);
}
};


console.log(func(2,3));