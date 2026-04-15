class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let res = new Array(n).fill(0)
        for(let i =0; i<n; i++){
            for(let j = i+1; j<n; j++){     
               if(temperatures[j]>temperatures[i]){
                    res[i] = j-i
                    break;
               }
            }
            
        }
        return res;
    }
}
