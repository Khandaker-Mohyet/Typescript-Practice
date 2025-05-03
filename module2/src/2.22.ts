{
  // utility type

  // pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  }

  type NameAge = Pick<Person, "name" | "age">
  
  // omit

  type ContactInfo = Omit<Person, "name" | "age">


  // Require
  type PersonRequire = Required<Person>

  // Partial
  type PersonPartial = Partial<Person>

  // Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr. XY",
    age: 200,
    contactNo: "017",
  };
  person1.name = "Mr. YZ";

  // Record

  const EmptyObj: Record<string, unknown> = {};








}