//
const edTech = {
    name: "Relevel"
};
// creating new key-value pair
// edTech.website = "www.relevel.com";
// edTech["website"] = "www.relevel.com";
// edTech.name = "Unacademy";
//  console.log(edTech);

// Oject.freeze(obj)
// 1. can't add, update or delete
//Object.freeze(edTech);
// edTech.name = "Unacademy the relevel";
// console.log(edTech);

//  Object.seal(obj)  =>  can't add or delete but can update
Object.seal(edTech);
edTech.name = "Hello ";
console.log(edTech);


// assignent 01
// moving al the positive to left and  negative ti right


function segregatePositiveNegative(arr) {

    let a, b;
    for (let i = 0; i < arr.length; i++) {
        a = arr[i];
        b = arr[i + 1];
    }
}