
// Object distructring

const user = {
  id: 234,
  name:{
    firstName: 'Abdullah',
    middleName: "All",
    lastName: "Mohyet"
  },
  contactNo: "01756432",
  address: "Nothing"
}

const { contactNo, name: { lastName:mainName } } = user;

// array distructring

const friendsName: string[] = ["Imon", "Nirob", "Sohal", "Rana", "Pervage"];
const [, , kala, ...rest] = friendsName;