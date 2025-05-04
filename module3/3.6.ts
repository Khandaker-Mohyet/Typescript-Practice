{
  // getter and setter

  class BankAccount {
    id: number;
    name: string;
    protected balance: number;  //private not look child property

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    set deposit(amount: number) {
      this.balance = this.Balance + amount;
    }

    // addDeposit(amount: number) {
    //   return this.balance= this.balance+amount
    // }

    get Balance() {
      return this.balance
    }

  }

  const normal = new BankAccount(121, "Mohyet", 1500)
  // const Balance = normal.addDeposit(12000)
  normal.deposit = 12000
  const myBalance = normal.Balance
  console.log(myBalance)



}