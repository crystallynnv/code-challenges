// Contiguous Sequence: You are given an array of integers (both positive and negative). Find the
// contiguous sequence with the largest sum. Return the sum.
// EXAMPLE
// Input:2, -8 , 3, -2, 4, -10
// Output: 5 (i.e. , {3 , -2, 4} )
// Hints: #53#551, #567, #594, #614

// function findMaxSum(arr) {
//     let maxSum = 0;
//     let currentMax = 0;
//     let tempSum = 0;
//     for (i = 0; i< arr.length; i++) {
//         for(j = 0; j < arr.length; j++) {
//             tempSum += arr[i]+arr[i+1];
//             if (tempSum > currentMax) {
//                 currentMax = tempSum
//             }
//             if (currentMax > maxSum) {
//                 maxSum = currentMax;
//             }
//             currentMax = 0;
//             tempSum = 0;
//         }
//     }
//     return maxSum;
//     console.log(maxSum);
// }

// findMaxSum([2, -8 , 3, -2, 4, -10])



function getMaxSum(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        let start = 0;
        for (let j = i; j < arr.length; j++){
            start += arr[j];
            max = Math.max(max, start);
        }
    }
    console.log(max);
    return max;
}
arr = [-2, -1, 1, 10, -6, 14, 7, -6] // 3
getMaxSum(arr);
