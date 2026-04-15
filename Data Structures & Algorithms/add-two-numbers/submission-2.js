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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let curr = dummy
        let carry = 0;
        while(l1||l2||carry){
            let val = (l1?l1.val:0) + (l2?l2.val:0) + carry;
            curr.next = new ListNode(val%10);
            carry = val >= 10?1:0;
            l1 = l1?l1.next:null;
            l2 = l2?l2.next:null;
            curr = curr.next;
        }
        return dummy.next
    }
}
