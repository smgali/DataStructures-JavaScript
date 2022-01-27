let head = [1, 2, 3, 4];
var reorderList = function (head) {
  let stack = [];
  let last = head.length - 1;

  for (let i = 0; i < head.length; i++) {
    if (head[i] == undefined) {
    } else {
      stack.push(head[i]);
      delete head[i];
      stack.push(head[last]);
      delete head[last];
      last--;
    }
  }
  if (head.length % 2 != 0) {
    let index = stack.indexOf(undefined);
    stack.splice(index, 1);
  }
  return stack;
};
