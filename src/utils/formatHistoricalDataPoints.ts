import format from "date-fns/format";
import { HistoricalRate } from "generated/graphql";
import getDateFormat from "./getDateFormat";

const formatHistoricalDataPoints = ({
  data,
  time,
}: {
  data?: HistoricalRate[];
  time?: string | string[];
}) =>
  data?.map(({ time_period_start, ...rest }) => ({
    ...rest,
    time_period_start: format(new Date(time_period_start), getDateFormat(time)),
  }));

export default formatHistoricalDataPoints;
