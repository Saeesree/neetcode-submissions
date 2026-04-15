class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i<nums.length; i++){
            const y = target - nums[i]
            if(nums.includes(y)){
                const indexX = i
                const indexY = nums.indexOf(y, i+1)

                if(indexY !== -1){
                    return [indexX, indexY]
                }
                
            }
        }

    }
}
