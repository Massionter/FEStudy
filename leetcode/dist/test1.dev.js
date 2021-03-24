"use strict";

// 获取数组中最大跳跃数
function getJumpNum(arr) {
  var max = 0; // 最大边界值

  var end = 0; // 跳跃数

  var step = -1;
  arr.forEach(function (item, index) {
    console.log(index, end);
    max = Math.max(max, index + item);

    if (index === end) {
      end = max;
      step++;
    }
  });
  return step;
}

console.log(getJumpNum([2, 3, 1, 1, 4]));