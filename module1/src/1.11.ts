{
  // ternary operator | optional chaining | nullish coalescing

  const age: number = 26;
  if (age >= 18) {
    console.log("adult")
  } else {
    console.log("not adult")
  }

  const isAdult = (age >= 18 ? "adult" : "notAdult")
  // console.log({isAdult})

  // nullish coalescing --> null and undefine;

  const isAuthenticated = undefined;
  const result1 = isAuthenticated??"Guests"
  const result2 = isAuthenticated ? isAuthenticated : "Guests"
  console.log({ result1 }, { result2 })
  
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Persian",
    address: {
      city: "ctg",
      road: "Awesome Road",
      presentAddress: "Gazipur",
    },
  };

  const permanentAddress = user.address?.permanentAddress??"no permanentAddress";
  console.log(permanentAddress)

}