class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(!prices || prices.length == 0){
            return 0;
        }
        let n = prices.length;
        let res = 0;
        let i =0;
        let j = 1;
        while(i < n){
            if(prices[i]<prices[j]){
                let profit = prices[j] - prices[i];
                res = Math.max(res, profit);
            }else{
                i =j;
            }
            j++;
        }
        return res;
        
    }
}
