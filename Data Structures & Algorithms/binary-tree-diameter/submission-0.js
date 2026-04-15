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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let global_max = 0

        const calculateHeight = (root) => {
            if(!root || root === null) return 0;

            let leftHeight = calculateHeight(root.left)
            let rightHeight = calculateHeight(root.right)

            let diameter = leftHeight + rightHeight
            global_max = Math.max(global_max, diameter)

            return Math.max(leftHeight, rightHeight)+1;
        }
        calculateHeight(root);
        return global_max
    }
}
