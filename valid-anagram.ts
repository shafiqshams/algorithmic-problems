
// Time complexity: O(n)
// Space complexity: reduced to O(1) instead of O(n)
function isAnagram(s: string, t: string): boolean {

   // Using only one object (hash-table)
   const counter: { [key: string]: number } = {}

   if (s.length !== t.length)
      return false

   for (let index = 0; index < s.length; index++) {
      counter[s[index]] = (counter[s[index]] || 0) + 1
      counter[t[index]] = (counter[t[index]] || 0) - 1
   }

   // Efficient way to verify that all character frequencies are balanced (zero)
   return Object.values(counter).every(count => count === 0)
};

console.log(isAnagram('rat', 'tar'))
