
// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Input: prices = [7,6,4,3,1]
// Output: 0
function maxProfit(prices: number[]): number {

   let profit = 0;
   let minPrice = prices[0];

   for (let i = 1; i < prices.length; i++) {

      if (prices[i] < minPrice)
         minPrice = prices[i]

      const currentProfit = prices[i] - minPrice;
      profit = Math.max(profit, currentProfit)
   }

   return profit
};

const res = maxProfit([1, 2])
console.log(res)



// let min = Math.min(...prices)
// let minIndex = prices.indexOf(min)
// console.log(min, minIndex)


// let max = Math.max(...prices.slice(minIndex + 1))
// let maxIndex = prices.indexOf(max)
// console.log(max, maxIndex)

// if (maxIndex < minIndex)
//    return 0

// return max - min