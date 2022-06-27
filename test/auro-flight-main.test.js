import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-flight-main.js';

describe('auro-flight-main', () => {

  it('auro-flight-main is accessible', async () => {
    const el = await fixture(html`
      <auro-flight-main departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA" arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD" flights='["AS 1436"]'></auro-flight-main>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-flight-main fills in information as expected', async () => {
    const el = await fixture(html`
      <auro-flight-main departureTime="2022-05-04T00:30:00-07:00" departureStation="SEA" arrivalTime="2022-05-04T11:55:00-04:00" arrivalStation="PVD" flights='["AS 1436"]'></auro-flight-main>
    `);

    await expect(el.shadowRoot.querySelector('.departureTime').querySelector('auro-datetime').getAttribute('setDate')).to.equal('2022-05-04T00:30:00-07:00');
    await expect(el.shadowRoot.querySelector('.arrivalTime').querySelector('auro-datetime').getAttribute('setDate')).to.equal('2022-05-04T11:55:00-04:00');
    await expect(el.shadowRoot.querySelector('.departureStation').textContent.trim()).to.equal('SEA');
    await expect(el.shadowRoot.querySelector('.arrivalStation').textContent.trim()).to.equal('PVD');

  });

  it('auro-flight-main custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-flight-main"));

    await expect(el).to.be.true;
  });
});
