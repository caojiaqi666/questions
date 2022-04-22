/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  let prev = null;
  let cur = pHead;
  while (cur) {
    let next = cur.next;
    cur.next = prev;

    prev = cur;
    cur = next;
  }
  return prev;
}
