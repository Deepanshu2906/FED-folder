
//  print the matrix in waveform

let matrix =    [[1, 2, 3, 4],
                 [5, 6, 7, 8], 
                 [9, 10, 11, 12]
                ,[13, 14, 15, 16]];
     // 1,5,9,13,14,10,6,3,3,7,11,15,4,8,12,16

function printWaveForm(matrix)     {
    let startRow = 0;
    let startCol = 0;
    let endRow = matrix.length - 1;
    let endCol = matrix[0].length - 1;
    while(startCol <= endCol){
    for(i = startRow; i<=endRow ;i++){
        console.log(matrix[i][startCol]);
    }
    startCol +=1;
    for(i=endRow ;i>=startRow ;i--){
        console.log(matrix[i][startCol]);
    }
    startCol +=1;
 }
}
printWaveForm(matrix);