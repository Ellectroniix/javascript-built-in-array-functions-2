function isPalindrome(string) {
  // Start coding here
  const arrConvert = string.split("");
  const textReverse = arrConvert.reverse().join("");
  if(textReverse===string){
    return true;
  }else{
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false