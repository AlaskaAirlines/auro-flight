import { expect, fixture, html } from "@open-wc/testing";
import "../src/registered";

// Helper: get the aria-label from the sr span in auro-flight's shadow DOM
const getAriaLabel = (el) =>
  el.shadowRoot.querySelector(".sr-label").getAttribute("aria-label");

describe("auro-flight", () => {
  it("auro-flight is accessible", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 8"]'
        duration="500"
        departureTime="2022-04-13T01:10:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-04-13T12:30:00-04:00"
        arrivalStation="EWR">
      </auro-flight>
    `);
    await expect(el).to.be.accessible();
  });

  it("auro-flight custom element is defined", async () => {
    await expect(Boolean(customElements.get("auro-flight"))).to.be.true;
  });

  it("flight time is correctly converted", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 8"]'
        duration="500"
        departureTime="2022-04-13T01:10:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-04-13T12:30:00-04:00"
        arrivalStation="EWR">
      </auro-flight>
    `);
    await expect(
      el.shadowRoot
        .querySelector("auro-flight-header")
        .getAttribute("duration"),
    ).to.equal("8h 20m");
  });

  it("passes empty string to header when duration is not set (no NaNh in visual)", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]'
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
      </auro-flight>
    `);
    const headerDuration = el.shadowRoot
      .querySelector("auro-flight-header")
      .getAttribute("duration");
    await expect(headerDuration).to.not.include("NaN");
    await expect(headerDuration).to.equal("");
  });

  it("omits duration from aria-label when duration is not set", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]'
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.not.include("NaN");
    await expect(label).to.include("S E A");
  });

  it("flight number spaces do not produce triple-spaces in aria-label", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.include("A S 1 4 3 6");
    await expect(label).to.not.include("   ");
  });

  it("section has a non-empty aria-label", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
      </auro-flight>
    `);
    await expect(getAriaLabel(el)).to.be.a("string").with.length.above(0);
  });

  it("nonstop flight aria-label contains departure, arrival, nonstop, duration", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.include("S E A");
    await expect(label).to.include("P V D");
    await expect(label).to.include("12:30 AM");
    await expect(label).to.include("11:55 AM");
    await expect(label).to.include("nonstop");
    await expect(label).to.include("2h 41m");
  });

  it("next day arrival includes 'next day'", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-05T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    await expect(getAriaLabel(el)).to.include("next day");
  });

  it("multi-day arrival includes days later count", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-06T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    await expect(getAriaLabel(el)).to.include("2 days later");
  });

  it("stopover flight aria-label contains stop info", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 374"]' duration="120"
        departureTime="2022-05-04T01:55:00-09:00" departureStation="ANC"
        arrivalTime="2022-05-04T03:55:00-09:00" arrivalStation="ADK"
        stops='[{ "isStopover": true, "arrivalStation": "CDB" }]'>
        <auro-flightline>
          <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
        </auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.include("C D B");
    await expect(label).to.include("with a stop in");
  });

  it("layover flight aria-label contains layover info with duration", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 161"]' duration="704"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"
        stops='[{ "isStopover": false, "arrivalStation": "SFO", "duration": "1hr 42m" }]'>
        <auro-flightline>
          <auro-flight-segment iata="SFO" duration="1hr 42m"></auro-flight-segment>
        </auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.include("with a layover in S F O");
    await expect(label).to.include("1hr 42m");
  });

  it("multi-stop aria-label contains all stops with 'and' before last", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 65"]' duration="353"
        departureTime="2022-05-04T00:00:00-09:00" departureStation="KTN"
        arrivalTime="2022-05-04T05:53:00-09:00" arrivalStation="ANC"
        stops='[{ "isStopover": true, "arrivalStation": "WRG" }, { "isStopover": true, "arrivalStation": "JNU" }]'>
        <auro-flightline>
          <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
          <auro-flight-segment stopover iata="JNU"></auro-flight-segment>
        </auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.include("W R G");
    await expect(label).to.include("and with a stop in J N U");
  });

  it("departure reroute aria-label contains reroute announcement", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 8"]' duration="330"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"
        reroutedDepartureStation="LAX">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.include("has been re-routed");
    await expect(label).to.include("L A X");
  });

  it("arrival reroute aria-label contains new arrival station", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 8"]' duration="330"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"
        reroutedArrivalStation="SFO">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.include("has been re-routed");
    await expect(label).to.include("S F O");
  });

  it("multiple flights uses 'Multiple flights' prefix", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 161", "AA 2269"]' duration="704"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    await expect(getAriaLabel(el)).to.include("Multiple flights");
  });

  it("aria-label attribute overrides _buildAriaLabel()", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"
        aria-label="custom label">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    await expect(getAriaLabel(el)).to.equal("custom label");
  });

  it("dynamically setting aria-label updates sr-label span immediately", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    await expect(getAriaLabel(el)).to.include("Departs from");

    el.setAttribute("aria-label", "updated label");
    await new Promise((resolve) => setTimeout(resolve, 0));
    await el.updateComplete;
    await expect(getAriaLabel(el)).to.equal("updated label");
  });

  it("exact-hour duration has no trailing space in aria-label", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="120"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T02:30:00-07:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.include("2h");
    await expect(label).to.not.match(/2h\s,/);
  });

  it("nonstop flight with canceled flightline announces 'canceled'", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline canceled></auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.include("nonstop");
    await expect(label).to.include("canceled");
  });

  it("dynamically toggling canceled on flightline updates aria-label", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    const flightline = el.querySelector("auro-flightline");
    await expect(getAriaLabel(el)).to.not.include("canceled");

    flightline.setAttribute("canceled", "");
    await new Promise((resolve) => setTimeout(resolve, 0));
    await el.updateComplete;
    await expect(getAriaLabel(el)).to.include("canceled");

    flightline.removeAttribute("canceled");
    await new Promise((resolve) => setTimeout(resolve, 0));
    await el.updateComplete;
    await expect(getAriaLabel(el)).to.not.include("canceled");
  });

  it("canceled stop segment announces 'canceled' for that stop", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 161"]' duration="704"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"
        stops='[{ "isStopover": false, "arrivalStation": "SFO", "duration": "1hr 42m", "canceled": true }]'>
        <auro-flightline>
          <auro-flight-segment iata="SFO" duration="1hr 42m" canceled></auro-flight-segment>
        </auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.include("S F O");
    await expect(label).to.include("canceled");
  });

  it("flights=null does not throw and produces no flight prefix", async () => {
    const el = await fixture(html`
      <auro-flight
        duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    el.flights = null;
    await el.updateComplete;
    const label = getAriaLabel(el);
    await expect(label).to.not.include("Flight");
    await expect(label).to.include("S E A");
  });

  it("empty stops array is treated as nonstop", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"
        stops='[]'>
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    await expect(getAriaLabel(el)).to.include("nonstop");
  });

  it("zero flights aria-label has no flight-number prefix", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='[]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    const label = getAriaLabel(el);
    await expect(label).to.not.include("Flight");
    await expect(label).to.not.include("Multiple");
    await expect(label).to.include("S E A");
  });

  it("removing an i18n-* attribute restores the English default", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"
        i18n-departure="Sale de {station} a las {time}">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    await expect(getAriaLabel(el)).to.include("Sale de");

    el.removeAttribute("i18n-departure");
    await el.updateComplete;
    await expect(getAriaLabel(el)).to.include("Departs from");
    await expect(getAriaLabel(el)).to.not.include("NaN");
    await expect(getAriaLabel(el)).to.not.include("undefined");
  });

  it("observers reconnect after element is moved in the DOM", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);

    // Simulate moving the element — remove from DOM then reattach
    const parent = el.parentNode;
    parent.removeChild(el);
    parent.appendChild(el);
    await el.updateComplete;

    // aria-label observer should be live again after reconnect
    el.setAttribute("aria-label", "reconnected label");
    await new Promise((resolve) => setTimeout(resolve, 0));
    await el.updateComplete;
    await expect(getAriaLabel(el)).to.equal("reconnected label");
  });

  it("consuming aria-label removes the attribute from the host element", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"
        aria-label="custom label">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    await expect(el.hasAttribute("aria-label")).to.be.false;
    await expect(getAriaLabel(el)).to.equal("custom label");
  });

  it("i18n-nonstop attribute changes nonstop text in aria-label", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"
        i18n-nonstop="sin escalas">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    await expect(getAriaLabel(el)).to.include("sin escalas");
    await expect(getAriaLabel(el)).to.not.include("nonstop");
  });

  it("dynamically added flightline gets aria-hidden", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD">
      </auro-flight>
    `);
    const flightline = document.createElement("auro-flightline");
    el.appendChild(flightline);
    // Allow the MutationObserver microtask to flush
    await new Promise((resolve) => setTimeout(resolve, 0));
    await expect(flightline.getAttribute("aria-hidden")).to.equal("true");
  });

  it("i18n-departure attribute changes departure text in aria-label", async () => {
    const el = await fixture(html`
      <auro-flight
        flights='["AS 1436"]' duration="161"
        departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD"
        i18n-departure="Sale de {station} a las {time}">
        <auro-flightline></auro-flightline>
      </auro-flight>
    `);
    await expect(getAriaLabel(el)).to.include("Sale de S E A a las 12:30 AM");
  });
});
