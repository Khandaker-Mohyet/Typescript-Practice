{
  // sprate Operatore
  // rest Operatore
  // Distructring

  //Learn sprate Operatore

  const bros1:string[] = ["jahid", "Nahid", "Okhil"]
  const bros2:string[] = ["kakon", 'arif', 'simul']
  bros1.push(...bros2)

  const mentor1:string[] =["Akmal", "Mijan", "Zihad"]
  const mentor2: string[] = ["Shiab", "Milon", "Nasir"]
  const AllMentor:string[] = { ...mentor1, ...mentor2 }
  console.log(AllMentor)


  // learn rest opratore
  const greetFriends=(...friends: string[])=>{
    friends.forEach((friend:String)=>console.log(`Hi${friend}`))
  }
  greetFriends("Nahyed", "Chyed", "Pahyed"  )
}