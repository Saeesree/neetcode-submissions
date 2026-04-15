class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0
        let j = heights.length-1
        let res = 0
        while(i<j){
            let area = Math.min(heights[i], heights[j]) * (j-i)
            if(area>res){
                res = area;
            }
            if(heights[i]<=heights[j]){
                i++;
            }else{
                j--;
            }
        }
        return res
    }
}
