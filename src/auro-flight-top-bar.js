// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-flight-top-bar-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-flight-top-bar displays airline, duration, and day change information
 *
 * @attr {Array} flights - Array of flight numbers ['AS 123', 'EK 432']
 * @attr {String} duration - String for the duration. '1h 23m'
 * @attr {Number} daysChanged - Number of days changed due to flight duration and timezone. Positive whole integer
 */
const ONE = 1,
ZERO = 0;
// build the component class

class AuroFlightTopBar extends LitElement {

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
   * Internal function to render either the flight number OR 'Multiple flights'.
   *
   * @returns {String} Parsed airline code output
   */
  generateFlights() {
    switch (this.flights.length) {
      case ZERO:
        return null;
      case ONE:
        return this.flights[ZERO];
      default:
        return 'Multiple flights';
    }
  }

  /**
   * Internal function to render the day change notification.
   * 0 day change = null
   * 1 day change = +1 Day
   * 2+ day change = +N Days
   *
   * @returns {String} item to display
   */
  generateDays() {
    if (this.daysChanged > ZERO) {
        return `+${this.daysChanged} day${this.daysChanged > ONE ? 's' : ''}`
    }
    return null;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <span class="flight">
          ${this.generateFlights()}
      </span>
      <div>
          <span class="duration">${this.duration}</span>
          ${this.daysChanged > ZERO ? html`
              <span class="daysChanged">${this.generateDays()}</span>
          ` : html``}
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-flight-top-bar")) {
  customElements.define("auro-flight-top-bar", AuroFlightTopBar);
}
