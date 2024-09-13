const removeFromArray = function (originalArray, ...args) {
  for (let arg of args) {
    let indexOfElement = originalArray.indexOf(arg)
    let lastIndexOfElement = originalArray.lastIndexOf(arg)
    if (indexOfElement === -1) {
      continue
    } else if (indexOfElement !== lastIndexOfElement) {
      while (indexOfElement !== lastIndexOfElement) {
        originalArray.splice(indexOfElement, 1)
        if (originalArray.includes(arg)) {
          indexOfElement = originalArray.indexOf(arg)
          continue
        }
        indexOfElement = originalArray.indexOf(arg)
        lastIndexOfElement = originalArray.lastIndexOf(arg)
      }
    } else if (indexOfElement === lastIndexOfElement) {
      originalArray.splice(indexOfElement, 1)
    }
  }
  return originalArray
}

// Do not edit below this line
module.exports = removeFromArray
