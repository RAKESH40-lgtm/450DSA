let fs = require("fs");
let data = fs.readFileSync("input.txt", "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
/*
Given an array A of size N, print the reverse of it.
Example:
Input:
1
4
1 2 3 4
Output:
4 3 2 1
Input:
First line contains an integer denoting the test cases 'T'. T testcases follow. Each testcase contains two lines of input. First line contains N the size of the array A. The second line contains the elements of the array.
Output:
For each testcase, in a new line, print the array in reverse order.
*/ 
function reverseArr(arr,n){
    let str=""
    for(let i=n-1;i>=0;i--){
        str=str+" "+ arr[i]
    }
    return str
}
let t=parseInt(readLine())
for(let i=0;i<t;i++){
    let n=parseInt(readLine())
    let arr=readLine().split(" ").map(Number)
    console.log(reverseArr(arr,n))
}