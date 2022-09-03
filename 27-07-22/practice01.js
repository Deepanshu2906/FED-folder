// remove the duplicate element from the array

const array =['a', 'b', 'c','a', 'c', 'd', 'a'];
let obj ={};
function removeDuplicate(arr){
    arr.map(item =>{
    if(obj[item]){
        obj[item] +=1;
    }
    else {
        obj[item] =1;
    }
});
console.log(Object.keys(obj));
return 
}
removeDuplicate(array);