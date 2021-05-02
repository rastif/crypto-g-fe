import React from "react";
import Card from "components/Card";
import Link from "components/Link";
import BtcSvg from "assets/icons/btc.svg";
import EthSvg from "assets/icons/eth.svg";
import XrpSvg from "assets/icons/xrp.svg";

type Props = {
  asset_id_base: string;
  rate: number;
};

const getIconByName = (asset: string) => {
  switch (asset) {
    case "BTC":
      return <BtcSvg />;
    case "ETH":
      return <EthSvg />;
    case "XRP":
      return <XrpSvg />;
    default:
      return null;
  }
};

const PopularRateCard: React.FC<Props> = ({ asset_id_base: asset, rate }) => {
  return (
    <Card>
      {getIconByName(asset)}
      <span>{asset}</span>
      <span>${rate}</span>
      <Link
        href={{
          pathname: "/history",
          query: { asset },
        }}
      >
        See History
      </Link>
    </Card>
  );
};
export default PopularRateCard;
