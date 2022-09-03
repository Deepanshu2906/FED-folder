// sum of lower triangle and upper triangle 
// in matrix

function sumTriangleInMatrix(matrix){

    result =[];
    let upperTriangleSum =0;
    let lowerTriangleSum =0;
    for(i =0 ; i< matrix.length;i++){
        
        for(j=0; j<matrix[0].length;j++){
            if(i<=j){
                upperTriangleSum +=matrix[i][j];
            }
            if(j<=i){
                lowerTriangleSum +=matrix[i][j];
            }
        }
    }
    result.push(upperTriangleSum,lowerTriangleSum);
    console.log(result);
    
}
let matrix = [  [2, 15, 4],
                [1, 2 ,15],
                [2, 10, 7]];                
sumTriangleInMatrix(matrix);