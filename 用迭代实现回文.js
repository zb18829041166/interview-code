function isPalindrome(str){
    let length=str.length;
    if(length<=1){return true}
    if(str[0]!==str[length-1]){return false}
    return isPalindrome(str.substr(1,length-2))
}

console.log(isPalindrome("aba"));
console.log(isPalindrome("abaa"));


