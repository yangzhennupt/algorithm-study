/**
 * 
 * 链表相比数组的优点：更改指针即可实现增删改，效率比数组依次移位更高！ 
 * 查询的话必须从表头开始迭代，直到找到需要的元素
 */

// 链表的节点
function Node(element) {
  this.element = element
  this.next = null
}

// 链表类

function LinkedList() {     
  let head = null
  let length = 0
  // 链表尾部增加node,分为两种情况，如果head为null,添加的是第一个元素，如果不为null，则加在尾部；
  this.append = function (element) {
    let node  = new Node(element),
      current;
      if(head === null) {
        head = node;
      } else {
        current = head;
        // 循环找到最后一个节点   1-> 2 -> 3
        while(current.next) {
          current = current.next;
        }
        current.next = node;
      }
      length++;
  }
  // 链表特定位置插入节点
  this.insert = function (position, element) {
    
    if (position>=0 && position<=length) {
      let node = new Node(element);
      let current = head,
      index =0,
      previous;
      // 如果position为0
      if(position === 0) {
        node.next = current;
        head = node;
      } else {
        while(index++<position) {
          previous = current;
          current = current.next;
        };
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      // 越界返回false
      return false;
    }
  }
  // 根据节点值从链表中移除一项
  this.remove = function (element) {
    let current = head,
      previous;
    if (head.element === element) {
      head = current.next;
    } else {
      while(current.element!==element) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    length--;
  }
  // 根据下标从链表中移除一项
  this.removeAt = function (position) {
    let current = head,
      previous,
      index = 0;
    if (position === 0) {
      head = current.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    length--;
    return current.element;
  }
}