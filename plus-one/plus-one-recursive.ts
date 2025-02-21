// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

function plusOneRecursive(digits: number[]): number[] {
   if (digits.length === 0) return [1]; // Base case: all digits were 9

   let lastIndex = digits.length - 1
   if (digits[lastIndex] < 9) {
      digits[lastIndex] += 1
      return digits
   } else
      return plusOneRecursive(digits.slice(0, lastIndex)).concat([0])
};


// let res = plusOneRecursive([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 9])
plusOneRecursive([1, 2, 9])