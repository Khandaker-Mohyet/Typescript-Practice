{
  // generic type
  type GenericArray<T> = Array<T>

  // const rollNumbers: number[] = [3, 6, 8];
  const rollNumbers: GenericArray<number> = [3, 6, 8];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user:GenericArray<{name:string, age:number}>  = [
    {
      name: "Khandaker Mohyet",
      age: 26
    },
    {
      name: "akrma",
      age: 27
    }
  ]

  // generic tuple
  type GenericTuple<X, Y> = [X, Y]
  const mean: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"]
  const userWithId:GenericTuple<number, {name: string, email: string}> = [
    1234,
    { name: "persian", email: "a@gmail.com" },
  ];
}