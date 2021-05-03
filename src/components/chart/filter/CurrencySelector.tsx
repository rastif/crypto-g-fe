import React from "react";
import { useRouter } from "next/router";
import { Select, Skeleton } from "antd";
import { gql } from "@apollo/client";
import { useAssetsQuery, Asset } from "generated/graphql";
import stringifyUrl from "utils/stringifyUrl";

const { Option } = Select;

const ASSETS_QUERY = gql`
  query Assets {
    assets {
      asset_id
      name
    }
  }
`;

const CurrencySelector: React.FC = () => {
  const { replace, pathname, query } = useRouter();
  const { data, loading, error } = useAssetsQuery();

  const onChange = (val: string) => {
    const newUrl = stringifyUrl(pathname, { ...query, asset: val });
    replace(newUrl);
  };

  if (loading) return <Skeleton.Input style={{ width: 200 }} active />;

  return (
    <Select
      value={(query?.asset as string) || undefined}
      style={{ width: "200px" }}
      showSearch
      placeholder="Select a currency"
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option: any) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {data?.assets?.map(({ asset_id, name }: Asset) => (
        <Option value={asset_id}>{name}</Option>
      ))}
    </Select>
  );
};

export default CurrencySelector;
