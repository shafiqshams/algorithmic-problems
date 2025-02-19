
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

function lengthOfLastWord(s: string): number {
   const splitString = s.trim().split(' ');
   return splitString[splitString.length - 1].length;
};


lengthOfLastWord("luffy is still joyboy");