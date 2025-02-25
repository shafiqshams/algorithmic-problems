

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// You must write an algorithm that runs in O(n) time and without using the division operation.

// This solution is quadratic run-time as using slice and reduce inside a loop, which causes a time complexity of O(n^2).
function productExceptSelf(nums: number[]): number[] {

   const n = nums.length;
   const result: number[] = new Array(n).fill(1);
   const prefix: number[] = new Array(n).fill(1);
   const suffix: number[] = new Array(n).fill(1);

   // compute the prefix product array
   for (let i = 1; i < n; i++) {
      prefix[i] = prefix[i - 1] * nums[i - 1];
   }

   // compute the suffix product array
   for (let i = n - 2; i >= 0; i--) {
      suffix[i] = suffix[i + 1] * nums[i + 1]
   }

   // compute resultant array
   for (let i = 0; i < n; i++) {
      result[i] = prefix[i] * suffix[i]
   }

   return result
};

const res = productExceptSelf([1, 2, 3, 4])

console.log(res)


