
//Palindrome string when the input is same forward and backward.

// input: racecar ==> true
// input: hello ==> false 


function isPalindrome(input: string): boolean {
   return input === input.split('').reverse().join('')
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));

