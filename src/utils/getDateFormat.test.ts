import getDateFormat from "./getDateFormat";

describe("getDateFormat function", () => {
  test("time input 1D", () => {
    expect(getDateFormat("1D")).toBe("HH:mm");
  });
  test("time input 1W", () => {
    expect(getDateFormat("1W")).toBe("MMM dd");
  });
  test("time input 1M", () => {
    expect(getDateFormat("1M")).toBe("MMM dd");
  });
  test("time input 1Y", () => {
    expect(getDateFormat("1Y")).toBe("MMM yyyy");
  });
});
