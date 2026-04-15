class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;

        let l = 0;
        let r = ROWS*COLS-1
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            let row = Math.floor(mid/COLS),
            cols = mid%COLS

            if(matrix[row][cols]<target){
                l = mid+1;
            }else if(matrix[row][cols]>target){
                r = mid-1;
            }else{
                return true
            }
        }
        return false
    }
}
