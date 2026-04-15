class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        for(let i = 0; i<matrix.length; i++){
            if(matrix[i].includes(target)){
                return true
            }
        }
        return false
    }
}
