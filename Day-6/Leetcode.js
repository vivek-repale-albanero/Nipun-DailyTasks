/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let count = 0;
    
    for (let i = s.count - 1; i >= 0; i--) {
       
    }
    
    return count;
};
s = "Hello World"
console.log(lengthOfLastWord(s))

var isPalindrome = function(s) {
    
    s= s.toLowerCase()
    s=s.replace(/[^0-9a-z]/g, "");
    console.log(s)
     let i=0,j=s.length-1;
    while(i<=j){
        if(s[i]!==s[j])
        return false;
        i++;j--;
    }
    return true
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))


var reverseVowels = function(s) {
    let arr = [...s]
    let vowels = 'aeiouAEIOU'
    let i = 0
    let j = arr.length-1
    
    while(i < j) {
        if(vowels.includes(arr[i]) && vowels.includes(arr[j])) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        } else if(vowels.includes(arr[i])) {
            j--
        } else if(vowels.includes(arr[j])) {
            i++
        } else {
            i++
            j--
        }
    }
    
    return arr.join('')
        
    }
console.log(reverseVowels("leetcode"))

var duplicateZeros = function(arr) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++
      arr.pop()
    }
  }
};
arr=[1,0,2,3,0,4,5,0]
console.log(duplicateZeros(arr))