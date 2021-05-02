import React, { useMemo } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { gql } from "@apollo/client";
import { useHistoricalRatesQuery } from "generated/graphql";
import Chart from "components/chart/Chart";
import ChartFilter from "components/chart/filter/Filter";
import getPastDateParams from "utils/getPastDateParams";

const ERR_MSG = "something went wrong... try again later or contact us";
const SELECT_CURRENCY_MSG = "Select a currency to see a historical graph";

const HISTORICAL_RATES_QUERY = gql`
  query HistoricalRates(
    $asset_id_base: String!
    $asset_id_quote: String!
    $period_id: String!
    $time_start: String!
    $time_end: String
  ) {
    historicalRates(
      asset_id_base: $asset_id_base
      asset_id_quote: $asset_id_quote
      period_id: $period_id
      time_start: $time_start
      time_end: $time_end
    ) {
      time_period_start
      price_close
      price_high
      price_low
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
      asset_id_base: asset as string,
      asset_id_quote: "USD",
      period_id: date.period_id,
      time_start: date.time_start,
    },
  });

  return (
    <>
      <ChartFilter />
      {asset && !error ? (
        <Chart data={data?.historicalRates} loading={loading} />
      ) : (
        <H1>{error ? ERR_MSG : SELECT_CURRENCY_MSG}</H1>
      )}
    </>
  );
};

export default History;
