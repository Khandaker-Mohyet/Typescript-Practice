{
  // Task 6: Spread and Rest Operators, Destructuring

  const add = (...numbers:number[]):number => {
    const result = numbers.reduce((sum, num) => sum + num, 0)
    return result;
  }
  console.log(add(5,7))
}