{
  // interface generic
  interface Developer<T, Y = null>{
    name: string,
    computer:{
      brand: string;
      model: string;
      price: number;
    },
    MobilePhone: T,
    bike?: Y
  }

  type Redmi = {
    brand: string;
    model: string;
    color: string;
  }

  
  const poorDeveloper: Developer<Redmi> = {
    name: "Khandaker Mohyet",
    computer:{
      brand: "HP",
      model: "Z-Book 14u G5",
      price: 70000,
    },
    MobilePhone: {
      brand: "Redmi",
      model: "note 8",
      color: "blue"
    }
  }

  interface Apple {
    brand: string;
    model: string;
    bestCamera: boolean;
  }
  
  interface Bike {
    barnd: string;
    model: string;
    price: number;
  }

  const richDeveloper: Developer<Apple, Bike> = {
    name: "K. Abdullah Al Mohyet",
    computer:{
      brand: "Mack Book",
      model: "M4 air",
      price: 150000,
    },
    MobilePhone: {
      brand: "Apple",
      model: "15 pro",
      bestCamera: true 
    },
    bike: {
      barnd: "Yeamaha",
      model: "R15 V3",
      price: 430000
    }
  }


}