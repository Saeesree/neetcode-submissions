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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root || root === null) return null

        let q = []
        q.push(root)

        while(q.length > 0){
            let node = q.shift();

            [node.left, node.right] = [node.right, node.left]

            if(node.left !== null)  q.push(node.left);
            if(node.right !== null) q.push(node.right)
            
        }
        return root
    }
}
