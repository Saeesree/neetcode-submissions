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

    isSametree(tree1, tree2){
        if(tree1 === null && tree2 === null) return true
        if(tree1 === null || tree2 === null) return false
        if(tree1.val !== tree2.val) return false

        return this.isSametree(tree1.left, tree2.left) && 
               this.isSametree(tree1.right, tree2.right)
    }

    isSubtree(root, subRoot) {
        if(!root) return false
        if(!subRoot) return true

        if(this.isSametree(root, subRoot)){
            return true
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }
}
