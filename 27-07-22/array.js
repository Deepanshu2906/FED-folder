// Array is most commonly used data structure
// Array, stack, Queue,LinkedList, Graph ,Tress..
// Array are special type of objects in JS
// Array use numbers to access the elements

//1. How does it store ?


// 1  .... 100 // sum
// function sum(n1, n2,n2, n3 ,.....,n100){
//     console.log(n1+n2+n3 +...+n100);
// }   

// var array =[5,4,6,7,4,4,2,2,4,3,3,3,3,4,342,243433,,,3322,3,23,2,]
// sum(array);


// var array =["rohit", "abhimanyu", "vasu", "Santosh", "Reema"];
//   splice takes two parametrs for deleting
// first : from where we want to start to delete
// second : How many num we want to delete(integer)

// for eg. to delete abhimanyu
// array.splice(0,1);
// console.log(array); 

// to add items in array we use splice also
// splice() => take three parameter
// first: index  at which we want to add item , second: 0(always)
// third : the string or array

// for eg. adding "Dhirendra" btw vasu and santosh
// array.splice(2,0, "Dhirendra");
// console.log(array);

// array.splice(3,0, ("BoBy"));
// console.log(array);

// 2D-array

let  multiDimentional =[ [1,2,"hello",4],[5,7,8,9],[10,1,12,13]];
//                 index      0           1        2

console.log(multiDimentional[0][2]);





