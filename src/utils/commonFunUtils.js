export const numFormat = (num) => {
  if (num > 10000) {
    num = Math.round(num / 10000)+ '万'
  }
  console.log(num)
  return num
}