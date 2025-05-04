{
  // Task 11: Unknown Type
  
  const processData = (data: unknown): unknown => {
    if (typeof data === 'string') {
      return data.toUpperCase()
    } else if (typeof data === 'number') {
      return data * data;
    } else {
      return data;
    }
  }

  processData(9)















}