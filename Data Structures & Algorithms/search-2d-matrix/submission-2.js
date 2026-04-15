class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let c of matrix){
            if(c.includes(target)) return true
        }
        return false
    }
}
