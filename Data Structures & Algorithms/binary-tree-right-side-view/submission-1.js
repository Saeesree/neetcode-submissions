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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root || root === null) return []
        let q = [root];
        let res = []

        while(q.length>0){
            let levelSize = q.length;

            for(let i = 0; i<levelSize; i++){
                let node = q.shift()

                if(node.left !==null) q.push(node.left);
                if(node.right !==null) q.push(node.right);

                if(i === levelSize-1){
                    res.push(node.val);
                }
            }
        }  
        return res      
    }
}
