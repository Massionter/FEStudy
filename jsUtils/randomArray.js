/*
 * @Author: daiyonghong
 * @Date: 2021-03-29 14:29:35
 * @LastModifiedBy: daiyonghong
 * @LastEditors: daiyonghong
 * @LastEditTime: 2021-03-29 15:29:48
 * @FilePath: \FEStudy\jsUtils\randomArray.js
 * @Description: 描述
 */
// 
// 1. 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
function getData() {
  let array = new Array(5)
  let i = 0

  let num = Math.floor(Math.random() * 31 + 2)
  getRandomArray(array, num)

  function getRandomArray(array, num) {
    if (array.indexOf(num) < 0) {
      array[i] = num
      i++
    } else {
      // 获取新的随机数
      num = Math.floor(Math.random() * 31 + 2)
    }
    if (i >= array.length) {
      console.log(Array.from(array).sort(), array)
      return
    } else {
      getRandomArray(array, num)
    }
  }
}

getData()