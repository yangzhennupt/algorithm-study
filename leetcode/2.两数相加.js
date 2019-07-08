/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(null);
    let finalList = result;
    // let l1Length = 0
    // let l2Length = 0
    // while(l1.next) {
    //   l1Length++;
    //   l1 = l1.next;
    // }
    // while(l2.next)  {
    //   l2Length++;
    //   l2 = l2.next;
    // }
    // const maxLengthList =  l1Length > l2Length ? l1 : l2;
    // const minLengthList = l1Length < l2Length ? l1 : l2;
    let carry=0;
    while(l1!==null || l2!==null) {
      let x = l1!==null ? l1.val : 0;
      let y = l2!==null ? l2.val : 0;  
      let curVal = (x + y + carry) % 10;
      carry =  Math.floor((x + y + carry) / 10);
      finalList.next = new ListNode(curVal);
      finalList=finalList.next;
      if(l1!==null) l1 = l1.next;
      if(l2!==null) l2 =l2.next;
      
      // carry = maxLengthList.val + minVal > 10 ? 1: 0;
      // let tempNum = (maxLengthList.val + minVal) % 10;
      // finalList.next = new ListNode(tempNum);
      // finalList= finalList.next;
      // maxLengthList = maxLengthList.next;
      // minLengthList = minLengthList&&minLengthList.next || null;
    }
    if(carry) {
      finalList.next = new ListNode(carry);
    }
    console.log(finalList)
    return result.next
};

/**
 * 就像做加法一样，每次先算出进位，因为每一位只有一个数，因此进位为0或1；
 * 遍历两个链表，不为null就取val值，否则取0，算出进位，然后相加即可；
 * 循环之后还要确认是否存在进位，如果存在，就新增一个节点；
 * 
 * var addTwoNumbers = function(l1, l2) {

 *  let result = new ListNode(null);
    let finalList = result;
 *  let carry=0;
    while(l1!==null || l2!==null) {
      let x = l1!==null ? l1.val : 0;
      let y = l2!==null ? l2.val : 0;  
      let curVal = (x + y + carry) % 10;
      carry =  Math.floor((x + y + carry) / 10);
      finalList.next = new ListNode(curVal);
      finalList=finalList.next;
      if(l1!==null) l1 = l1.next;
      if(l2!==null) l2 =l2.next;
 *  }
    if(carry) {
      finalList.next = new ListNode(carry);
    }
    return result.next
 * }
 * 
 * 
 * 
 */

