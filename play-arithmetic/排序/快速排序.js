let nums = [3,2,56,32,47,8,2,1,57,12,25,4]

/**
 * 分治的思想
 *
 * 通过一趟排序 将要排序的数据 分割成 独立的两部分，一部分的所有数据 比 另一部分的所有数据 小
 * 再按此方法对这两部分数据分别进行快速排序
 *
 * 步骤：
 * 选择基准元素target（一般是第一个数）
 * 将 比target小的元素 加到 leftArr，将 比target大的元素 加到 rightArr
 * 分别对target左侧和右侧的元素进行快速排序
*/

/**
 * 平均 O(nlogn)，最坏O(n2)，实际上大多数情况下小于 O(nlogn)
 */

let sortArray = function quickSort(nums) {
  if (nums.length < 2) return nums
  let leftArr = []
  let rightArr = []
  const target = nums[0]
  for (let i = 1; i < nums.length; i++) {
    nums[i] < target ? leftArr.push(nums[i]) : rightArr.push(nums[i])
  }
  return quickSort(leftArr).concat(target, quickSort(rightArr))
};