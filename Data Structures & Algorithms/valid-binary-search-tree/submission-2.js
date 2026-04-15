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
    isValidBST(root) {
        if(!root || root === null)return true;

        function getMax(node){
            if(!node || node === null)return  -Infinity;
            return Math.max(node.val, getMax(node.left), getMax(node.right));
        }

        function getMin(node){
            if(!node || node ===null)return Infinity;
            return Math.min(node.val, getMin(node.left), getMin(node.right));
        }

        if(root.left !==null && getMax(root.left)>=root.val) return false;

        if(root.right !==null && getMin(root.right)<=root.val) return false;

        return this.isValidBST(root.left)&& this.isValidBST(root.right);
    }
}
