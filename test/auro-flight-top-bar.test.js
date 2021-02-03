import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-flight-top-bar.js';

describe('auro-flight-top-bar', () => {

  it('auro-flight-top-bar is accessible', async () => {
    const el = await fixture(html`
      <auro-flight-top-bar flights='["AS 123", "EK 432"]' duration="23h 4m"></auro-flight-top-bar>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-flight-top-bar says Multiple flights when flights.length > 1', async () => {
    const el = await fixture(html`
      <auro-flight-top-bar flights='["AS 123", "EK 432"]' duration="23h 4m"></auro-flight-top-bar>
    `);

    await expect(el.shadowRoot.querySelector('span').textContent).to.equal('\n            Multiple flights\n        ');
  });

  it('auro-flight-top-bar says the flight number when flights.length == 1', async () => {
    const el = await fixture(html`
      <auro-flight-top-bar flights='["AS 123"]' duration="23h 4m"></auro-flight-top-bar>
    `);

await expect(el.shadowRoot.querySelector('span').textContent).to.equal('\n            AS 123\n        ');
});

it('auro-flight-top-bar says nothing when daysChanged == 0', async () => {
    const el = await fixture(html`
      <auro-flight-top-bar flights='["AS 123"]' duration="23h 4m"></auro-flight-top-bar>
    `);

await expect(el.shadowRoot.querySelector('.days-changed')).to.equal(null);
  });


  it('auro-flight-top-bar says +1 day daysChanged == 1', async () => {
    const el = await fixture(html`
      <auro-flight-top-bar flights='["AS 123"]' duration="23h 4m" daysChanged="1"></auro-flight-top-bar>
    `);

await expect(el.shadowRoot.querySelector('.days-changed').textContent).to.equal('+1 day');
  });

  it('auro-flight-top-bar says +2 days daysChanged > 1', async () => {
    const el = await fixture(html`
      <auro-flight-top-bar flights='["AS 123"]' duration="23h 4m" daysChanged="2"></auro-flight-top-bar>
    `);

await expect(el.shadowRoot.querySelector('.days-changed').textContent).to.equal('+2 days');
  });

  it('auro-flight-top-bar custom element is defined', async () => {
    const el = await Boolean(customElements.get("auro-flight-top-bar"));

    await expect(el).to.be.true;
  });
});
