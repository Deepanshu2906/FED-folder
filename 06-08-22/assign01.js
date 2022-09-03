// Given an array 0,1 as input( we need to write a function that sorts the array in ascending order without using inbult function)

function sortBinaryOfArray(arr) {

    for (i = 0; i < arr.length; i++) {

        for (j = i; j < arr.length; j++) {
            if (arr[i] > arr[j + 1]) {
                let temp = arr[i];
                arr[i] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }
    console.log("sorted array=> ", arr);
}
sortBinaryOfArray([0, 1, 1, 0, 0, 0, 1]);

