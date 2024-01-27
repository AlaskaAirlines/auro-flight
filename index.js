import { AuroFlight } from './src/auro-flight.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name) {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroFlight {});
  }
}

// Example custom registration
// registerComponent('my-flight');
