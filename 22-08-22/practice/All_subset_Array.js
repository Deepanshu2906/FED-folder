// let we an array arr =[1,2,3];
// print all subset [1],[2],[3],[1,2],[1,3],[2,3],[1,2,3];

function subsetofArray(arr) {

    for (i = 0; i < arr.length; i++) {
        let newSubset = [];
        newSubset.push(arr[i]);
        console.log(newSubset);
        for (j = i + 1; j < arr.length; j++) {
            if (newSubset[0] != arr[j]) {
                newSubset.push(arr[j]);
                console.log(newSubset);

            }
        }
    }
}
subsetofArray([1, 2, 3,4]);
