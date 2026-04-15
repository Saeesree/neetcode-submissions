class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const n = nums.length;
        let l = 1;
        let r = n-1;
        while(l<r){
            let mid = Math.floor((l+r)/2);
            let count = 0;

            for(let i=0; i<n; i++){
                if(nums[i]<=mid){
                    count++;
                }
            }

            if(count<=mid){
                l = mid+1;
            }else{
                r = mid;
            }
        }
        return l;
    }
}
