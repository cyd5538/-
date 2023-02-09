const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
      this.front = null;
      this.back = null;
      this.length = 0;
    }
    push(data){
        const node = new Node(data);
        if(this.length === 0){
            this.front = node;
        }else{
            this.back.next = node;
        }

        this.back = node;
        this.length ++;
    }
    shift(){
        if(this.length === 0){
            return false;
        }
        const data = this.front.data;
        this.front = this.front.next;
        this.length--;

        return data;
    }
}

const card = new SinglyLinkedList();
for(let i=1; i<=input; i++){
    card.push(i)
}

while(card.length > 1){
    card.shift()
    card.push(card.shift())
}

console.log(card.front.data)