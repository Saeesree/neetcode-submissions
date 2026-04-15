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
        let carry = 0
        let dummy = {val:0, next:null}
        let current = dummy
        while(l1||l2||carry){
            let val1 = l1?l1.val:0;
            let val2 = l2?l2.val:0;

            let sum = val1+val2+carry;
            let currDigit = sum%10;
            carry = Math.floor(sum/10);

            current.next = {val:currDigit, next:null}
            current = current.next

            if(l1)l1 = l1.next;
            if(l2)l2 = l2.next;
        }
        return dummy.next
    }
}
