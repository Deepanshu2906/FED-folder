// WAP to concats two sorted array and then final array should be sorted


let arr1 = [4, 32, 2, 5, 8];
let arr2 = [9, 21, 12, 15, 58];
function CombineAndSortTwoarray(arr1, arr2) {
    let arr = arr1.concat(arr2);
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
result = CombineAndSortTwoarray(arr1, arr2);
console.log("Sorted array=>", result);