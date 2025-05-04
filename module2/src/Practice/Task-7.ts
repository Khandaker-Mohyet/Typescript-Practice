{
  // Task 7: Type Assertion and Narrowing
  const assertion = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
      return value.length
    } else if (typeof value === 'number') {
      return value*value
    } else {
      return undefined
    }
  }

  const result1 = assertion("100")
  const result2 = assertion(20)







}