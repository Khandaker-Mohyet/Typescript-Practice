// Task 5: Function Type

const reverseString = (value:string) => {
  const split = value.split('')
  const reverse = split.reverse()
  const result = reverse.join('')
  console.log(result)
  return result
}

reverseString("hello")

