import addYears from "date-fns/addYears";
import addMonths from "date-fns/addMonths";
import addWeeks from "date-fns/addWeeks";
import addDays from "date-fns/addDays";

const getPastDateParams = (time: string) => {
  switch (time) {
    case "1Y":
      return {
        time_start: addYears(new Date(), -1).toISOString(),
        period_id: "1MTH",
      };
    case "1M":
      return {
        time_start: addMonths(new Date(), -1).toISOString(),
        period_id: "1DAY",
      };
    case "1W":
      return {
        time_start: addWeeks(new Date(), -1).toISOString(),
        period_id: "1DAY",
      };
    case "1D":
    default:
      return {
        time_start: addDays(new Date(), -1).toISOString(),
        period_id: "1HRS",
      };
  }
};

export default getPastDateParams;
