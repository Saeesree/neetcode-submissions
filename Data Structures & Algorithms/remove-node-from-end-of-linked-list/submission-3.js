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
        let N = 0;
        let curr = head;
        while(curr){
            N++;
            curr = curr.next;
        }

        const removed = N-n;
        if(removed===0){
            return head.next;
        }

        curr = head;
        for(let i=0; i<N-1; i++){
            if(i===removed-1){
                curr.next = curr.next.next;
                break;
            }
            curr = curr.next;
        }
        return head


    }
}
