class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0;
        let n = nums.length;
        while(i<n){
            while(i<n && nums[i]===val){
                nums[i] = nums[--n];
            }
            i++;
        }
        return n;
    }
}
