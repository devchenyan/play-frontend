function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}
sleep(1000).then(res => {
  console.log(res)
})

/**
 * fetchData超时取消，fetchData本身是promise
 * @param {*} ms
 * 返回promise
 */
function fetchDataWithTimeout(ms) {
  return new Promise((resolve, reject) => {
    resolve(fetchData) // fetchData的状态决定了这个promise的状态
    setTimeout(reject, ms)
  })
}

// 异步加载图片
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = function() {
      resolve(image)
    }

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url))
    }

    image.src = url
  })
}

//
let p = new Promise((resolve, reject) => {})
p.then(res => {})
.catch(err => {})
.finally(() => {})