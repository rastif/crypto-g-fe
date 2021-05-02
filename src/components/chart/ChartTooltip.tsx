import React from "react";
import styled from "styled-components";
import format from "date-fns/format";

const Wrapper = styled.div`
  background: white;
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 10px;
  font-size: 10px;
`;

const ChartTooltip: React.FC = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const {
      time_period_start,
      price_close,
      price_high,
      price_low,
    } = payload[0].payload;
    return (
      <Wrapper>
        <p>
          <b>Time:</b> {time_period_start}
        </p>
        <p>
          <b>Price closed:</b> {price_close}
        </p>
        <p>
          <b>Price high:</b> {price_high}
        </p>
        <p>
          <b>Price low:</b> {price_low}
        </p>
      </Wrapper>
    );
  }

  return null;
};

export default ChartTooltip;
