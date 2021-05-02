const getDateFormat = (time: string) => {
  switch (time) {
    case "1Y":
      return "MMM yyyy";
    case "1M":
    case "1W":
      return "MMM dd";
    case "1D":
    default:
      return "HH:mm";
  }
};

export default getDateFormat;
