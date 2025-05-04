{
  // access modifiers

  class BankAccount {
    id: number;
    name: string;
    protected balance: number;  //private not look child property

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    addDeposit(amount: number) {
      return this.balance= this.balance+amount
    }
  }

  const normal = new BankAccount(121, "Mohyet", 1500)
  const Balance = normal.addDeposit(12000)

  console.log(Balance)



}