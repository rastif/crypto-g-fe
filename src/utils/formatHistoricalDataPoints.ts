import format from "date-fns/format";
import { HistoricalRate } from "generated/graphql";
import getDateFormat from "./getDateFormat";

const formatHistoricalDataPoints = ({
  data,
  intervall,
}: {
  data?: HistoricalRate[];
  intervall?: string | string[];
}) =>
  data?.map(({ time, ...rest }) => ({
    ...rest,
    time: format(new Date(time * 1000), getDateFormat(intervall)),
  }));

export default formatHistoricalDataPoints;
