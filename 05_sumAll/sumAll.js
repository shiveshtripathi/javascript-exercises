const sumAll = function (firstNumber, secondNumber) {
  if (
    Number.isInteger(firstNumber) &&
    Number.isInteger(secondNumber) &&
    firstNumber > 0 &&
    secondNumber > 0
  ) {
    if (firstNumber > secondNumber)
      return (
        (firstNumber * (firstNumber + 1)) / 2 -
        (secondNumber * (secondNumber + 1)) / 2 +
        secondNumber
      )
    else
      return (
        (secondNumber * (secondNumber + 1)) / 2 -
        (firstNumber * (firstNumber + 1)) / 2 +
        firstNumber
      )
  } else return `ERROR`
}

// Do not edit below this line
module.exports = sumAll
