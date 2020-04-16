function getDepth(arr) {
  let depth = 1
  let depArr = []
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          depArr[i] = getDepth(arr[i])
      } else {
          depArr[i] = 0
      }
  }
  depArr.sort()
  if (depArr.length) {
      depth = depArr.pop() + 1
  }
   return depth
}


var arr = [1,[2], [2], [3, [4, [5]]], [6, 7], 8];
var depth = getDepth(arr);
console.log(depth); // 4