import React from "react";
import styled from "styled-components";
import { gql } from "@apollo/client";
import { usePopularRatesQuery, Rate } from "generated/graphql";
import PopularRateCard from "./PopularRateCard";
import PopularRateCardSkeleton from "./PopularRateCardSkeleton";

const POPULAR_RATES_QUERY = gql`
  query PopularRates {
    popularRates {
      asset_id_base
      rate
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const PopularRates: React.FC = () => {
  const { data, loading, error } = usePopularRatesQuery({
    pollInterval: 5000,
  });

  return (
    <Wrapper>
      {loading ? (
        <PopularRateCardSkeleton />
      ) : (
        data?.popularRates?.map((data: Rate) => <PopularRateCard {...data} />)
      )}
    </Wrapper>
  );
};

export default PopularRates;
