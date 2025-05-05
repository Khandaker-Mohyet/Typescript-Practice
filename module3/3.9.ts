{
  // abstraction : 1.interface : 2.abstract class

  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move():void
  }

  // real implementation

  class Car1 implements Vehicle1 {
    startEngine(): void{
      console.log(`I am starting the care engine`)
    }
    stopEngine(): void{
      console.log(`I am stop the care engine`)
    }
    move(): void{
      console.log(`I am move the care engine`)
    }
    test(): void{
      console.log(`I am just testing`)
    }
  }

  const toyotaCar = new Car1()
  toyotaCar.test()


  // abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car  engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving  the car");
    }
  }

  //  const hondaCar = new Car2();
  //  hondaCar.startEngine();









}