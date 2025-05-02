{
  // union Types
  {type FrontendDeveloper = "fakibazDeveloper" | "juniourDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";
  type Developer = FrontendDeveloper | FullstackDeveloper;
  const newDeveloper: FrontendDeveloper = "juniourDeveloper";
  type User = {
    name: string,
    email: string,
    gender: "male" | "female",
    bloodGroup: "O+"|"O-"|"B+"
  }

  const user1: User = {
    name: "Khandaker Mohyet",
    email: "mohyet0007@gmail.com",
    gender: "male",
    bloodGroup: "O+"
  }
  }
  
  // inceptors types
  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer"
  }
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer"
  }
  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;
  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["Html", "CSS", "React", 'express'],
    designation1: "Frontend Developer",
    designation2: "Backend Developer"
  }


 


}