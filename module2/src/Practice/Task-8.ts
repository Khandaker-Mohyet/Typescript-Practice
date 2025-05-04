{

  // Task 8: Intersection Types
  
  type User = {
    name: string;
    email: string;
  }

  type Admin = {
    adminLevel: string
  }

  type AdminUser = User & Admin;

  const describeAdmin=(user: AdminUser): string => {
    return `${user.name} (${user.email}) is an admin with level ${user.adminLevel}.`;
  }













}