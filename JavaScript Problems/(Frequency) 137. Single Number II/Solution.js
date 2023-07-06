/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let arr = nums;
  let length = nums.length;

  // Create a new Map object called 'mp'. A Map is a built-in JavaScript data structure that stores key-value pairs.
  let mp = new Map();

//   HINT : Finding the Frequency of each element and returning the elemnent which has occured only once
  
// Loop through the input array to count the occurrences of each number and store them in the Map.
  for (let i = 0; i < length; i++) {

    // Check if the current number already exists as a key in the Map.
    if (mp.has(arr[i])) {
        // If it exists, increment its corresponding value by 1.
      mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
        // If it doesn't exist, set its corresponding value to 1.
      mp.set(arr[i], 1);
    }
  }

  // Loop through the input array again to find the number that appears only once.
  for (let i = 0; i < length; i++) {
      // Check if the current number's count in the Map is equal to 1.
    if (mp.get(arr[i]) === 1)
      return arr[i]; // If it is, return the number as it appears only once.
  }
};
