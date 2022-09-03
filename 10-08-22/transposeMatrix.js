

// transpose Matrix
let arr = [[4, 3, 2],
            [9, 8, 7],
            [14, 13, 12]];
for( i=0; i<arr.length;i++){

    for(j=i+1; j<arr[0].length;j++){
        let temp =arr[i][j];
        arr[i][j] =arr[j][i];
        arr[j][i]=temp;

    }
}
console.log(arr);