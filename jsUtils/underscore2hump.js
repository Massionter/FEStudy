/*
 * @Author: daiyonghong
 * @Date: 2021-03-29 16:31:05
 * @LastModifiedBy: daiyonghong
 * @LastEditors: daiyonghong
 * @LastEditTime: 2021-03-29 16:51:47
 * @FilePath: \FEStudy\jsUtils\underscore2hump.js
 * @Description: 下划线转驼峰
 */
function underscore2hump(str) {
  return str.replace(/(_[a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('_', '');
  })
  // if (str && typeof str === 'string') {
  //   const strArr = str.split('')
  //   strArr.forEach((v, i) => {
  //     if (v === '_') {
  //       strArr[i + 1] = strArr[i + 1].toUpperCase()
  //     }
  //   })
  //   return strArr.join('').replace(/\_*/g, '')
  // }
}
console.log(underscore2hump('a_c_def'))