import format from "date-fns/format";
import { HistoricalRate } from "generated/graphql";
import getDateFormat from "./getDateFormat";

const formatHistoricalDataPoints = (data: HistoricalRate[], time: string) =>
  data?.map(({ time_period_start, ...rest }) => ({
    ...rest,
    time_period_start: format(
      new Date(time_period_start),
      getDateFormat(time as string)
    ),
  }));

export default formatHistoricalDataPoints;
