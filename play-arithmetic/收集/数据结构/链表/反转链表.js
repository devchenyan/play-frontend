// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 判断当前节点是否为空
// 不为空就先获取当前节点的下一节点
// 然后把当前节点的 next 设为上一个节点
// 然后把 current 设为下一个节点，pre 设为当前节点
var reverseList = function(head) {
  // 判断下变量边界问题
  if (!head || !head.next) return head
  // 初始设置为空，因为第一个节点反转后就是尾部，尾部节点指向 null
  let pre = null
  let current = head
  let next
  while (current) {
    next = current.next
    current.next = pre
    prev = current
    current = next
  }
  return prev;
};
