class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor(){
    this.root = null
  }

  insert(value){
    let node = new Node(value)

    if(!this.root){
      this.root = node;
    }
    else{
      let tmp = this.root;
      let tmp2 = null;

      while(tmp){
        tmp2 = tmp;
        if(value <= tmp.value){
          tmp = tmp.left
        }
        else{
          tmp = tmp.right
        }
      }

      if(value <= tmp2.value){
        tmp2.left = node;
      }
      else{
        tmp2.right = node;
      }
    }
  }

  lookup(value){
    let tmp = this.root;

    while(tmp.value !== value){
      if(value < tmp.value){
        tmp = tmp.left
      }
      else{
        tmp = tmp.right
      }
    }

    return tmp;
  }

  remove(value){
    let tmp = this.root;
    let parent = null;

    while(tmp.value !== value){
      parent = tmp;
      if(value < tmp.value){
        tmp = tmp.left
      }
      else{
        tmp = tmp.right
      }
    }

    //node is a leaf
    if(!tmp.left && !tmp.right){
      if(parent.right && parent.right.value === value) parent.right = null;
      if(parent.left && parent.left.value === value) parent.left = null;
    }

    //node has one child
    if(!tmp.left){
      if(parent.right && parent.right.value === value){
        parent.right = tmp.right;
      }
      if(parent.left && parent.left.value === value){
        parent.left = tmp.right
      }
    }
    if(!tmp.right){
      if(parent.right && parent.right.value === value){
        parent.right = tmp.left;
      }
      if(parent.left && parent.left.value === value){
        parent.left = tmp.left
      }
    }

    //node has two children
    if(tmp.left && tmp.right){
      let min = tmp.right;
      while(min.left){
        min = min.left;
      }
      this.remove(min.value)
      tmp.value = min.value;
    }

  }

  traverse(node = this.root){
    const tree = {
      value: node.value
    }
    tree.left = node.left ? this.traverse(node.left) : null;
    tree.right = node.right ? this.traverse(node.right) : null;

    return tree;
  }

}


let bst = new BSTree();
bst.insert(20)
bst.insert(6)
bst.insert(24)
bst.insert(4)
bst.insert(12)
bst.insert(14)
bst.insert(22)

bst.remove(20)
bst.remove(14)
bst.remove(6)
console.log(bst.traverse());