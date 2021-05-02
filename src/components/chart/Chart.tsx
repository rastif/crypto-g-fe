import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { HistoricalRate } from "generated/graphql";
import formatHistoricalDataPoints from "utils/formatHistoricalDataPoints";
import Skeleton from "components/Skeleton";
import ChartTooltip from "./ChartTooltip";

type Props = {
  data?: HistoricalRate[];
  loading: boolean;
};

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  margin: 25px auto;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Chart: React.FC<Props> = ({ data, loading }) => {
  const {
    query: { time },
  } = useRouter();

  const formatedDataPoints = formatHistoricalDataPoints(data, time as string);

  return (
    <Wrapper>
      {loading ? (
        <Skeleton active />
      ) : formatedDataPoints?.length < 1 ? (
        <h1>No historical data...</h1>
      ) : (
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={400}
            data={formatedDataPoints}
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
            }}
          >
            <Line type="monotone" dataKey="price_close" stroke="#8884d8" />
            <XAxis dataKey="time_period_start" />
            <YAxis />
            <Tooltip content={<ChartTooltip />} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Wrapper>
  );
};

export default Chart;
