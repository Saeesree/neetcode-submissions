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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root || root === null) return true;
        return this.helperFunction(root) !== -1;

    }

    helperFunction(root){
        if(!root || root === null) return 0;

        let left = this.helperFunction(root.left)
        if(left === -1) return -1;

        let right = this.helperFunction(root.right)
        if(right === -1) return -1;

        if(Math.abs(left-right) >1) return -1;

        return Math.max(left, right)+ 1
    }
}
