import { fixture, html, expect } from '@open-wc/testing';
import '../index.js';

describe('auro-flight', () => {

  it('auro-flight is accessible', async () => {
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

  it('auro-flight custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-flight"));

    await expect(el).to.be.true;
  });

  it('flight time is correctly converted', async () => {
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

    await expect(el.shadowRoot.querySelector('auro-flight-header').getAttribute('duration')).to.equal('8h 20m');
  });
});
