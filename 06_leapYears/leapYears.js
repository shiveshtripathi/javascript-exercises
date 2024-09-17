const { yargsOptions } = require('jest-cli')

const leapYears = function (yearCheckedForLeapYear) {
  if (yearCheckedForLeapYear % 4 === 0 && yearCheckedForLeapYear % 100 !== 0)
    return true
  else if (
    yearCheckedForLeapYear % 100 === 0 &&
    yearCheckedForLeapYear % 400 === 0
  )
    return true
  else return false
}

// Do not edit below this line
module.exports = leapYears
