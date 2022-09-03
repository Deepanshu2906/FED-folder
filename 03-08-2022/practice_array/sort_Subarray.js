//
//[1, 2, 5, 4, 3]
function canArrayBeSort(arr) {

    if (arr.length == 1) {
        return true;
    }
    // step 1.1 find the start of the decreasing array
    let startIndex;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] < arr[i]) {
            startIndex = i;
            break;
        }
    }
    
    // 1.2 find the end index of deceasing array
    let endIndex;
    for (let i = startIndex; i < arr.length; i++) {
        if (arr[i + 1] > arr[i] || i == arr.length - 1) {
            endIndex = i;
            break;
        }
    }

    let decreasingArray = [];
    let j = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        decreasingArray[j] = arr[i];
        j++;
    }
    console.log("Decreasing array :", decreasingArray);
    // step 2 reversing the subarray and assigning to main array
    for (let i = decreasingArray.length - 1; i >= 0; i--) {
        arr[startIndex] = decreasingArray[i];
        startIndex++;
    }
    // step. 3 check if  sorted or  not
    for (let i = 0; i < arr.length - 1; i++) { // last element ko nahi.. include karenge
        if (arr[i] > arr[i + 1]) {
            console.log(false);
            return;
        }
    }


    console.log(true);
    console.log("Main Array after reverse : ", arr);

}

canArrayBeSort([1, 2, 5, 4, 3]); // true
//canArrayBeSort([1, 2, 5, 4, 3, 7, 8, 9, 12, 11,10]); // true
//canArrayBeSort([1, 2, 4, 5, 3]); // false