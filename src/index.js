const OPEN_BRACKETS = ['(', '[', '{', '|', '1', '3', '5', '7', '8']
const BRACKETS_PAIRS = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
}

// const SECOND_SYMBOL_CHECK = ['|', '7', '8']


module.exports = function check(str, bracketsConfig) {
  let stack = []
  for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i]
      if (OPEN_BRACKETS.includes(currentSymbol) && !'|78'.includes(stack[stack.length - 1])) {
          stack.push(currentSymbol)
      } else {
          if (stack.length === 0) {
              return false
          } else {
              let topSymbol = stack[stack.length - 1]
              if (topSymbol === BRACKETS_PAIRS[currentSymbol]) {
                  stack.pop()
              }
          }
      }
  }
  if (stack.length === 0) {
      return true
  } else {
      return false
  }
}
