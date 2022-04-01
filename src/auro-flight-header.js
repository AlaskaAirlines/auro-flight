// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";
import styleCss from "./style-flight-header-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-flight-header element displays airline, duration, and day change information.
 *
 * @attr {Array} flights - Array of flight numbers `['AS 123', 'EK 432']`.
 * @attr {String} duration - String for the duration. `1h 23m`.
 * @attr {Number} daysChanged - Number of days changed due to flight duration and timezone. Positive whole integer.
 */

// build the component class

class AuroFlightHeader extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      flights:      { type: Array },
      duration:     { type: String },
      daysChanged:  { type: Number },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
   * @private
   * @returns {String} Parsed airline code output.
   * Internal function to render either the flight number OR 'Multiple flights'.
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
   * @private
   * @returns {String}
   */
  flightDuration() {
    if (this.daysChanged > 0) {
      return `+${this.daysChanged} day${this.daysChanged > 1 ? 's' : ''}`;
    }

    return null;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <span class="flight">
        ${this.flightType()}
      </span>
      <div>
        <span class="duration">${this.duration}</span>
        ${this.daysChanged > 0 ? html`
          <span class="daysChanged">${this.flightDuration()}</span>
        ` : html``}
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-flight-header")) {
  customElements.define("auro-flight-header", AuroFlightHeader);
}
