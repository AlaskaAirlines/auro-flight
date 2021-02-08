// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-flight-main-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-flight-main renders the middle 'frame' of the auro-flight component with the auro-flightline
 * DoT: STATION SIZE AND COLOR MUST BE IDENTICAL TO DISCLOSURE SIZE AND COLOR!
 *
 * @attr {String} arrivalTime - Time of arrival, ex: 9:06 pm
 * @attr {String} arrivalStation - Station of arrival, ex: SEA
 * @attr {String} departureTime - Time of departure, ex: 5:36 am
 * @attr {String} departureStation - Station of departure, ex: PVD
 * @slot default - anticipates <auro-flight-segment> instances
 */

// build the component class
class AuroFlightMain extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      arrivalTime:      { type: String },
      arrivalStation:   { type: String },
      departureTime:    { type: String },
      departureStation: { type: String },
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
        <div class="departure">
          <span class="departure-time">${this.departureTime}</span>
          <span class="departure-station">${this.departureStation}</span>
        </div>
        <div class="slot-container">
          <slot></slot>
        </div>
        <div class="arrival">
          <span class="arrival-time">${this.arrivalTime}</span>
          <span class="arrival-station">${this.arrivalStation}</span>
        </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-flight-main")) {
  customElements.define("auro-flight-main", AuroFlightMain);
}
