class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;
        let l = 0;
        let r = n-1

        while(l<m && r >=0){
            if(matrix[l][r] < target){
                l++;
            }else if(matrix[l][r]>target){
                r--;
            }else{
                return true
            }
        }
        return false
    }
}
