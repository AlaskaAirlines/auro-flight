import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-flight.js';

describe('auro-flight', () => {

  it('auro-flight is accessible', async () => {
    const el = await fixture(html`
          <auro-flight 
            flights='["AS 9999"]' 
            duration="1h 99m" 
            daysChanged="2"
            departureTime="2:55 pm"
            departureStation="PVD"
            arrivalTime="5:10 pm"
            arrivalStation="ORD"
            >
              Hello World!
          </auro-flight>
        `);

    await expect(el).to.be.accessible();
  });

  it('auro-flight custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-flight"));

    await expect(el).to.be.true;
  });
});
