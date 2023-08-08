function hasTargetSum(array, target) {
  // Write your algorithm here
    const seenNumbers = new Set(); // To keep track of numbers we've seen
    
    for (let num of array) {
      const complement = target - num; // Calculate the complement needed for the target sum
      
      if (seenNumbers.has(complement)) {
        return true; // Found a pair that adds up to the target
      }
      
      seenNumbers.add(num); // Add the current number to the set
    }
    
    return false; // No pair found
  }
  
  // Test cases
  console.log(hasTargetSum([3, 19, 12, 0, 8, 7], 1)); // Output: false
  console.log(hasTargetSum([5, 19, 4, 6, 30], 11));   // Output: true
  console.log(hasTargetSum([2, 3, 7], 5));              // Output: true
  
/* 
  Write the Big O time complexity of your function here
  The total time complexity of the above function is O(n), where n is the number of elements in the array.
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
