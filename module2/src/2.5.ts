{
  // function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGenerics =<T> (param: T): T[] => {
    return [param];
  };
  
  const result1= createArray("Bangladesh")
  const result2 = createArrayWithGenerics<number>(512)
  
  type User = { id: number; name: string; }
  const result3 = createArrayWithGenerics<User>({ id: 123, name: "Mohyet" })
  

  

  const createArrayWithTuple =<T,Q> (param1: T, param2:Q): [T, Q] => {
    return [param1, param2];
  };
  
  const result21 = createArrayWithTuple<number, string>(512,"Bangladesh")
  const result22 = createArrayWithTuple<string,{name:string} >("Bangladesh",{name: "Mohyet"})
  

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });



}