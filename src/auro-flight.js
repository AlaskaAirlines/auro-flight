// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-flight-css.js";
import "./auro-flight-top-bar";
import "./auro-flight-main";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-flight renders a DoT compliant Flight listing
 * This design has been tested via the Alaska Legal team for legal compliance
 * Please DO NOT modify unit tests pertaining to DoT regulations without contacting gus@alaskaair.com
 *
 * @attr {Array} flights - Array of flight numbers ['AS 123', 'EK 432']
 * @attr {String} duration - String for the duration. '1h 23m'
 * @attr {Number} daysChanged - Number of days changed due to flight duration and timezone. Positive whole integer
 * @attr {String} departureTime - String for the departure time. '9:06 am'
 * @attr {String} departureStation - String for the departure station. 'SEA'
 * @attr {String} arrivalTime - String for the arrival time. '4:05 pm'
 * @attr {String} arrivalStation - String for the arrival station. 'PVD'
 * @slot default - displays data under the fold. DoT DISCLOSURES MUST BE var(--auro-text-body-size-default)!!
 * @slot flight-segments - anticipates <auro-flight-segment> instances to fill out the flight timeline
 */

// build the component class
class AuroFlight extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      flights:          { type: Array },
      duration:         { type: String },
      daysChanged:      { type: Number },
      departureTime:    { type: String },
      departureStation: { type: String },
      arrivalTime:      { type: String },
      arrivalStation:   { type: String },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <auro-flight-top-bar 
        flights=${JSON.stringify(this.flights)}
        duration=${this.duration} 
        daysChanged=${this.daysChanged}
      >
      </auro-flight-top-bar>
      <auro-flight-main
        arrivalTime=${this.arrivalTime}
        arrivalStation=${this.arrivalStation}
        departureTime=${this.departureTime}
        departureStation=${this.departureStation}
      >
      </auro-flight-main>
      <slot></slot>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-flight")) {
  customElements.define("auro-flight", AuroFlight);
}
