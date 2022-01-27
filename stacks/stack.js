/* stacks  
----> Functions for Stack
        Push: to add element in stack
        Pop: to remove element from top of stack
        peek: for displaying top element of stack
        length: for the length of stack

---->In JavaScript we already have all the functions of stack.
*/

// Lets implement Palindrome checker using stack

let isPalindrome = (word) => {
  var letter = []; // stack or array
  var rword = "";

  for (let index = 0; index < word.length; index++) {
    letter.push(word[index]);
  }

  for (let index = 0; index < word.length; index++) {
    rword += letter.pop(word[index]);
  }
  if (rword === word) {
    console.log("The given word is palindrome");
  } else {
    console.log("The given word is not palindrome");
  }
};

//implementing custom stack

var stack = function () {
  this.stack = () => {};
  this.count = 0;
  this.storage = {};

  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };
  this.pop = () => {
    if (this.count == 0) {
      return undefined;
    } else {
      this.count--;
      let result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    }
  };
  this.peek = () => {
    return this.storage[this.count - 1];
  };
  this.size = () => {
    return this.count;
  };
};
var myStack = new stack();
myStack.push("g");
myStack.push("h");
myStack.push("a");
myStack.push("z");
myStack.push("a");
myStack.push("n");
myStack.push("f");
myStack.push("a");
myStack.push("r");
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek());
