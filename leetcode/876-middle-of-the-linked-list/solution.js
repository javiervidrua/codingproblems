/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let temp=head, i=1;

    while(temp.next !== null){
        temp = temp.next;
        i++;
    }

    let middle = Math.floor(i/2)+1;

    temp=head, i=1;

    while(i < middle){
        temp = temp.next;
        i++;
    }

    return temp;
};
