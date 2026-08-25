import { expect } from "@open-wc/testing";
import { interpolate } from "../util/i18n.js";
import { convertTime, getDateDifference, readStation } from "../util/util.js";

describe("util/interpolate", () => {
  it("substitutes placeholders", () => {
    expect(
      interpolate("Departs from {station} at {time}", {
        station: "S E A",
        time: "12:30 AM",
      }),
    ).to.equal("Departs from S E A at 12:30 AM");
  });

  it("returns empty string for null template", () => {
    expect(interpolate(null, {})).to.equal("");
  });

  it("returns empty string for undefined template", () => {
    expect(interpolate(undefined, {})).to.equal("");
  });

  it("returns empty string for empty string template", () => {
    expect(interpolate("", {})).to.equal("");
  });
});

describe("util/readStation", () => {
  it("letter-spaces a normal station code", () => {
    expect(readStation("SEA")).to.equal("S E A");
  });

  it("returns empty string for undefined", () => {
    expect(readStation(undefined)).to.equal("");
  });

  it("returns empty string for null", () => {
    expect(readStation(null)).to.equal("");
  });

  it("returns empty string for empty string", () => {
    expect(readStation("")).to.equal("");
  });
});

describe("util/getDateDifference", () => {
  it("returns 0 for same-day flights", () => {
    expect(
      getDateDifference(
        "2022-05-04T00:30:00-07:00",
        "2022-05-04T11:55:00-04:00",
      ),
    ).to.equal(0);
  });

  it("returns 0 for undefined departureTime", () => {
    expect(getDateDifference(undefined, "2022-05-04T11:55:00-04:00")).to.equal(
      0,
    );
  });

  it("returns 0 for undefined arrivalTime", () => {
    expect(getDateDifference("2022-05-04T00:30:00-07:00", undefined)).to.equal(
      0,
    );
  });

  it("returns 0 for both undefined", () => {
    expect(getDateDifference(undefined, undefined)).to.equal(0);
  });

  it("handles UTC Z-suffix timestamps for same-day flight", () => {
    expect(
      getDateDifference("2022-05-04T00:30:00Z", "2022-05-04T11:55:00Z"),
    ).to.equal(0);
  });

  it("handles UTC Z-suffix timestamps for next-day flight", () => {
    expect(
      getDateDifference("2022-05-04T22:00:00Z", "2022-05-05T06:00:00Z"),
    ).to.equal(1);
  });
});

describe("util/convertTime", () => {
  it("formats a valid ISO 8601 time string", () => {
    expect(convertTime("2022-05-04T00:30:00-07:00")).to.equal("12:30 AM");
  });

  it("returns empty string for undefined", () => {
    expect(convertTime(undefined)).to.equal("");
  });

  it("returns empty string for null", () => {
    expect(convertTime(null)).to.equal("");
  });

  it("returns empty string for empty string", () => {
    expect(convertTime("")).to.equal("");
  });

  it("handles UTC Z-suffix timestamps", () => {
    expect(convertTime("2022-05-04T12:30:00Z")).to.equal("12:30 PM");
  });

  it("returns empty string for an invalid date string", () => {
    expect(convertTime("not-a-date")).to.equal("");
  });
});
