// wAp to to return an boolean that
// given matrix is an Diagonal matrix or nor.



function checkDigonalMatrix(matrix){
    for(i=0; i<matrix.length; i++){
        for(j=0; j<matrix[0].length;j++){
            if(i!==j && matrix[i][j]!=0){
                    console.log(false);
                    return;
                }
                
            }
        
        
    }
     console.log(true);
     return;

}
let matrix =[[1,0,0],
            [0,2,0]
        ,   [0,0,2]];
let matrix2 =[[1,0,1],
            [-1,2,0]
        ,   [0,0,2]];
 checkDigonalMatrix(matrix);
 checkDigonalMatrix(matrix2);