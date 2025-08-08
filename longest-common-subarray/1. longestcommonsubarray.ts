// Longest Common SubArray With Distinct Elements
function longestCommonSubArrayWithDistinctElements() {
   let max: number = 0;
   const array: number[] = [7, 2, 7, 3, 7];

   const subArrays: number[][] = []

   // With Brute-force: Time complexity: O(n^2) x O(n^2) = O(n^4)
   for (let i = 0; i < array.length; i++) {
      for (let j = array.length; j > i; j--) {

         // Creating temp-array
         let tempArray: number[] = array.slice(i, j)

         // Add only if contains unique elements
         if (checkDistinctElements(tempArray)) {
            subArrays.push(tempArray)
            if (max < tempArray.length)
               max = tempArray.length
         }
      }
   }
   console.log("Longest Common SubArray With Distinct Elements", max)
}

// Time complexity: O(n^2)
function checkDistinctElements(array: number[]): boolean {
   for (let i = 0; i < array.length; i++) {
      // for each array element, searching for the value from the next index
      if (array.includes(array[i], i + 1))
         return false
   }
   return true
}

longestCommonSubArrayWithDistinctElements();