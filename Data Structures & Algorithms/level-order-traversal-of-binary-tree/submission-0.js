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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root === null) return []
        let q = []
        let result = []
        q.push(root)

        while(q.length > 0){
            let level = []
            let levelSize = q.length
            for(let i = 0; i<levelSize; i++){
                let node = q.shift()
                level.push(node.val);
                if(node.left !==null) q.push(node.left)
                if(node.right !==null)q.push(node.right)
            }

            if(level.length >0){
                result.push(level)
            }
        }
        return result
    }
}
