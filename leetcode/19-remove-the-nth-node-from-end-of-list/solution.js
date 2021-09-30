/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let temp=head, temp2=head, i=1, nodes;

    // Get the numner of nodes
    while(temp.next !== null){
        temp = temp.next;
        i++;
    }
    nodes = i;

    // Position temp and temp2
    temp = head;
    i = 1;
    while(temp.next != null){
        temp2 = temp;
        temp = temp.next;
        i++;
        if(nodes-i+1 === n){
            break;
        }
    }

    // Check if removing the first node
    if(nodes===n){
        head = head.next;
        console.log("1");
    }
    // Check if removing the last node
    else if(temp !== null){
        temp2.next = temp.next;
        console.log("2");
    }
    // Otherwise
    else{
        temp2.next = null;
        console.log("3");
    }

    temp = temp2 = null;
    return head;
};
