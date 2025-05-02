{

  // type assertion

  let anything: any;
  anything = "This is Khandaker Mohyet";
  anything = 222;

  // (anything as number).

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
      const convertedValue = parseFloat(value) * 1000;
      return `The convertedValue is ${convertedValue}`
    } else if (typeof value === "number") {
      return value * 1000;
    }
  }

  const result1 = kgToGram("100") as string
  const result2 = kgToGram(1000) as number


  type CustomError = {
    message: string
  }

  try {

  } catch (error) {
    console.log((error as CustomError).message)
  }


}