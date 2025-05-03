{
  // promise

  // simulate

   type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async ():Promise<Todo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()
    return data;
    // console.log(data)
  }
  getToDo()

  type something = {something: string}

  const createPromise = ():Promise<something> => {
    return new Promise<something>((resolved, reject) => {
      const data: something = {something: "something"}
      if (data) {
        resolved (data)
      } else {
        reject ("failed to load data")
      }
    })
  }

  
  const showData = async ():Promise<something> => {
    const data: something = await createPromise()
    return data
    // console.log(data)
  }
  showData()














}