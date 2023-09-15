/*
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-14 16:37:50
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-14 16:56:08
 * @FilePath: \算法\src\十进制转二进制\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function dec2Bin(dec){
    let stack = []
    let res = ''
    while(dec>0){
        stack.push(dec %2)
        dec = Math.floor(dec /2)
    }
    while(stack.length){
        res += stack.pop()
    }
    console.log(res)
}
dec2Bin(100)
dec2Bin(1000)