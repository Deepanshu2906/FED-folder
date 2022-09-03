
// 
// function findValueinMatrix(matrix,num){
//     for(i=0; i< matrix.length;i++){

//         if(matrix[i].includes(num)){ // traversing through row

//             let index = matrix[i].findIndex(value =>num==value);
//             console.log(i,index);
//             return true;
//         }
//     }
//     return false;
// }
// Method=> without inbuilt function
function findValueinMatrix(matrix, num) {
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] == num) {
                return `${i}, ${j}`;
            }
        }
    }
    return "Not present";
}

var matrix = [[1, 2, 3], [9, 0, 28], [11, 5, 6]];

console.log(findValueinMatrix(matrix, 6));

//console.log(findValueinMatrix(matrix, 79));
