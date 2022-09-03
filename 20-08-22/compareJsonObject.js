
function isEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);  // array of keys
    let keys2 = Object.keys(obj2);
    
    // every() returns true if all elements in an array pass a test (provided as a function)
    return keys1.length == keys1.length && keys1.every(key => obj1[key] == obj2[key]); // value compare kar rahe hai key ki help se
    //return keys1.length == keys1.length && keys1.every( (key,i) => key == keys2[i]); // keys hi compare kar rahe hai only
}
var student1 = {
    "fname": "Gyanendra",
    "lname": "Prakash"
};
var student2 = {
    "fname": "Rahul",
    "lname": "Shankar"
}

let result =isEqual(student1,student2);
console.log(result);