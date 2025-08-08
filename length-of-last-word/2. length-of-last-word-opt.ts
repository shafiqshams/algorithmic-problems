
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

function lengthOfLastWordOptimized(s: string): number {

   let len = 0;
   let i = s.length - 1

   // Remove whitespace from the end of the sentence.
   while (i >= 0 && s[i] === ' ') {
      i--;
   }

   // Count the length of the last word until encounter the space.
   while (i >= 0 && s[i] !== ' ') {
      len++;
      i--;
   }

   return len;
};


lengthOfLastWordOptimized("   fly me   to   the moon  ");