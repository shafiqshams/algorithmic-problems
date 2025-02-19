
// You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

//Input: n = 12, k = 3
// Output: 3
// Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

function kthFactor(n: number, k: number): number {

   const factorList: number[] = [];

   for (let i = 1; i <= n; i++) {
      if (n % i === 0)
         factorList.push(i)
   }

   return factorList[k - 1] ?? -1
};

const res = kthFactor(12, 3)
console.log(res)