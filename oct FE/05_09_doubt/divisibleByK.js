/*
DIVISIBILITY BY K
Problem Statement
Amy has an array A of N integers.
In one operation she can select a non-empty subsequence of array A
and increase or decrease each element of the array by 1.
Find the minimum number of operations she needs to make each element of
the array A, divisible by K.
You are given T independent test cases.
Constraints
1 <= T <= 10
1 <= N <= 105
2 <= K <= 105
0 <= Ai <= 109
All input values are integers.
Input Format
First-line contains T.
First line of each test case consists of two space separated integers N and K.
Second line of each test case has N space separated integers denoting the array A.
Output Format
Print in a newline for each test case a single integer denoting the minimum
number of operations she needs to make each element of the array divisible by K.
Sample Input 1
1
4 3
4 3 6 2
Sample Output 1
2
Explanation of Sample 1
She selects the subsequence, {A1, A3} and decrease each by 1. So, A = [3, 3, 5, 2]
Then, she selects the subsequence, {A3, A4} and increase each by 1. So, A = [3, 3, 6, 3]
Now each element of the array is divisible by 3.
*/
// function numOfStepsToMakeDivisible(array, k) {
//     let numOfSteps = 0;

//     for (let i = 0; i < array.length; i++) {

//         let remainder = array[i] % k;
//         let difference = k - remainder;

//         if (!array[i] % k == 0) {

//             if (remainder <= difference) {
//                 numOfSteps = numOfSteps - 1;
//             } else {

//                 array[i] += difference;
//                 numOfSteps = numOfSteps + remainder;
//             }
//         }
//     }
// }


array = [1,4,2,6,9,5];
n = array.length 
k = 3 

//array = [1 4 2 6 9 5];
//remainders =  [1 1 2 0 0 2];
//K-remainder = [2 2 1 2 2 1];
//min array  =  [1 1 1 0 0 1]

// array = [1, 2];
// count = 0
// for (let i = 0; i < n; i++){
//   if (remianders[i] !== 0){
//     if (!array.includes(remainder[i])){
//       counter += min(1, 5-1=4) ;
//         array.push(remainders[i]);
//     }
//   }
// }

// console.log(counter);