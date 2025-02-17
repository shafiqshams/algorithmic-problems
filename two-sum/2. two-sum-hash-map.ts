


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


function twoSumUsingHashMap(nums: number[], target: number): number[] {

      const numsObj: { [key: number]: number } = {}

      // Time complexity: O(n)
      for (let i = 0; i < nums.length; i++) {
            let rem = target - nums[i];
            if (rem in numsObj)
                  return [numsObj[rem], i];

            // Store key as value and value as index
            numsObj[nums[i]] = i;
      }

      return [];
};

console.log(twoSumUsingHashMap([7, 11, 15, 2], 26));