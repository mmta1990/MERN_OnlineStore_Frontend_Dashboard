
const persianNumbers = {
  0: '۰',
  1: '۱',
  2: '۲',
  3: '۳',
  4: '۴',
  5: '۵',
  6: '۶',
  7: '۷',
  8: '۸',
  9: '۹'
}
export const toPersianNumber = (value) => {
  return String(value).split('').map((char) => {
    return persianNumbers[char] ? persianNumbers[char] : char
  }).join('')
}
