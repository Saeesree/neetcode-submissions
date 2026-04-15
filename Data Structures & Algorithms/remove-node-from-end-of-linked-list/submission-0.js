/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let nodes= []
        let curr = head
        while(curr){
            nodes.push(curr)
            curr = curr.next
        }  
        let indexToRemove = nodes.length-n; 

        if(indexToRemove === 0){
            return head.next
        }else{
        nodes[indexToRemove-1].next = nodes[indexToRemove].next 
        }

        return head
    }
}
