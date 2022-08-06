

 let a1 =[23,24,25,26];

//  console.log(a1.map(num=>a1.unshift(num)));
// console.log(a1.shift());
// console.log(a1.unshift(10));  // retrun length of a after inserting 10 at starting
// console.log(a1); // updated a1 
let a2 =[];
console.log(a1.map(num => a2.unshift(num))); // return length of a2 after each unshift()
console.log(a2);// print actual a2 after unshift() oprations

a2 = a1.map(num => a2.unshift(num)); // updating  a2 with  length after each unshift() operation ke baad
console.log(a2);
