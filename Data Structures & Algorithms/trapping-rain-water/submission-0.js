class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height.length){
            return 0;
        }
        let n = height.length;
        let res = 0;

        for(let i=0; i<n; i++){
            let leftmax = height[i];
            let rightmax = height[i];

            for(let j=0; j<i; j++){
               leftmax = Math.max(leftmax, height[j])
            }

            for(let j=i+1; j<n; j++){
                rightmax = Math.max(rightmax, height[j])
            }

            res += Math.min(leftmax, rightmax) - height[i]; 
        }
        return res;
    }
}
