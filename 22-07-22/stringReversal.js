// string is datatype. and  also works like an array
//

function reverseString(str){
    let len = str.length -1;
    let rev ="";
    for(let i=len ;i>=0;i--){
        rev = rev + str[i]
    }
    return rev;

}
console.log(reverseString("Mumbai")); // iabmuM