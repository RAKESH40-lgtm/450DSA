/*
Given an array Arr of N positive integers. Your task is to find the elements whose value is equal to that of its index value ( Consider 1-based indexing ).
Note: There can be more than one element in the array which have the same value as its index. You need to include every such element's index. Follows 1-based indexing of the array.
Example 1:
Input:
N = 5
Arr[] = {15, 2, 45, 12, 7}
Output: 2
Explanation: Only Arr[2] = 2 exists here.
Example 2:
Input: 
N = 1
Arr[] = {1}
Output: 1
Explanation: Here Arr[1] = 1 exists.
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
Algorithm:
step1:As here O(N) we can use .map and 
step2:as it's indexing 1 while checking index+1
step3:print ele
*/
let arr=[15, 2, 45, 12, 7]
arr.map((ele,index)=>{
    if(ele===index+1){
     console.log(ele)
    }
})