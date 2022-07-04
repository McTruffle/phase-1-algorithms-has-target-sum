function hasTargetSum(array, target) {
  // Write your algorithm here

  for (i = 0; i < array.length; i++) { 
    let remaining = target - array[i];

    for (j = 1 + i; j < array.length; i++) {

      if (array[j] === remaining) return true;
    };
    
    // let total = array[i] + array[j];

  };
  return false;
};

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here


        WRONG!!!!

  for (i = 0; i < array.length(); i++) { 
    let j = array.length - 1 - i;
    let total = array[i] + array[j];
    return total === target;
    };
  };


      CORRECT!!!!

      for (i = 0; i < array.length; i++) {

        let sum = target - array[i];

        for (j = 1 + i; j < array.length; i++) {

          if (sum === array[j]) return true;
        }
      }

*/

/*
  Add written explanation of your solution here

    create a loop that starts at beginning of loop and end of loop
  then add each one together moving in the array


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
