
// WAP to find the second largest person in  the given object
function bubbleSort(arr, k){

    for(let i=0; i< k;i++){
        var  isSwapped = false;

        for(let j=0;j < arr.length-1 -i ; j++){
             // if current ele greater then next
            if(arr[j].salary > arr[j+1].salary){
                 let temp = arr[j];
                 arr[j ] = arr[j+1];
                 arr[j+1] = temp;
                 isSwapped =true;
            }
        }
        if( !isSwapped){
            break;
        }
        
    }
    return arr;
}
let arr = [
    { name :"Ram",   salary: 100000},
    { name :"Ramesh",salary: 10000},
    { name :"Rakesh",salary: 500000},
    { name :"Riya",  salary: 650000},
    { name :"Ritik", salary: 45000}
]
//console.log(arr[4].salary);
let k = 2 // second largest  salary person 
let result = bubbleSort(arr, 2);

console.log( result[arr.length -k].name);