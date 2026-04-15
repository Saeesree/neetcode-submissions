class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length
        let maxArea = 0
        
        for(let i = 0; i<n; i++){
            let height = heights[i]

            let rightmost = i+1
            while(rightmost < n && heights[rightmost] >= height){
                rightmost++;
            }
            
            let leftmost = i;
            while(leftmost >=0 && heights[leftmost] >= height){
                leftmost--;
            }

            rightmost--;
            leftmost++;
            maxArea = Math.max(maxArea, height*(rightmost - leftmost+1));

        }
        return maxArea;
    }
}
