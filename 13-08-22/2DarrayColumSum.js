// prace solving No.2


function findColoumSum(matrix) {
    let colLength = matrix[0].length;
    let result =[];
    for (i = 0; i < colLength; i++) {
        let sumCol = 0;
        for (j = 0; j < matrix.length; j++) {
            sumCol += matrix[j][i];
        }
        result.push(sumCol);
    }
    console.log(result);
}

let matrix = [  [1, 0, 3],
                [0, 2, 0],
                [0, 0, 2]];

let matrix2 = [  [1, 0, 3],
                [4, 2, 4],
                [0, -7, 2]];                

findColoumSum(matrix2);
