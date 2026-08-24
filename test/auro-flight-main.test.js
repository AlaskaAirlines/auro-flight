import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

describe("auro-flight-main", () => {
  it("auro-flight-main is accessible", async () => {
    const el = await fixture(html`
      <auro-flight-main departureStation="SEA" departureTime="2022-05-04T00:30:00-07:00" arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"></auro-flight-main>
    `);

    await expect(el).to.be.accessible();
  });

  it("auro-flight-main fills in information as expected", async () => {
    const el = await fixture(html`
      <auro-flight-main departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA" arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD" reroutedArrivalStation="SFO" reroutedDepartureStation="LAX"></auro-flight-main>
    `);

    await expect(
      el.shadowRoot
        .querySelector(".departureTime")
        .querySelector("[auro-datetime]")
        .getAttribute("value"),
    ).to.equal("2022-05-04T00:30:00-07:00");
    await expect(
      el.shadowRoot
        .querySelector(".arrivalTime")
        .querySelector("[auro-datetime]")
        .getAttribute("value"),
    ).to.equal("2022-05-04T11:55:00-04:00");
    await expect(
      el.shadowRoot.querySelector(".departureStation").textContent.trim(),
    ).to.contain("SEA");
    await expect(
      el.shadowRoot.querySelector(".arrivalStation").textContent.trim(),
    ).to.contain("PVD");
  });

  it("auro-flight-main custom element is defined", async () => {
    const el = await Boolean(customElements.get("auro-flight-main"));

    await expect(el).to.be.true;
  });

  it("auro flight with a departure reroute shows visual strikethrough", async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00"
        arrivalStation="PVD"
        reroutedDepartureStation="LAX">
      </auro-flight-main>
    `);

    const departureRerouteSpan = el.shadowRoot.querySelector(
      ".departureStation .util_lineThrough",
    );
    const arrivalRerouteSpan = el.shadowRoot.querySelector(
      ".arrivalStation .util_lineThrough",
    );

    await expect(arrivalRerouteSpan).to.be.null;
    await expect(departureRerouteSpan.textContent.includes("SEA")).is.true;
  });

  it("auro flight with an arrival reroute shows visual strikethrough", async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00"
        arrivalStation="PVD"
        reroutedArrivalStation="SFO">
      </auro-flight-main>
    `);

    const departureRerouteSpan = el.shadowRoot.querySelector(
      ".departureStation .util_lineThrough",
    );
    const arrivalRerouteSpan = el.shadowRoot.querySelector(
      ".arrivalStation .util_lineThrough",
    );

    await expect(arrivalRerouteSpan.textContent.includes("PVD")).is.true;
    await expect(departureRerouteSpan).to.be.null;
  });

  it("auro flight with both reroutes shows visual strikethroughs", async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00"
        arrivalStation="PVD"
        reroutedArrivalStation="SFO"
        reroutedDepartureStation="LAX">
      </auro-flight-main>
    `);

    const departureRerouteSpan = el.shadowRoot.querySelector(
      ".departureStation .util_lineThrough",
    );
    const arrivalRerouteSpan = el.shadowRoot.querySelector(
      ".arrivalStation .util_lineThrough",
    );

    await expect(arrivalRerouteSpan.textContent.includes("PVD")).is.true;
    await expect(departureRerouteSpan.textContent.includes("SEA")).is.true;
  });
});
