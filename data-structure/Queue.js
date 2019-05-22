/**
 * 队列遵循先进先出（FIFO），最常见的例子就是排队
 */

 class Queue {
    constructor () {
        this.items = [];    
    }
    // 向队列尾部添加一个新的项
    enqueue (element) {
        this.items.push(element);
    }
    // 从队列中移除元素
    dequeue () {
        return this.items.shift();
    }
    // 查看队列头部元素
    front () {
        return this.items[0];
    }
    //检查队列是否为空
    isEmpty () {
        return this.items.length === 0;
    }
 }

 /**
  * 优先队列，在推入队列时新增属性，确认优先级，优先级高的先出
  */
 class PriorityQueue {
    constructor () {
        this.items = [];    
    }
    // 向队列尾部添加一个新的项
    enqueue (element, priority) {
        let queueElement = {value:element,priority};
        let added = false;
        for (let i=0;i<this.items.length;i++) {
            if(queueElement.priority < items[i].priority) {
                items.splice(i,0,queueElement);
                added = true;
                break;
            }
        }
        if(!added) this.items.push(queueElement);
        
    }
    // 从队列中移除元素
    dequeue () {
        return this.items.shift();
    }
    // 查看队列头部元素
    front () {
        return this.items[0];
    }
    //检查队列是否为空
    isEmpty () {
        return this.items.length === 0;
    }
 }