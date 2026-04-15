/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSametree(root, subRoot){
        if(root === null && subRoot === null) return true;
        if(root === null || subRoot === null) return false;
        if(root.val !== subRoot.val) return false

        return this.isSametree(root.left, subRoot.left) && 
               this.isSametree(root.right, subRoot.right)
    }

    isSubtree(root, subRoot) {
        if(!root) return false;
        if(!subRoot) return true;

        if(this.isSametree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) ||
                this.isSubtree(root.right, subRoot)
    }
}
