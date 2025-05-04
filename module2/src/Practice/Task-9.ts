{
  // Task 9: Optional Chaining

  const employee1 = {
    name: "Khandaker Mohyet",
    address: {
      city: "Gazipur",
      zip: "1730"
    }
  };

  const employee2 = {
    name: "Abdullah AL Mohyet"
  };

  const getEmployeeCity = (employee: any): string | undefined => {
    return employee?.address?.city;
  };

  getEmployeeCity(employee1);
  getEmployeeCity(employee2)









}