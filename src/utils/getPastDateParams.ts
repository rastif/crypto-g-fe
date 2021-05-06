import addYears from "date-fns/addYears";
import addMonths from "date-fns/addMonths";
import addWeeks from "date-fns/addWeeks";
import addDays from "date-fns/addDays";

const getPastDateParams = (time: string) => {
  const timeStamp = new Date();
  switch (time) {
    case "1Y":
      return {
        time_start: addYears(timeStamp, -1).toISOString(),
        time_end: timeStamp.toISOString(),
        granularity: 86400,
      };
    case "1M":
      return {
        time_start: addMonths(timeStamp, -1).toISOString(),
        time_end: timeStamp.toISOString(),
        granularity: 86400,
      };
    case "1W":
      return {
        time_start: addWeeks(timeStamp, -1).toISOString(),
        time_end: timeStamp.toISOString(),
        granularity: 86400,
      };
    case "1D":
    default:
      return {
        time_start: addDays(timeStamp, -1).toISOString(),
        time_end: timeStamp.toISOString(),
        granularity: 3600,
      };
  }
};

export default getPastDateParams;
