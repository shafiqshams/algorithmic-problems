

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// You must write an algorithm that runs in O(n) time and without using the division operation.

// This solution is quadratic run-time as using slice and reduce inside a loop, which causes a time complexity of O(n^2).
function productExceptSelf(nums: number[]): number[] {

   const n = nums.length;
   const result: number[] = new Array(n).fill(1);
   let suffix = 1;
   // compute the prefix product array
   // instead of storing prefix array, we directly multiply it in result array
   for (let i = 1; i < n; i++) {
      result[i] = result[i - 1] * nums[i - 1];
   }

   // Now, directly multiple stored result array with suffix product array
   for (let i = n - 2; i >= 0; i--) {
      suffix = suffix * nums[i + 1];
      result[i] = result[i] * suffix;
   }

   return result
};

const res = productExceptSelf([1, 2, 3, 4])

console.log(res)


