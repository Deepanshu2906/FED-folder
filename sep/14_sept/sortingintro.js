// sorting : arranging the elements in desired permutation

// stabilty means
// let arr =[["anil",50],["ayush",80],["Piyush",50],["ramesh",80]];

// lexial order i.e  alphabetically increasing 
// also in incresing marks.
// arr [["anil",50],["Ayush",50],["Piyush",80]["ramesh",80] ]// stable
// exampele of stable sorts: Bubble sort, insertion sort, merge sort..
//    unstable sort: selection sort, quick sort, heap sort
// have always  o( n2) Time complexity always.

// bubble sort : comparing adjacent  and consecutive elements
// NOtes : maximum element is being traversing to the end
 // rough work to understand

function bubbleSort(arr){
    let length = arr.length;
    let flag =true;
    for(let i=0; i<length-1;i++){

        for(let j=0; j< length-1-i;j++){

            if(arr[j]> arr[j+1]){

                 let temp = arr[j];
                 arr[j ] =arr[j+1];
                 arr[j+1] =temp;
                flag = false;
            }
        }
        if(flag){
            break;
        }
    }
    return arr;
}
console.log(bubbleSort([1,2,5,4]));

