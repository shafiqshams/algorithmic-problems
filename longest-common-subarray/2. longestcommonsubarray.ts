// Longest Common SubArray With Distinct Elements
function longestCommonSubArrayWithDistinctElements() {
   let max: number = 0;
   const array: number[] = [7, 2, 7, 3, 7];

   const subArrays: number[][] = []

   //Time complexity: O(n^2) x O(n) = O(n^3)
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

type Seen = {
   [key: number]: boolean
}

// Time complexity: O(n)
function checkDistinctElements(array: number[]): boolean {
   const seen: Seen = {}
   for (let i = 0; i < array.length; i++) {
      if (seen[array[i]])
         return false;

      seen[array[i]] = true
   }
   return true
}

longestCommonSubArrayWithDistinctElements();