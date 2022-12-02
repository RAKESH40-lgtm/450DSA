let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
/*
Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

 

Example 1:

Input:
N = 6
A[] = {3, 2, 1, 56, 10000, 167}
Output:
min = 1, max =  10000
Example 2:
Input:
N = 5
A[]  = {1, 345, 234, 21, 56789}
Output:
min = 1, max = 56789
approach1:
step1:store min and max=arr[0]
setp2:iterate through 1 and change the min and max
step3:return those min and max
Approach 2:
step1:store min and max=arr[0]
step2:use Math.max() and Math.min() for comparision
step3:push this values to the previous created arr and return it
*/
function getMinMax(arr, n) {
    //code here
    let min = arr[0]
    let max = arr[0]
    let minMax = []
    for (let i = 1; i < n; i++) {
        max = Math.max(arr[i], max)
        min = Math.min(arr[i], min)
    }
    minMax.push(min, max)
    return minMax

}
let n = parseInt(readLine())
let arr = readLine().split(" ")
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(arr[i])
}
console.log(arr)
console.log(getMinMax(arr, n))