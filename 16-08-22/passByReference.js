//
// function passByRef(array,value){
//     array.push(value);
// }

// const arr =[2,3,4];
// passByRef(arr, 5);

// console.log(arr);

// console.log(typeof (arr));
// oject => objects in JS are of ref type.
// num strings, bools are of value type

// interview question
const obj = {name:"X", age: 20};
let obj2 = {};  
obj2 = Object.assign(obj2, obj); // address pass nahi hoga yaha

//Obj2.age = 25;   // address pass hoga
// here obj obj2 point to same  address and changes
// made by both will update the respective object / array store at that particular address

console.log(obj);
