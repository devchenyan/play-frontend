var merge = function(nums1, m, nums2, n) {
  let k = 0
  let j = 0
  let res = []
  while (k < m && j < n) {
      if (nums1[k] <= nums2[j]) {
          res.push(nums1[k++])
      } else {
          res.push(nums2[j++])
      }
  }
  if (k < m) res.push(...nums1.slice(k))
  if (j < n) res.push(...nums2.slice(j))
  return res
};