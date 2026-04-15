class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length
        let left=0;
        let right = n-1;
        let maxArea = 0;

        while(left<right){
            maxArea = Math.max(maxArea, (right-left)*(Math.min(heights[left], heights[right])));
            heights[left]<=heights[right]?left++:right--;
        }
        return maxArea
    }
}
