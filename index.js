/**
 * Understand the problem:
 * Given an array of integers and a number, write a function called
 * maxSubarraySum, which finds the maximum sum of a subarray with the length
 * of the number passed to the function.
 *
 * Can I restate the problem in my own words?
 * Calculate the maximum sum of an array using a subarray of length determined
 * by the caller of the function.
 *
 * What are the inputs that go into the problem?
 * An array of some size n and an integer m. M is not guaranteed to be
 * less than the length of the input array.
 *
 * What are the outputs to this problem?
 * An integer that is the maximum sum of the input array calculated with a
 * subarray of some length num.
 *
 * How should I label the important pieces of data that are a part of the
 * problem?
 * const maxSubarraySum = (arr, num) => {}
 */

/**
 * Concrete examples:
 * maxSubarraySum([2,3],3) => null
 * maxSubarraySum([100,200],2) => 300
 * maxSubarraySum([100,200,300,400],2) => 700
 * maxSubarraySum([-3,4,0,-2,6,-1],2) => 5
 */

const maxSubarraySum = (arr, num) => {
  // Return null if m is greater than the length of arr.
  if (num > arr.length) return null;
  // Create a variable to track the maximum sum and a temporary sum.
  let maxSum = 0;
  let tempSum = 0;
  // Prime the sliding window by looping and calculating the sum of the
  // first m items in the array.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // Assign maxSum to tempSum since this is what we will compare against.
  tempSum = maxSum;
  // Loop over the rest of the array and calculate the maxSum.
  for (let i = num; i < arr.length; i++) {
    // Move the sliding window.
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([2, 3], 3));
console.log(maxSubarraySum([100, 200], 2));
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
