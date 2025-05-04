{
  // oop- class

  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
    makeSound() {
      // console.log(`The ${this.name} says ${this.sound}`)
    }
  }

  const dog = new Animal("German Shafer", "Dog", "Gaw Gaw");
  const cat = new Animal("Pearshan vai", "Cat", "Meaw Meaw");
  cat.makeSound();
  dog.makeSound()

  {
    // Parameter Properties (use public)

    class Animal {
      // name: string;
      // species: string;
      // sound: string;

      constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
      }
      makeSound() {
        console.log(`The ${this.name} says ${this.sound} from Typescript`)
      }
    }

    const dog = new Animal("German Shafer", "Dog", "Gaw Gaw");
    const cat = new Animal("Pearshan vai", "Cat", "Meaw Meaw");
    cat.makeSound();
    dog.makeSound()















  }













}