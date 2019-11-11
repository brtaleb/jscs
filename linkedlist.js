const LinkedList = () => {
  const Node = (value, next) => {
    return {
      value: value,
      next: next
    }
  }

  let firstNode = null;
  let length = 0;

  const addFirst = (value) => {
    if(!firstNode){
      firstNode = Node(value, null);
    }
    else{
      firstNode = Node(value, firstNode);
    }
    length++;
  }

  const addLast = (value) => {
    if(!firstNode){
      firstNode = Node(value, null);
    }
    else{
      let tmp = firstNode;
      while(tmp.next){
        tmp = tmp.next;
      }
      tmp.next = Node(value, null);
    }
    length++;
  }

  const insert = (value, index) => {
    if(index >= length){
      addLast(value);
      return;
    }

    let i = 0;
    let tmp = firstNode;
    let tmp2 = firstNode.next;

    while(i < index-1){
      i++;
      tmp = tmp.next;
      tmp2 = tmp2.next;
    }

    tmp.next = Node(value, tmp2);
    length++;
  }

  const remove = (index) => {
    if(index >= length){
      index = length - 1;
    }

    let i = 0;
    let tmp0 = firstNode;
    let tmp = firstNode.next;
    let tmp2 = firstNode.next.next;

    if(index === 0){
      firstNode = firstNode.next
      length--
      return;
    }

    while(i < index-1){
      i++;
      tmp0 = tmp0.next;
      tmp = tmp.next;
      tmp2 = tmp2.next;
    }

    tmp0.next = tmp2
    tmp = null
    length--;
  }

  const show = () => {
    let tmp = firstNode;
    let res = []
    while(tmp){
      res.push(tmp.value)
      tmp = tmp.next;
    }
    return res
  }

  const printList = () => {
    console.log(JSON.stringify(firstNode, null, 3))
  }

  const getLength = () => {
    return length;
  }

  const reverse = () => {
    let tmp = firstNode
    let tmp2 = tmp.next

    while(tmp2){
      let tmp0 = tmp2.next
      tmp2.next = tmp
      tmp = tmp2
      tmp2 = tmp0
    }

    firstNode.next = null;
    firstNode = tmp
  }

  return {
    addFirst,
    addLast,
    insert,
    remove,
    show,
    printList,
    reverse,
    getLength
  }
}


let list = LinkedList();

list.addFirst('b')
list.addFirst('a')
list.addLast('c')
list.addLast('d')

console.log(list.show());

list.reverse()

console.log(list.show());


console.log('length', list.getLength());

// list.printList()

