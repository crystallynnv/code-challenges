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
    //console.log(max);
    return max;
}
arr = [-2, -1, 1, 10, -6, 14, 7, -6] // 3
getMaxSum(arr);




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


// function flatten(arr) {
//     arr.forEach((element) => {
//         if (typeOf(element) === "object") {
//             console.log(element)
//             return;
//         }
//     })
// }


// flatten( [1, [2, 3]] );
// flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );


/*-----------------------------------------------------------------*/

// Recursion

function findMax(arr){
    // This function returns the largest number in a given array.
    // base case
    let largestNum = -Infinity;
    let index = 0
      function max() {
        if(index == arr.length){
        return largestNum;
        }
        if(arr[index] > largestNum){
          largestNum = arr[index]
        }
        index++;
        return max() 
      }
    return max();
}

function factorial(num){
    // This function returns the factorial of a given number.
    let sum = 1;
    function fact(num){
      if(num < 1) {
      return sum;
      }
      sum *= num;
      return fact(num-1);
    }
    return fact(num); 
}

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
  let fib = [1, 1];
  let finalNum = n;
  function fibHelper(){
    if(n === 0){
      return fib[finalNum-1];
    }
     fib.push(fib[fib.length-1] + fib[fib.length-2])
     n--;
    return fibHelper();
  }
  return fibHelper();
}

// function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    // let outcomes = [];
    // let half = Math.pow(2, n) / 2
    // let flipper = 1;

    // function flip(){
    //     for(let i = 0; i < Math.pow(2, n); i++){
    //         if()
    //     }
    // }







/*-----------------------------------------------------------------*/

// Write a function that finds the median of 2 sorted lists.
let arr1 = [-5, 3, 6, 12, 15]
let arr2 = [-12, -10, -6, -3, 4, 10]
let arr3 = []

function medianOfTwoArrays(arrA, arrB){
    let arrC = [];
    while (arrA.length || arrB.length){
        if (arrA[0] > arrB[0]) {
            arrC.push(arrB.shift())
        } else {
            arrC.push(arrA.shift())
        }
    }
    
    if (arrC.length % 2) {
        return arrC[Math.floor(arrC.length / 2)]
    } else {
        let sum = arrC[(arrC.length / 2) - 1] + arrC[arrC.length / 2 ]
        return sum / 2
    }

}


// console.log(medianOfTwoArrays(arr1, arr2))

/*-----------------------------------------------------------------*/

// function romanToInt(str) {
//     romanObj = { 
//         1: "I", 
//         5: "V", 
//         10: "X", 
//         50: "L", 
//         100: "C", 
//         500: "D", 
//         1000: "M", 
//         5000: "G", 
//         10000: "H"
//     }
//     for (let i = 1; i < str.length; i++){
//         let char = str.charAt(i)
//         if (char === "I" || char === "X" || char === "C"){
//             let charAfter = str.charAt(i+1);
//             if (charAfter === "V")
//         }

//     }

// }



// function romanToInt(str) {
//     if(str == null) return -1;
//     let num = charToInt(str.charAt(0));
//     let pre, curr;

//     for(let i = 1; i < str1.length; i++){
//         curr = charToInt(str.charAt(i));
//         pre = charToInt(str.charAt(i-1));
//         if(curr <= pre){
//             num += curr;
//         } else {
//             num = num - pre*2 + curr;
//         }
//     }
//     return num;
// }

// function charToInt(c){
//     switch (c){
//         case 'I': return 1;
//         case 'V': return 5;
//         case 'X': return 10;
//         case 'L': return 50;
//         case 'C': return 100;
//         case 'D': return 500;
//         case 'M': return 1000;
//         default: return -1;
// }
// }




romanObj = { 
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    G: 5000,
    H: 10000
}
function romanToInt(str) {
    let num = 0;
    for (i=0; i<str.length; i++) {
        currentValue = romanObj[str[i]]
        nextValue = romanObj[str[i+1]]
        if (currentValue < nextValue) {
            num+= nextValue - currentValue;
            i++;
        } else {
            num += currentValue;
        }
    }
    return num;
}

console.log(romanToInt('XXVI'));
console.log(romanToInt('CI'));

console.log(romanToInt("III"), "should be 3")
console.log(romanToInt("IV"), "should be 4")
console.log(romanToInt("IX"), "should be 9")
console.log(romanToInt("LVIII"), "should be 58")
console.log(romanToInt("MCMXCIV"), "should be 1994")









/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/