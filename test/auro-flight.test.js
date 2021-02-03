import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-flight.js';

describe('auro-flight', () => {
  it('sets the CSS class on auro-flight > div element', async () => {
    const el = await fixture(html`
      <auro-flight cssclass="testClass"></auro-flight>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-flight is accessible', async () => {
    const el = await fixture(html`
      <auro-flight cssclass="testClass"></auro-flight>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-flight custom element is defined', async () => {
    const el = await !!customElements.get("auro-flight");

    await expect(el).to.be.true;
  });
});
