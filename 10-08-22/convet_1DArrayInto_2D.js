// Given a 1D array of size 10 , convert it into a 2D array of size 2x5
// [1,2,3,4,5,6,7,8,9,10]
                                        // method => 1
// function convertArrayFrom_1D_To_2D(arr){
//     let arr1 =[];
//     let count =1;
//     let packetSize =arr.length/5;
//     while(count <= arr.length/5 ){
//     arr1.push(arr.filter((x,i)=> i>=(count-1)*5 && i< count*5)); 
//     // pattern ban rahahai // 0-4
//                           //  5-9
//     count++;
// }
// console.log(arr1);
// }
//                   method 2=> simple  and logical but fantastic
function convertArrayFrom_1D_To_2D(arr) {
    let two2DArray = [];
    for (i = 0; i < arr.length / 5; i++) {
        let arr1 = [];
        for (j = i * 5; j < (i + 1) * 5; j++) {
            if (arr[j]) {
                arr1.push(arr[j]);
            }
        }
        two2DArray.push(arr1);
    }
    console.log(two2DArray);
}
convertArrayFrom_1D_To_2D([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);