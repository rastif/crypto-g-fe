import React from "react";
import { useRouter } from "next/router";
import { Radio, RadioChangeEvent } from "antd";
import stringifyUrl from "utils/stringifyUrl";

const times: string[] = ["1D", "1W", "1M", "1Y"];

const TimeSelector: React.FC = () => {
  const { replace, pathname, query } = useRouter();

  const onChange = (e: RadioChangeEvent) => {
    const newUrl = stringifyUrl(pathname, { ...query, time: e.target.value });
    replace(newUrl);
  };

  return (
    <Radio.Group onChange={onChange} value={query?.time || times[0]}>
      {times.map((time: string) => (
        <Radio.Button value={time}>{time}</Radio.Button>
      ))}
    </Radio.Group>
  );
};

export default TimeSelector;
