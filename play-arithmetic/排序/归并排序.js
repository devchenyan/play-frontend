let nums = [3,2,56,32,47,8,2,1,57,12,25,4]

/**
 * 分治法
 *
 * 分割：
 *    将数组从 中点 进行分割，分为 左、右 两个数组
 *    递归分割的 左、右数组，直到数组长度 小于 2
 * 归并：
 *    如果需要合并，那么 左右两组数据已经是 有序的
 *    创建一个 临时存储数组temp，比较两个数组 第一个元素，将 较小的取出元素 并 加入temp数组
 *    若 左右数组 有一个为空，那么此时 另一个数组 一定大于 temp中的所有元素，直接将 其所有元素加入 temp
*/

/**
 * 时间复杂度：O(nlogn)
 */

let sortArray = function mergeSort (nums) {
  if (nums.length < 2) return nums
  const midNum = nums.length >> 1
  let leftArr = nums.slice(0, midNum)
  let rightArr = nums.slice(midNum)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
};

function merge (left, right) {
  let temp = []
  while (left.length && right.length) {
    left[0] < right[0] ? temp.push(left.shift()) : temp.push(right.shift())
  }
  left.length ? temp.push(...left) : temp.push(...right)
  return temp
}

