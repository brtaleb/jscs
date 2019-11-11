class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class Stack {
 constructor(){
   this.top = null;
   this.bottom = null;
   this.length = 0
 }

 peek(){
   if(this.length){
     return this.top.value
   }
   else return null;
 }

 pop(){
   if(this.length){
     let popped = this.top.value;

     this.top = this.top.next
     this.length--;

     return popped;
   }
   else return null;
 }

 push(value){
   let node = new Node(value);

   if(!this.top){
     this.top = node;
     this.bottom = node;
   }
   else{
     node.next = this.top;
     this.top = node;
   }

   this.length++
 }

 print(){
   if(this.length){
     let tmp = this.top;
     console.log('---');
     while(tmp){
       console.log(tmp.value)
       tmp = tmp.next
     }
     console.log('---');
   }
 }
}

let stack = new Stack();
stack.push('4')
stack.push('7')
stack.push('1')
stack.print()

console.log('peek', stack.peek());
console.log('pop', stack.pop());
console.log('pop', stack.pop());
console.log('peek', stack.peek());

stack.print()