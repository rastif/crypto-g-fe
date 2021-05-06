import React, { useMemo } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { gql } from "@apollo/client";
import { useHistoricalRatesQuery, HistoricalRate } from "generated/graphql";
import Chart from "components/chart/Chart";
import ChartFilter from "components/chart/filter/Filter";
import getPastDateParams from "utils/getPastDateParams";

const ERR_MSG = "something went wrong... try again later or contact us";
const SELECT_CURRENCY_MSG = "Select a currency to see a historical graph";

const HISTORICAL_RATES_QUERY = gql`
  query HistoricalRates(
    $asset_id_base: String!
    $granularity: Int!
    $time_start: String!
    $time_end: String!
  ) {
    historicalRates(
      asset_id_base: $asset_id_base
      granularity: $granularity
      time_start: $time_start
      time_end: $time_end
    ) {
      time
      price_low
      price_high
      price_open
      price_close
    }
  }
`;

const H1 = styled.h1`
  margin: 75px auto;
  text-align: center;
`;

const History: React.FC = () => {
  const {
    query: { asset, time },
  } = useRouter();

  const date = useMemo(() => getPastDateParams(time as string), [time]);

  const { data, loading, error } = useHistoricalRatesQuery({
    skip: !asset,
    variables: {
      asset_id_base: `${asset}-USD`,
      granularity: date.granularity,
      time_start: date.time_start,
      time_end: date.time_end,
    },
  });

  return (
    <>
      <ChartFilter />
      {asset && !error ? (
        <Chart
          data={data?.historicalRates as HistoricalRate[]}
          loading={loading}
        />
      ) : (
        <H1>{error ? ERR_MSG : SELECT_CURRENCY_MSG}</H1>
      )}
    </>
  );
};

export default History;
