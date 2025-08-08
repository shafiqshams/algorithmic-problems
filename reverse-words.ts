// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

function reverseWords(s: string): string {
   return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
};

reverseWords("a good   example");
