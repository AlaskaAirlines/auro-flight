// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-flight-header-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-flight-header displays airline, duration, and day change information
 *
 * @attr {Array} flights - Array of flight numbers `['AS 123', 'EK 432']`
 * @attr {String} duration - String for the duration. `1h 23m`
 * @attr {Number} daysChanged - Number of days changed due to flight duration and timezone. Positive whole integer
 */

// build the component class

class AuroFlightHeader extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      flights:      { type: Array },
      duration:     { type: String },
      departureTime:{ type: String },
      arrivalTime:  { type: String },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * @private Internal function to render either the flight number OR 'Multiple flights'
   * @returns {String} Parsed airline code output
   */
  flightType() {
    switch (this.flights.length) {
      case 0:
        return null;
      case 1:
        return this.flights[0];
      default:
        return 'Multiple flights';
    }
  }

  /**
   * Internal function to render the day change notification.
   * @private
   * @returns {String} item to display
   */
  flightDuration() {
    const dayDiff = new Date(this.arrivalTime).getUTCDay() - new Date(this.departureTime).getUTCDay();

    return dayDiff > 0
      ? html`<span class="daysChanged">+${dayDiff} day${dayDiff > 1 ? 's' : ''}</span>`
      : html``
  }

  readFlight(flight) {
    return Array.from(flight).join(' ');
  }

  // Maintain content polarity between text read by screen reader and visual content.
  render() {
    return html`
      <span class="flight">
        ${this.flightType()}
      </span>
      <div>
        <time class="duration">${this.duration}</time>
        ${this.flightDuration()}
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-flight-header")) {
  customElements.define("auro-flight-header", AuroFlightHeader);
}