
//5- Easy ,3-Medium
/*9. Palindrome Number
Difficulty: Easy
 .Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
Input: x = 121
Output: true
*/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var str =String(x);
    let i=0,j=str.length-1;
    while(i<=j){
        if(str[i]!==str[j]){
            return false;
        }
        i++;j--;
    }
return true
};

console.log(isPalindrome(128));
//kadane's Algorithm-Max subarray
/*Arr[] = {1,2,3,-2,5}
Output:
9
*/ 
const kadanes=(arr)=>{
    let msf=-10000,meh=0;
    for(let i=0;i<arr.length;i++){
        meh+=arr[i];
        if(meh<arr[i]){
            meh=arr[i];
        }
        if(msf<meh){
            msf=meh;
        }
    }
    return msf;
}
nums=[1,2,3,-2,5]
console.log(kadanes(nums))
/*27. Remove Element 
Difficulty:Easy 
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//using array  methods
 var removeElement = function(arr, val) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === val) {
        arr.splice(i, 1);
        arr.push("_")
      } else {
        ++i;
      }
    }
    console.log(arr)

};
nums = [3,2,2,3]
removeElement(nums,3)

/*
283. Move Zeroes
Easy
Given an integer array nums, move all 0's to the end of it while maintaining the relative order 
of the non-zero elements.
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    nums.forEach((i,index)=>{
        if(i==0){
            nums.splice(index,1);
            nums.push(0);
        }
    })
    return nums
};

nums = [0,1,0,3,12]
console.log(moveZeroes(nums))

/*
268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
Input: nums = [3,0,1]
Output: 2
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let temp = new Array(nums.length+1).fill(-1)
    nums.forEach((item)=>{
            temp[item]=item
    })
    let k=0
     temp.forEach((item,index)=>{
        if(item==-1) k= index;
    })
    return k;
   
};
nums = [3,0,1]
console.log(missingNumber(nums))

/*
1979. Find Greatest Common Divisor of Array

Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
Input: nums = [2,5,6,9,10]
Output: 2
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

 var gcd = function(a,b){
    if (a == 0)
    return b;
    if (b == 0)
    return a;
    if (a == b)
        return a;
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
 }
 var findGCD = function(nums) {
    let mx=Math.max(...nums) ;
    let mn =Math.min(...nums) 
    return gcd(mx,mn)
};

nums = [2,5,6,9,10]
console.log(findGCD(nums))
/* anagram functions */
function areAnagram(s1,s2)
    {
        let n1 = s1.length;
        let n2 = s2.length;
        if (n1 != n2)
            return false;
        s1.sort();
        s2.sort()
        for (let i = 0; i < n1; i++)
            if (s1[i] != s2[i])
                return false;
   
        return true;
    }
    
    let s1=['t', 'e', 's', 't' ];
    let s2=['t', 't', 'e', 'w' ];
     
    console.log(areAnagram(s1, s2));

    /* Next greatest element */
function NGE(arr, n)
{
    var stack = [];
 
    stack.push(arr[0]);
    for (var i = 1; i < n; i++)
    {
 
        if (stack.length == 0) {
            stack.push(arr[i]);
            continue;
        }
        while (stack.length ==0 == false
               && stack[stack.length-1] < arr[i])
        {
            console.log( stack[stack.length-1]
                 + ": " + arr[i]);
            stack.pop();
        }

        stack.push(arr[i]);
    }
    while (stack.length !=0) {
        console.log( stack[stack.length-1] + ": " + -1 );
        stack.pop();
    }
}
var arr = [11, 13, 21, 3];
var n = arr.length;
NGE(arr, n);
       