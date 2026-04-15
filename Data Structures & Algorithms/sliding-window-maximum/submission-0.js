class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = []

        let i = 0;
        let j = k-1;
        while(j<nums.length){
            let subArr = nums.slice(i, j+1)
            let maxValue  = subArr.reduce((max, current) => Math.max(max, current), -Infinity);
            res.push(maxValue)
            i++;
            j++;    
        }
        return res
    }
}
