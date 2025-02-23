// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order, starting with word1.
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"

// Example 2:
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"

function mergeAlternately(word1: string, word2: string): string {

   let newString: string[] = [];
   let len = Math.max(word1.length, word2.length)
   for (let i = 0; i < len; i++) {
      word1.charAt(i) && newString.push(word1.charAt(i))
      word2.charAt(i) && newString.push(word2.charAt(i))
   }

   return newString.join('');
};

mergeAlternately("abc", "pqr")