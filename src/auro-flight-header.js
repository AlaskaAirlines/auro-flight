// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit";
import { getDateDifference } from "../util/util.js";
import styleCss from "./style-flight-header-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-flight-header element displays airline, duration, and day change information.
 *
 * @attr {Array} flights - Array of flight numbers `['AS 123', 'EK 432']`
 * @attr {String} duration - String for the duration. `505`
 * @attr {String} departureTime - String for the departure ISO 8601 time. `2022-04-13T12:30:00-04:00`
 * @attr {String} arrivalTime - String for the arrival ISO 8601 time. `2022-04-13T12:30:00-04:00`
 */

// build the component class

export class AuroFlightHeader extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      flights:      { type: Array },
      duration:     { type: String },
      departureTime:{ type: String },
      arrivalTime:  { type: String }
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
   * Internal function to render the day change notification.
   * @private
   * @returns {String} Item to display.
   */
  flightDuration() {
    const dayDiff = getDateDifference(this.departureTime, this.arrivalTime);

    return dayDiff > 0
      ? html`<span class="daysChanged">+${dayDiff} day${dayDiff > 1 ? 's' : ''}</span>`
      : html``;
  }

  /**
   * @private
   * @returns Composed screen reader header.
   */
  composeScreenReaderHeader() {
    return html`
      ${this.flightType().includes('flights')
        ? this.flightType()
        : `Flight ${Array.from(this.flightType()).join(' ')}`
      },
      Duration: ${this.duration}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <p class="util_displayHiddenVisually">
        ${this.composeScreenReaderHeader()}
      </p>
      <span class="flight" aria-hidden="true">
        ${this.flightType()}
      </span>
      <div aria-hidden="true">
        <time class="duration">${this.duration}</time>
        ${this.flightDuration()}
      </div>
    `;
  }
}

/* eslint max-statements: ["error", 11] */
if (!customElements.get("auro-flight-header")) {
  customElements.define("auro-flight-header", AuroFlightHeader);
}
