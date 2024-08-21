const reverseString = function (inputString = 'hello there') {
  let reversedString = ``
  for (i = inputString.length - 1; i >= 0; i--)
    reversedString = reversedString + inputString[i]
  return reversedString
}

// Do not edit below this line
module.exports = reverseString
