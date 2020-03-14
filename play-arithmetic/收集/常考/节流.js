/**
 * 节流（throttle）
 * 不管事件触发频率多高，只在单位时间内执行一次。
 */

function throttle_timer(fn, ms) {
  let timer = null
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, args)
      }, ms)
    }
  }
}

function throttle(fn, ms) {
  let pre = 0
  return function(...args) {
    if (Date.now() - pre > ms) {
      pre = Date.now()
      fn.apply(this, args)
    }
  }
}