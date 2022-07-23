// function Expression

// Function plays an important role in javascript

// function addition(x,y){
//     console.log(x+y);
// }
// addition(10,20);

let add = function (a, b) {  // 
    console.log(a + b);
}
console.log(typeof add);
add(20, 30);

function jjkj(funAdd, message) {
    funAdd(100, 200);
    console.log(message);
}

jjkj(add, "hello!");