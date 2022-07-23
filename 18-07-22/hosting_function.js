// hosring => calling a function a function before it is created.


add(10,20);    // only possible in  case 1
// case 1 :

// function add(a,b){
//     console.log(a+b);
// }

// case 2:
// function expression => a function without name
 let add = function(a,b){
    console.log(a+b);
 }