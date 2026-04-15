class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const n = heights.length;

        for(let i = 0; i<n; i++){
            const height = heights[i];

            let rightMost = i+1;
            while(rightMost<n && heights[rightMost] >= height){
                rightMost++;
            }

            let leftMost = i;
            while(leftMost >=0 && heights[leftMost] >= height){
                leftMost--;
            }

            leftMost++;
            rightMost--;

            maxArea = Math.max(maxArea, height*(rightMost-leftMost+1));

        };
        return maxArea;
    }
}
