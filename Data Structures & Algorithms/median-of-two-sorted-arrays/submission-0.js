class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let nums = [...nums1,...nums2].sort((a,b) =>a-b)
        let median = 0;
        if(nums.length%2 ===1){
            median =  nums[Math.floor(nums.length/2)]
        }else{
            let mid = Math.floor(nums.length/2)
            median= (nums[mid] + nums[mid-1])/2   
        }
        return median
    }
}
