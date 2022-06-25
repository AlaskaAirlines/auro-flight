import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-flight-header.js';

describe('auro-flight-header', () => {

  it('auro-flight-header is accessible', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123", "EK 432"]' duration="180" departureTime="2022-05-04T01:55:00-09:00" arrivalTime="2022-05-04T03:55:00-09:00"></auro-flight-header>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-flight-header says Multiple flights when flights.length > 1', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123", "EK 432"]' duration="180" departureTime="2022-05-04T01:55:00-09:00" arrivalTime="2022-05-04T03:55:00-09:00"></auro-flight-header>
    `);

    await expect(el.shadowRoot.querySelector('span').textContent).to.equal('\n        Multiple flights\n      ');
  });

  it('auro-flight-header says the flight number when flights.length == 1', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123"]' duration="180" departureTime="2022-05-04T01:55:00-09:00" arrivalTime="2022-05-04T03:55:00-09:00"></auro-flight-header>
    `);

    await expect(el.shadowRoot.querySelector('span').textContent).to.equal('\n        AS 123\n      ');
  });

  it('determines no day change', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123"]' departureTime="2022-04-13T01:10:00-07:00" arrivalTime="2022-04-13T12:30:00-04:00"></auro-flight-header>
    `);

    await expect(el.shadowRoot.querySelector('.daysChanged')).to.equal(null);
  });

  it('determines no day change +1', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123"]' departureTime="2022-04-13T01:10:00-07:00" arrivalTime="2022-04-14T12:30:00-04:00"></auro-flight-header>
    `);

    await expect(el.shadowRoot.querySelector('.daysChanged').textContent).to.equal('+1 day');
  });

  it('determines no day change +2', async () => {
    const el = await fixture(html`
      <auro-flight-header flights='["AS 123"]' departureTime="2022-04-13T01:10:00-07:00" arrivalTime="2022-04-15T12:30:00-04:00"></auro-flight-header>
    `);

    await expect(el.shadowRoot.querySelector('.daysChanged').textContent).to.equal('+2 days');
  });

  it('auro-flight-header custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-flight-header"));

    await expect(el).to.be.true;
  });
});
