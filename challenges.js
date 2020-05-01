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



// Challenge: 19-flatten
// Difficulty:  Intermediate
// Prompt:
// - Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
// - A flattened array is an array that contains no nested arrays.
// - Arrays maybe nested at any level.
// - If any of the arrays have duplicate values those duplicate values should be present in the returned array.
// - The values in the new array should maintain their ordering as shown in the examples below.
// Hint:
// - This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.
// Examples:
// flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array) 
// flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
/*-----------------------------------------------------------------*/
// Your solution for 19-flatten here:

function flatten(arr) {
    arr.forEach((element) => {
        if (typeOf(element) === "object") {
            console.log(element)
            return;
        }
    })
}


flatten( [1, [2, 3]] );
flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
