class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = {};
        let res = 0;
        let maxCount = 0;
        for(let num of nums){
            count[num] = (count[num]||0)+1;
            if(count[num]>maxCount){
                res = num
                maxCount = count[num]
            }
        }
        return res
    }
}
