


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


function twoSumUsingBruteForce(nums: number[], target: number): number[] {
   const twoSum: number[] = []

   if (nums.length <= 2)
      return [0]

   // Time complexity: O(n^2)
   for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
         if (nums[i] + nums[j] === target) {
            twoSum.push(i, j)
         }
      }
   }
   return twoSum;
};

const res = twoSumUsingBruteForce([7, 11, 15, 2], 9);