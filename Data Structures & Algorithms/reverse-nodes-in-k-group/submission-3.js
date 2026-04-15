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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(0, head);
        let node = dummy;

        while(true){
            let kth = this.getKth(node, k)
            if(!kth) break;
            let  groupNext = kth.next;
            
            let prev = kth.next;
            let curr = node.next;
            while(curr !== groupNext){
                let temp = curr.next;
                curr.next  = prev;
                prev = curr;
                curr = temp
            }

            let temp = node.next;
            node.next = kth;
            node = temp
        }
        return dummy.next
    }

    getKth(curr,k){
        while(curr && k>0){
            curr = curr.next;
            k--
        }
        return curr
    }
}
