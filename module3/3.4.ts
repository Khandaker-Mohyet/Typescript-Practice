{
  // interface of gard

  class Animal {
    name: string;
    species: string

    constructor(name: string, species: string) {
      this.name= name;
      this.species = species
    }

    getSound() {
      console.log("This is the big sound")
    }
  }

  class Dog extends Animal{
    constructor(name: string, species: string) {
      super(name, species)
    }

    makeBark() {
      console.log("this is make bark")
    }
  }

  class Cat extends Animal{
    constructor(name: string, species: string) {
      super(name, species)
    }

    makeMeaw() {
      console.log("this is make meaw")
    }
  }

  const isDog = (animal:Animal) => {
    return animal instanceof Dog
  }

  const isCat = (animal:Animal) => {
    return animal instanceof Cat
  }
  
  const getAnimal = (animal:Animal) => {
    if (isDog(animal)) {
      animal.makeBark()
    } else if (isCat(animal)) {
      animal.makeMeaw()
    } else {
      animal.getSound()
    }
  }

  const dog = new Dog("German Shafer", "Dog");
  const cat = new Cat("Batto Okhil", "Cat");

  getAnimal(dog)














}