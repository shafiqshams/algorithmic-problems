
// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Input: prices = [7,6,4,3,1]
// Output: 0
function maxProfit(prices: number[]): number {

   let profit = 0;
   for (let i = 0; i < prices.length - 1; i++) {
      for (let j = i + 1; j < prices.length; j++) {
         if (prices[i] < prices[j]) {
            let newProfit = prices[j] - prices[i]
            profit = profit < newProfit ? newProfit : profit;
         }
      }
   }
   return profit

};

const res = maxProfit([7, 1, 5, 3, 6, 4])
console.log(res)