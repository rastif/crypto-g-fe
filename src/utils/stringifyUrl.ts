import qs from "qs";

const stringifyUrl = (
  base: string,
  query: { [key: string]: string | undefined }
) => {
  const queryString = qs.stringify(query, { addQueryPrefix: true });
  return `${base}${queryString}`;
};

export default stringifyUrl;
