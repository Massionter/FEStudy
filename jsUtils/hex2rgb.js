/*
 * @Author: daiyonghong
 * @Date: 2021-03-26 15:46:35
 * @LastModifiedBy: daiyonghong
 * @LastEditors: daiyonghong
 * @LastEditTime: 2021-03-26 16:58:04
 * @FilePath: \FEStudy\jsUtils\hex2rgb.js
 * @Description: 十六进制转RGB
 */
const hex2rgb = (hexColor) => {
  let newstr = ''
  if (hexColor.length === 4) {
    newstr = hexColor.slice(0, 1) + hexColor.slice(1) + hexColor.slice(1)
  } else {
    newstr = hexColor
  }
  const rgbArr = []
  for (let i = 1; i < 7; i+=2) {
    rgbArr.push(parseInt('0x' + newstr.slice(i, i + 2)))
  }
  return `rgba(${rgbArr.join(',')} ,0.5)`
}
console.log(hex2rgb('#FFFaaa'))