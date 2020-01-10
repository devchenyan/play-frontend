let nums = [3,2,56,32,47,8,2,1,57,12,25,4]

function swap(array, x, y) {
  const tmpY = array[y]
  array[y] = array[x]
  array[x] = tmpY
}

/**
 * 循环数组，比较 当前元素 和 下一个元素
 * 如果： 当前元素 > 下一个元素 则 向上冒泡
*/

let sortArray = function bubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i ++) {
    // 前面已经排好的就不用再排了
    for (let j = i + 1; j < nums.length; i ++) {
      if (nums[i] > nums[j]) swap(nums, i, j)
    }
}
return nums
};
