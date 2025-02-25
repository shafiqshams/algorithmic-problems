

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// You must write an algorithm that runs in O(n) time and without using the division operation.

// This solution is quadratic run-time as using slice and reduce inside a loop, which causes a time complexity of O(n^2).
function productExceptSelf(nums: number[]): number[] {

   const result: number[] = []

   let leftProd: number;
   let rightProd: number;

   for (let i = 0; i < nums.length; i++) {
      let x = nums.slice(0, i);
      let y = nums.slice(i + 1, nums.length)
      leftProd = computeProduct(x)
      rightProd = computeProduct(y)

      result.push(leftProd * rightProd)
   }
   return result
};

const computeProduct = (inputArray: number[]): number => {
   return inputArray.reduce((total, current) => total * current, 1)
}

const res = productExceptSelf([1, 2, 3, 4])

console.log(res)

