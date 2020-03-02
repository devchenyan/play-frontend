/**
 * 节流（throttle）
 * 不管事件触发频率多高，只在单位时间内执行一次。
 */

 function throttle(fn, delay) {
   let timer = null
   return function(...args) {
     if (!time) {
       timer = setTimeout(() => {
         timer = null
         fn.apply(this, args)
        //  fn.call(this, ...args)
       }, delay)
     }
   }
 }