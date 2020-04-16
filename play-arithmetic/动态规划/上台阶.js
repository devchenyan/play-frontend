// 每次 一个 或者 两个 台阶

var climbStairs = function(n) {
  let opt = Array(n).fill(1)
  for (let i = 1; i <= n; i++) {
    i <= 2 ? opt[i] = i : opt[i] = opt[i - 1] + opt[i - 2]
  }
}