/*Given a sorted array arr containing n elements with possibly duplicate elements, the task is to find indexes of first and last occurrences of an element x in the given array.
Example 1:
Input:
n=9, x=5
arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
Output:  2 5
Explanation: First occurrence of 5 is at index 2 and last
             occurrence of 5 is at index 5. 
 Example 2:
Input:
n=9, x=7
arr[] = { 1, 3, 5, 5, 5, 5, 7, 123, 125 }
Output:  6 6 
Your Task:
Since, this is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function find() that takes array arr, integer n and integer x as parameters and returns the required answer.
Note: If the number x is not found in the array just return both index as -1.
Expected Time Complexity: O(logN)
Expected Auxiliary Space: O(1).
Algorithm:
Note:For first occurence move end=mid-1 and viceversa for last occurence.
step1:Find mid of array if found then move end to mid-1 as we need to find first and for last move end=mid+1
step2:if given target is greater than arr[mid] move start to mid +1 
step3:if given target is less than arr[mid] move end to mid -1
step4:after checking all then calculate once again mid with formulae
step4:return stored answer
*/
function firstOccur(arr, n, target) {
    let s = 0
    let e = n - 1
    let mid = parseInt(s + (e - s) / 2)
    let ans = -1
    while (s <= e) {
        if (arr[mid] === target) {
            ans = mid
            e = mid - 1;
        } else if (target > arr[mid]) {
            s = mid + 1

        } else {
            e = mid - 1
        }
        mid = parseInt(s + (e - s) / 2)

    }
    if (ans === -1) {
        return -1
    } else {
        return ans
    }
}
function lastOccur(arr, n, target) {
    let s = 0
    let e = n - 1
    let mid = parseInt(s + (e - s) / 2)
    let ans = -1
    while (s <= e) {
        if (arr[mid] === target) {
            ans = mid
            s = mid + 1;
        } else if (target > arr[mid]) {
            s = mid + 1

        } else {
            e = mid - 1
        }
        mid = parseInt(s + (e - s) / 2)

    }
    if (ans === -1) {
        return -1
    } else {
        return ans
    }
}
let arr = [1, 3, 5, 5, 5, 5, 7, 123, 125]
let n = arr.length;
let target = 5
console.log(firstOccur(arr, n, target), lastOccur(arr, n, target))