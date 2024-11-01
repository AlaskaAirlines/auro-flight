import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-flight-main.js';

describe('auro-flight-main', () => {

  it('auro-flight-main is accessible', async () => {
    const el = await fixture(html`
      <auro-flight-main departureStation="SEA" departureTime="2022-05-04T00:30:00-07:00" arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD" flights='["AS 1436"]'></auro-flight-main>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-flight-main fills in information as expected', async () => {
    const el = await fixture(html`
      <auro-flight-main departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA" arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD" flights='["AS 1436"]' reroutedArrivalStation="SFO" reroutedDepartureStation="LAX"></auro-flight-main>
    `);

    await expect(el.shadowRoot.querySelector('.departureTime').querySelector('[auro-datetime]').getAttribute('setDate')).to.equal('2022-05-04T00:30:00-07:00');
    await expect(el.shadowRoot.querySelector('.arrivalTime').querySelector('[auro-datetime]').getAttribute('setDate')).to.equal('2022-05-04T11:55:00-04:00');
    await expect(el.shadowRoot.querySelector('.departureStation').textContent.trim()).to.contain('SEA');
    await expect(el.shadowRoot.querySelector('.arrivalStation').textContent.trim()).to.contain('PVD');
  });

  it('auro-flight-main custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-flight-main"));

    await expect(el).to.be.true;
  });

  it('auro flight with no reroutes, and a single flight', async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00"
        arrivalStation="PVD"
        flights='["AS 1436"]'>
      </auro-flight-main>
    `);

    const expectedDeparture = 'Departs from S E A at 12:30 AM',
      expectedArrival = 'arrives P V D at 11:55 AM';

    const actual = el.shadowRoot.querySelector('.util_displayHiddenVisually').textContent.trim().replace(/\n|\r/g, "");

    await expect(actual.includes(expectedDeparture)).is.true;
    await expect(actual.includes(expectedArrival)).is.true;
  })

  it('non-stop that arrives next day', async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-05T11:55:00-04:00"
        arrivalStation="PVD"
        flights='["AS 1436"]'>
      </auro-flight-main>
    `);

    const expectedComposedDeparture = 'Departs from S E A at 12:30 AM',
      expectedComposedArrival = 'arrives P V D at 11:55 AM',
      expectedNextDay = 'next day',
      expectedNonstop = 'nonstop';

    const actual = el.shadowRoot.querySelector('.util_displayHiddenVisually').textContent.trim().replace(/\n|\r/g, "");

    await expect(actual.includes(expectedComposedDeparture)).is.true;
    await expect(actual.includes(expectedComposedArrival)).is.true;
    await expect(actual.includes(expectedNextDay)).is.true;
    await expect(actual.includes(expectedNonstop)).is.true;
  })

  it('non-stop that arrives two days later', async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-06T11:55:00-04:00"
        arrivalStation="PVD"
        flights='["AS 1436"]'>
      </auro-flight-main>
    `);
    const expectedDeparture = 'Departs from S E A at 12:30 AM',
      expectedArrival = 'arrives P V D at 11:55 AM',
      expectedComposition = '2 days later';

    const actual = el.shadowRoot.querySelector('.util_displayHiddenVisually').textContent.trim().replace(/\n|\r/g, "");

    await expect(actual.includes(expectedDeparture)).is.true;
    await expect(actual.includes(expectedArrival)).is.true;
    await expect(actual.includes(expectedComposition)).is.true;
  })

  it('auro flight with a departure reroute', async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00"
        arrivalStation="PVD"
        flights='["AS 1436"]'
        reroutedDepartureStation="LAX">
      </auro-flight-main>
    `);

    const expectedDepartureCity = `L A X`,
      expectedDepartureTime = `12:30 AM`,
      expectedReroutedFlight = 'Flight S E A to P V D has been re-routed.';

    const actual = el.shadowRoot.querySelector('.util_displayHiddenVisually').textContent.trim().replace(/\n|\r/g, "");
    const departureRerouteSpan = el.shadowRoot.querySelector('.departureStation .util_lineThrough');
    const arrivalRerouteSpan = el.shadowRoot.querySelector('.arrivalStation .util_lineThrough');

    await expect(arrivalRerouteSpan).to.be.null;
    await expect(departureRerouteSpan.textContent.includes("SEA")).is.true;
    await expect(actual.includes(expectedReroutedFlight)).is.true;
    await expect(actual.includes(expectedDepartureCity)).is.true;
    await expect(actual.includes(expectedDepartureTime)).is.true;
  })

  it('auro flight with an arrival reroute', async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00"
        arrivalStation="PVD"
        flights='["AS 1436"]'
        reroutedArrivalStation="SFO">
      </auro-flight-main>
    `);

    const expectedArrival = 'and arrives  S F O at 11:55 AM',
      expectedReroutedFlight = 'Flight S E A to P V D has been re-routed.';

    const actual = el.shadowRoot.querySelector('.util_displayHiddenVisually').textContent.trim().replace(/\n|\r/g, "");
    const departureRerouteSpan = el.shadowRoot.querySelector('.departureStation .util_lineThrough');
    const arrivalRerouteSpan = el.shadowRoot.querySelector('.arrivalStation .util_lineThrough');

    await expect(arrivalRerouteSpan.textContent.includes("PVD")).is.true;
    await expect(departureRerouteSpan).to.be.null;
    await expect(actual.includes(expectedReroutedFlight)).is.true;
    await expect(actual.includes(expectedArrival)).is.true;
  })

  it('auro flight with reroutes', async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00"
        arrivalStation="PVD"
        flights='["AS 1436"]'
        reroutedArrivalStation="SFO"
        reroutedDepartureStation="LAX">
      </auro-flight-main>
    `);

    const expectedDepartureCity = `L A X`,
      expectedDepartureTime = `12:30 AM`,
      expectedArrival = 'and arrives  S F O at 11:55 AM',
      expectedReroutedFlight = 'Flight S E A to P V D has been re-routed.';

    const actual = el.shadowRoot.querySelector('.util_displayHiddenVisually').textContent.trim().replace(/\n|\r/g, "");
    const departureRerouteSpan = el.shadowRoot.querySelector('.departureStation .util_lineThrough');
    const arrivalRerouteSpan = el.shadowRoot.querySelector('.arrivalStation .util_lineThrough');

    await expect(actual.includes(expectedReroutedFlight)).is.true;
    await expect(actual.includes(expectedDepartureTime)).is.true;
    await expect(actual.includes(expectedDepartureCity)).is.true;
    await expect(actual.includes(expectedArrival)).is.true;
    await expect(arrivalRerouteSpan.textContent.includes("PVD")).is.true;
    await expect(departureRerouteSpan.textContent.includes("SEA")).is.true;
  })

  it('flight with a stopover', async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00"
        arrivalStation="PVD"
        flights='["AS 1436"]'
        stops='[{ "arrivalStation": "LAX", "isStopover": true }]'>
      </auro-flight-main>
    `);

    const composedDeparture = 'Departs from S E A at 12:30 AM',
      composedArrival = 'arrives P V D at 11:55 AM',
      composedStop = 'with a stop in L A X';

    const actual = el.shadowRoot.querySelector('.util_displayHiddenVisually').textContent.trim().replace(/\n|\r/g, "");

    await expect(actual.includes(composedDeparture)).is.true;
    await expect(actual.includes(composedArrival)).is.true;
    await expect(actual.includes(composedStop)).is.true;
  })

  it('flight with a layover', async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00"
        arrivalStation="PVD"
        flights='["AS 1436"]'
        stops='[{ "arrivalStation": "SFO", "duration": "1hr 42m", "isStopover": false }]'>
      </auro-flight-main>
    `);
    const composedDeparture = 'Departs from S E A at 12:30 AM,',
      composedArrival = 'arrives P V D at 11:55 AM',
      composedLayover = 'with a layover in S F O',
      composedDuration = 'for 1hr 42m';

    const actual = el.shadowRoot.querySelector('.util_displayHiddenVisually').textContent.trim().replace(/\n|\r/g, "");

    await expect(actual.includes(composedDeparture)).is.true;
    await expect(actual.includes(composedArrival)).is.true;
    await expect(actual.includes(composedLayover)).is.true;
    await expect(actual.includes(composedDuration)).is.true;
  })

  it('flight with a layover', async () => {
    const el = await fixture(html`
      <auro-flight-main
        departureTime="2022-05-04T00:30:00-07:00"
        departureStation="SEA"
        arrivalTime="2022-05-04T11:55:00-04:00"
        arrivalStation="PVD"
        flights='["AS 1436"]'
        stops='[{ "arrivalStation": "LAX", "isStopover": true }, { "arrivalStation": "SFO", "duration": "1hr 42m", "isStopover": false }]'>
      </auro-flight-main>
    `);
    const composedDeparture = 'Departs from S E A at 12:30 AM, arrives P V D at 11:55 AM',
      composedStop = 'with a stop in L A X',
      composedConnectorText = 'and',
      composedLayover = 'with a layover in S F O',
      composedDuration = 'for 1hr 42m';

    const actual = el.shadowRoot.querySelector('.util_displayHiddenVisually').textContent.trim().replace(/\n|\r/g, "");

    await expect(actual.includes(composedDeparture)).is.true;
    await expect(actual.includes(composedStop)).is.true;
    await expect(actual.includes(composedConnectorText)).is.true;
    await expect(actual.includes(composedLayover)).is.true;
    await expect(actual.includes(composedDuration)).is.true;
  })
});
