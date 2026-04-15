class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binary_search(l, r, nums, target){
        if(l>r) return -1;
        const mid = Math.floor((l+r)/2);

        if(nums[mid] === target) return mid;
        return nums[mid] > target
            ? this.binary_search(l, mid-1, nums, target)
            : this.binary_search(mid+1, r, nums, target)
    }

    search(nums, target) {
        return  this.binary_search(0, nums.length-1, nums, target);
    }
}
