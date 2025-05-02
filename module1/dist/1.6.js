"use strict";
{
    // normal function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 5);
    // ary function
    const addAro = (num1, num2) => num1 + num2;
    addAro(5, 6);
    // object--> function--> method
    const poorUser = {
        name: "Mohyet",
        balance: 0,
        addBalance(balance) {
            return `My new balance is: ${this.balance + balance}`;
        }
    };
    const arr = [1, 3, 5];
    const newArr = arr.map((e) => e * e);
}
