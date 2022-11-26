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
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/
function reverseStr(s){
    // let str=" "
    // for(let i=s.length-1;i>=0;i--){
    //     str=str+" "+s[i]
    // }
    // return str
    return s.reverse()
}
let arr=readLine().split(",")
console.log(arr)
console.log(reverseStr(arr))