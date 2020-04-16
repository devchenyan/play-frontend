let obj = JSON.parse(str)
let str = JSON.stringify(obj)


// 拷贝
let obj2 = JSON.parse(JSON.stringify(obj1))

typeof null // 'object'
typeof [] // 'object'
typeof console.log() // 'function'

p1 instanceof Person // true

let str1 = 'aaa' // instanceof不能判断基本类型
str1 instanceof String // false

let str2 = new String('aaa')
str2 instanceof String // true

== // 转类型，再比较
=== //判断类型、值

// 对象 转 原始类型
先 x.valueof() 再 x.toString()

1 + '1' // '11'
true + true // 2
4 + [1,2,3] // '41,2,3'
4 * '3' // 12
4 * [1,2,3] // NaN
4 * [] // 0
'a'++'b' // aNaN

parseFloat(0.1 + 0.2).toFixed(10) == 0.3