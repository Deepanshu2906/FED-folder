// scope of variables

 var y =10;
 console.log(10 ===+"10");

 function localScope(){
    // x is confined to this function only
    var x = "hello";
    console.log(x);
    return x;

 }
  var result =localScope();
 console.log(result);// hello, not same merrory location
 //console.log(x);// x is not defined