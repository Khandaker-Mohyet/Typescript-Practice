
{
  // object
  type User1 = {
    name: string;
    age: number;
  };

  interface User2{
    name: string;
    age: number;
  }

  type UserWithRole = User1 & { role: string }
  interface UserWithRole1 extends User1 {
    role: string
  }

  const user1:UserWithRole1 = {
    name: "Persian",
    age: 100,
    role: "manager",
  };

  // array
   
  type Role1 = number[]
  interface Role2{
    [index: number]: number;
  }


  const roleNumber: Role1 = [1, 2, 3]

  // function

   type Add1 = (num1: number,num2:number)=> number
  
  interface Add2 {
    (num1:number,num2:number):number
  }

  const add: Add2 = (num1 , num2 )=> num1+num2




}