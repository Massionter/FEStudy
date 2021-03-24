// 获取数组中最大跳跃数
function getJumpNum(nums) {
  let max = 0
  // 最大边界值
  let end = 0
  // 跳跃数
  let step = 0
  for (let index = 0; index < nums.length - 1; index++) {
    max = Math.max(max, index + nums[index])
    if (index == end) {
      end = max
      step++
    }
  }
  return step
}
console.log(getJumpNum([2,3,1,3,5]))
