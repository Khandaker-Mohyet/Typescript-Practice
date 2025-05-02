{
  // normal function
  function add(num1: number, num2: number) {
    return num1 + num2;
  }
  add(2, 5)
  // ary function
  const addAro = (num1: number, num2: number): number => num1 + num2;
  addAro(5, 6)
  // object--> function--> method
  const poorUser = {
    name: "Mohyet",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is: ${this.balance + balance}`;
    }
  }
  const arr: number[] = [1, 3, 5]
  const newArr: number[] = arr.map((e: number): number => e * e)

}