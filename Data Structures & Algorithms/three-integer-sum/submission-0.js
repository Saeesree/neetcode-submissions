class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        let nums1 = nums.sort((a, b) => a-b)
        
        for(let i = 0; i < nums1.length; i++){
            // Skip duplicates for the first element
            if(i > 0 && nums1[i] === nums1[i-1]) continue;
            
            let a = nums1[i];
            let l = i+1
            let r = nums1.length-1
            
            while(l < r){
                if(a + nums1[l] + nums1[r] == 0){
                    result.push([a, nums1[l], nums1[r]])
                    
                    // Skip duplicates for the second element
                    while(l < r && nums1[l] === nums1[l+1]) l++;
                    // Skip duplicates for the third element  
                    while(l < r && nums1[r] === nums1[r-1]) r--;
                    
                    l++;
                    r--;
                }
                else if(a + nums1[l] + nums1[r] < 0){
                    l++;
                }
                else {
                    r--;
                }
            }
        }
        return result;
    }
}