class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let minbuy = prices[0]

        for(let sell of prices){
            maxP = Math.max(maxP, sell-minbuy)
            minbuy = Math.min(sell, minbuy)
        }
        return maxP
    }
}
