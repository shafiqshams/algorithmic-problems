// Longest Common SubArray With Distinct Elements
function longestCommonSubArrayWithDistinctElements() {
   const array: number[] = [7, 2, 7, 3, 7];
   const seen: { [key: number]: boolean } = {}

   let max: number = 0;

   // Using sliding-window technique
   let left: number = 0;

   //Time complexity: O(n)
   for (let right = 0; right < array.length; right++) {

      while (seen[array[right]]) {
         seen[array[left]] = false;
         left++;
      }

      seen[array[right]] = true;
      max = Math.max(max, right - left + 1)
   }


   console.log("Longest Common SubArray With Distinct Elements", max)
}


longestCommonSubArrayWithDistinctElements();