import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-flight-main.js';

describe('auro-flight-main', () => {

  it('auro-flight-main is accessible', async () => {
    const el = await fixture(html`
      <auro-flight-main departureTime="9:06 am" departureStation="SEA" arrivalTime="4:53pm" arrivalStation="PVD"></auro-flight-main>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-flight-main fills in information as expected', async () => {
    const el = await fixture(html`
      <auro-flight-main departureTime="9:06 am" departureStation="SEA" arrivalTime="4:53 pm" arrivalStation="PVD"></auro-flight-main>
    `);

    await expect(el.shadowRoot.querySelector('.departureTime').textContent).to.equal('9:06 am');
    await expect(el.shadowRoot.querySelector('.arrivalTime').textContent).to.equal('4:53 pm');
    await expect(el.shadowRoot.querySelector('.departureStation').textContent.trim()).to.equal('SEA');
    await expect(el.shadowRoot.querySelector('.arrivalStation').textContent.trim()).to.equal('PVD');

  });

  it('auro-flight-main custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-flight-main"));

    await expect(el).to.be.true;
  });
});
