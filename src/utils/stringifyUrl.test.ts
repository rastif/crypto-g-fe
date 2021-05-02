import stringifyUrl from "./stringifyUrl";

describe("stringifyUrl function", () => {
  test("empty query obj", () => {
    expect(stringifyUrl("/history", {})).toBe("/history");
  });

  test("invalid query param", () => {
    expect(stringifyUrl("/history", { asset: undefined })).toBe("/history");
  });

  test("valid query param", () => {
    expect(stringifyUrl("/history", { asset: "BTC" })).toBe(
      "/history?asset=BTC"
    );
  });

  test("valid query params", () => {
    expect(stringifyUrl("/history", { asset: "BTC", time: "1Y" })).toBe(
      "/history?asset=BTC&time=1Y"
    );
  });
});
