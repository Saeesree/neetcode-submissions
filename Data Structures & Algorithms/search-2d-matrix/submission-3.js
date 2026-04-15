class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const newMatrix = matrix.flat(Infinity)

        let l =0;
        let r = newMatrix.length-1;
        while(l<=r){
            const mid = Math.floor((l+r)/2)

            if(newMatrix[mid]<target){
                l = mid+1
            }else if(newMatrix[mid]>target){
                r = mid-1;
            }else{
                return true
            }
        }
        return false
    }
}
