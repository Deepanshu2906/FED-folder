
function findIfSorted(array, i) {
    // base condition => more
    // than 1 condition my be there
    if (i == array.length - 1) {
        //  last element par aane ke baad stop kar denge
        return true;
    }

    if (array[i] > array[i + 1]) {
        return false;
    }

    return findIfSorted(array, ++i); // i++ not working

}
//const array = [ 5, 6, 4, 3, 9];
const array = [1, 2, 3, 5, 3];
console.log(findIfSorted(array, 0));