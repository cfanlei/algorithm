/*
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-14 10:50:34
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-14 11:25:38
 * @FilePath: \算法\src\1冒泡排序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const arr = [20,38,299,99,33,22,23,53,2332,53,232,34,53,67,7]
//比较相邻元素，如果第一个比第二个大，则交换
function bubbleSort(arr){
    for(let i = 0;i<arr.length-1;i++){
        for(let j = 0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}
bubbleSort(arr)