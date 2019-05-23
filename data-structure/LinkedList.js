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
  // 链表尾部增加node
  this.append = function (element) {
    let node = new Node(element), current
    if (head === null) {
      head = node
    } else {
      current = head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    length++;
  }
  // 链表特定位置插入节点
  this.insert = function (position, element) {

  }
  // 链表中移除一项
  this.remove = function (element) {
    let previous, current = head
    if (element === head.element) {
      head = current.next
    } else {
      while (current.element !== element) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    length--;

  }
  this.removeAt = function (position) {
    let current = head,
      previous,
      index = 0
    if (position === 0) {
      head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    length--;
    return current.element
  }
  
}