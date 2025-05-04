{
  // oop - Inheritance

  class parents {
    // name: string;
    // age: number;
    // address: string;

    constructor(public name: string, public age: number, public address: string) {
      // this.name = name;
      // this.age = age;
      // this.address = address;
    }
    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep on ${numberOfHours} Hours`)
    }
  }
  
  class student extends parents {
    

    constructor(name: string, age: number, address: string) {
      super(name,age,address)
    }
    
  }

  const student1 = new student('Mohyet', 26, 'kapasia');
  student1.getSleep(7)


  class Teacher extends parents {
    
    // designation: string;

    constructor(name: string, age: number, address: string, public designation: string) {
      super(name,age, address)
      // this.designation= designation;
    }

    getClass(numberOfClass: number) {
      console.log(`${this.name} will get class ${numberOfClass}`)
    }

  }

  const teacher1 = new Teacher('Mohyet', 40, 'kapasia', 'professor');
  teacher1.getClass(5)
  
  
  
  
  
  
}