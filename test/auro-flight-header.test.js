import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-flight-header.js';

describe('auro-flight-header', () => {

  it('auro-flight-header is accessible', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123", "EK 432"]' duration="23h 4m"></auro-flight-header>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-flight-header says Multiple flights when flights.length > 1', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123", "EK 432"]' duration="23h 4m"></auro-flight-header>
    `);

    await expect(el.shadowRoot.querySelector('span').textContent).to.equal('\n          Multiple flights\n      ');
  });

  it('auro-flight-header says the flight number when flights.length == 1', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123"]' duration="23h 4m"></auro-flight-header>
    `);

await expect(el.shadowRoot.querySelector('span').textContent).to.equal('\n          AS 123\n      ');
});

it('auro-flight-header says nothing when daysChanged == 0', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123"]' duration="23h 4m"></auro-flight-header>
    `);

await expect(el.shadowRoot.querySelector('.daysChanged')).to.equal(null);
  });


  it('auro-flight-header says +1 day daysChanged == 1', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123"]' duration="23h 4m" daysChanged="1"></auro-flight-header>
    `);

await expect(el.shadowRoot.querySelector('.daysChanged').textContent).to.equal('+1 day');
  });

  it('auro-flight-header says +2 days daysChanged > 1', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123"]' duration="23h 4m" daysChanged="2"></auro-flight-header>
    `);

await expect(el.shadowRoot.querySelector('.daysChanged').textContent).to.equal('+2 days');
  });

  it('auro-flight-header custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-flight-header"));

    await expect(el).to.be.true;
  });
});
