/**
 * 柯里化是一种 将使用多个参数的一个函数 转换成 一系列使用一个参数的函数 的技术
 *
 * 通俗易懂的解释：
 * 用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数
 *
 * 实现:
 * 判断当前函数传入的参数是否大于或等于fn需要参数的数量，如果是，直接执行fn
 * 如果传入参数数量不够，返回一个闭包，暂存传入的参数，并重新返回currying函数
 */

 function curring(fn, ...args) {
  // fn.length 就是 fn函数的参数个数
   if (args.length >= fn.length) {
     return fn(...args)
   } else {
     return (...allArgs) => curring(fn, ...args, ...allArgs)
   }
 }

 function compose (...fns) {

 }

//  使用：

