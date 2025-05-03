{
  // generic constraint with keyof operator
  
  type Vehicle = {
    bike: string,
    car: string,
    ship: string
  }

  type owner = "bike" | "car" | "ship";
  type owner2 = keyof Vehicle

  
  const getPropertyValue =<X,Y extends keyof X> (obj: X, key: Y) => {
    return obj[key];
  }
  
  const user = {
    name: 'Mohyet',
    age: 26,
    address: "Gazipur"
  }

  const result1 = getPropertyValue(user, "address")
  console.log(result1)












}