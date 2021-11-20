export const amountWithDiscount = (amount, percent) => {
  return amount * (1 - (percent / 100))
}
export const calculateDiscountAmount = (amount, percent) => {
  return amount - amountWithDiscount(amount, percent)
}
