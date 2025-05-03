type Union = {
  name: string;
  age: number;
  role: 'admin' | 'user' | 'guest'
}
const newFn = (value:Union) => {
  return value
}

newFn({name: "Khan", age: 20, role: 'admin'})