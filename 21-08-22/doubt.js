
// convertion of oneday to 2 d array
// const oneD = [2,4,8,9,12,3,56,44,33,88];
// const twoD =[];

// for(let i=0; i< oneD.length; i=i+2){
//     const array =[oneD[i]];
//     if(oneD[i+1]){
//         array.push(oneD[i+1]);
//     }
//     twoD.push(array);
// }
// console.log(twoD);

function greet(name)
{
    function displayName()
    {
        console.log(name); // closure comes into picture
    }
    return displayName; // we need to return when ever outside the fuc we need to send data to other func

}
const g1 = greet('raj');
console.log(g1);
g1();