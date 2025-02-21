// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

function plusOne(digits: number[]): number[] {

   for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
         digits[i] += 1;
         return digits;
      }
      digits[i] = 0
   }

   const newDigits = new Array(digits.length + 1).fill(0)
   newDigits[0] = 1;
   return newDigits
};


plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 9])