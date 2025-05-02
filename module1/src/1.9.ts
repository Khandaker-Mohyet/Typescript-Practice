// Type Alice
type Student= {
  fullName: string;
  rollNo: number;
  contactNo?: string;
  address: string;
  isAdmin: boolean;
}
const student1: Student = {
  fullName: "Khandaker Mohyet",
  rollNo: 540,
  contactNo: "01568132918",
  address: "Gazipur",
  isAdmin: true,
}
const student2: Student = {
  fullName: "Abdullah Al Mohyet",
  rollNo: 550,
  contactNo: "01700592546",
  address: "Gazipur",
  isAdmin: false,
}
const student3: Student = {
  fullName: "Abdullah Al Mohyet",
  rollNo: 550,
  address: "Gazipur",
  isAdmin: false,
}
// function type alice
type Add=(num1:number, num2:number)=> number
const add:Add = (num1, num2) => num1 + num2;