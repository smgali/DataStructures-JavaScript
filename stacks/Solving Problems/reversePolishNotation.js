tokens = ["4", "-2", "/", "2", "-3", "-", "-"];

let numbers = [];
for (let i = 0; i < tokens.length; i++) {
  if (
    tokens[i] == "+" ||
    tokens[i] == "-" ||
    tokens[i] == "*" ||
    tokens[i] == "/"
  ) {
    if (tokens[i] == "+") {
      let sum = parseInt(numbers.pop()) + parseInt(numbers.pop());
      numbers.push(sum);
    }
    if (tokens[i] == "*") {
      let product = parseInt(numbers.pop()) * parseInt(numbers.pop());
      numbers.push(product);
    }
    if (tokens[i] == "/") {
      let first = parseInt(numbers.pop());
      let second = parseInt(numbers.pop());
      ans = Math.trunc(second / first);
      numbers.push(ans);
    }
    if (tokens[i] == "-") {
      let first = numbers.pop();
      let second = numbers.pop();
      let ans = second - first;
      numbers.push(ans);
    }
  } else {
    numbers.push(tokens[i]);
  }
}

console.log(numbers);
