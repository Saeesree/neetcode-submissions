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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists === null)return null;

        let values = [];
        for(let list of lists){
            let current = list
            while(current !== null){
                values.push(current.val);
                current = current.next
            }
        }

        if(values.length === 0)return null;
        values = values.sort((a,b)=> a-b);

        const dummy = new ListNode(0);
        let node = dummy

        for(let n of values){
            node.next = new ListNode(n)
            node = node.next
        }

        return dummy.next

    }
}
