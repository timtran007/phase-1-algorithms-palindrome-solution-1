function reverse(word){
  // 'abc' => 'cba'
  // const wordArray = word.split("")
  // const reversedWordArray = wordArray.reverse()
  // const reversedWord = reversedWordArray.join("")
  // return reversedWord 
  return word.split('').reverse().join('')
}

function isPalindrome(word) {
  const reversedWord = reverse(word);

  // if the input is the same as the reversed input
  return word === reversedWord
}

/* 
  need to reverse the input string

  if the input is the same as the reversed input 
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("tacocat"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("dog"));
}

module.exports = isPalindrome;
