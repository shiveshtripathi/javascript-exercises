const repeatString = function (greeting = `hey`, times = 3) {
  if (times < 0) return 'ERROR'
  let greetingMsg = ''
  for (i = 0; i < times; i++) {
    greetingMsg = greetingMsg + greeting
  }
  return greetingMsg
}

// Do not edit below this line
module.exports = repeatString
