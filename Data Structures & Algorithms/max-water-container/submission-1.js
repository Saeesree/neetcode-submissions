class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        let n = heights.length
        let i = 0;
        let j = n-1
        while(i<j){
            let area = Math.min(heights[i], heights[j])*Math.abs(i-j);
            res = Math.max(res, area)
            if(heights[i]<=heights[j]){
                i++;
            }else{
                j--;
            }
            
        }
        return res;
    }
}
