{

  const getDisplayName = (name: string | null | undefined): string => {
    if (name === null || name === undefined) {
      return "Anonymous";
    } else {
      return name;
    }
  }

  getDisplayName(null)




}