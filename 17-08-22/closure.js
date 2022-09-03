// closure is very important for Interview purpose

function add(){
    
    x=10;
    console.log(x);
    return function add2(){
        // copies x variable into its own scope.
        var y=20;
        console.log(x+y); // how x is accesible ?
    }
}
let result =add();
var result2 = result(); // when we call add2 here, how x is accesible here?
console.log(result2);
