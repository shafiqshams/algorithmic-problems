// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2


// Implementing Binary search.
function searchInsert(nums: number[], target: number): number {
   let left = 0;
   let right = nums.length - 1;

   while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (target === nums[mid])
         return mid;
      else if (target < nums[mid])
         right = mid - 1;
      else
         left = mid + 1;
   }
   return left;
};

searchInsert([1], 0)
