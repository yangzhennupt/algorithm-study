// LIFO  后入先出，参考一堆书堆在桌子上，最先放下的最后出来,实现方式是利用数组的栈方法，pop,push
class Stack {
    constructor () {
        this.items = []
    }
    push (element) {
        this.items.push(element);
    }
    // 移除栈顶元素，同时返回被移除的元素
    pop () {
        return this.items.pop();
    }
    // 仅返回栈顶元素，不对栈进行任何操作
    peek () {
        return this.items[this.items.length-1];
    }
    isEmpty () {
        return this.items.length === 0;
    }
    size () {
        return this.items.length;
    }
    clear () {
        this.items = [];
    }
}