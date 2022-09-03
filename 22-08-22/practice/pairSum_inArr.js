// find the pair of element whose sum is equal to GIven NUm

// we can also check secondNum =num-arr[i] to check in array as sir
// T(n) => o(n*n);
function findPairSuminArray(arr, num) {
    for (i = 0; i < arr.length; i++) {

        for (j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] == num) {
                console.log(`${i},${j}`);
                return;
                // count ki jaroorat nahi ab {function complete}
            }
        }
    }
}
findPairSuminArray([60, 20, 10, 40, 50, 70, 0], 60);
//findPairSuminArray([11,20,10,40,50,70],50);

