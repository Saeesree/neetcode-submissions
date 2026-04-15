class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0;
        let max = 0;
        let count = {};
        for(let num of nums){
            count[num] = (count[num]||0)+1;
            if(count[num]>max){
                max = count[num];
                res = num;
            }
        }
        return res;
    }
}
