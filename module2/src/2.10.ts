{
  // mapped type

  const arrayOfNumber: number[] = [1, 2, 3]

  const arrayOfString: string[] = arrayOfNumber.map(numbers => numbers.toString())
  // console.log(arrayOfString)

  type AreaNumber = {
    height: number;
    weight: number;
  }

  type height = AreaNumber['height'] //look up type

  type AreaString<T> = {
    [key in keyof T]: T[key]
  }

  const area1: AreaString<{ height: string; weight: number; }> = {
    height: "100",
    weight: 50,
  }












}