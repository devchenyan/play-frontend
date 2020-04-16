let nums = [3,2,56,32,47,8,2,1,57,12,25,4]

/**
 * 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列
 * 插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位
*/

/**
 * 时间复杂度：O(n2)
 */

let sortArray = function insertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let index = i
    for (let j = i - 1; j >= 0; j--) {
      if (nums[index] < nums[j]) {
        [nums[index], nums[j]] = [nums[j], nums[index]]
        index = j
      } else {
        break;
      }
    }
  }
  return nums
};
