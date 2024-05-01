// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit";
import styleCss from "./style-flight-css.js";
import "@aurodesignsystem/auro-flightline";
import "@aurodesignsystem/auro-flightline/src/auro-flight-segment.js";
import "./auro-flight-header.js";
import "./auro-flight-main.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-flight element renders a DoT compliant Flight listing.
 * This design has been tested via the Alaska Legal team for legal compliance.
 * Please DO NOT modify unit tests pertaining to DoT regulations.
 *
 * @attr {Array} stops - Array of objects representing stopovers or layovers: "isStopover": bool, "arrivalStation": string, "duration": string ["123hr 123m"] (layover only). This content will not be used in the UI, but only constructs the a11y conversational phrase for screen readers and has no effect on the `auro-flight-segment` content.
 * @attr {Array} flights - Array of flight numbers `['AS 123', 'EK 432']`
 * @attr {Number} duration - String for the duration. `505`
 * @attr {String} departureTime - String for the departure ISO 8601 time. `2022-04-13T12:30:00-04:00`
 * @attr {String} departureStation - String for the departure station. `SEA`
 * @attr {String} arrivalTime - String for the arrival ISO 8601 time. `2022-04-13T12:30:00-04:00`
 * @attr {String} arrivalStation - String for the arrival station. `PVD`
 * @attr {String} reroutedDepartureStation - String for the new departure station for rerouted flights. `PDX`
 * @attr {String} reroutedArrivalStation - String for the new arrival station for rerouted flights. `AVP`
 * @slot default - anticipates `<auro-flightline>` instance to fill out the flight timeline
 * @slot departureHeader - Text on top of the departure station's time
 * @slot arrivalHeader - Text on top of the arrival station's time
 * @slot footer - Lower section allowing for tertiary content to be attributed to the element. Per **DoT Regulations** do NOT edit the styles contained within this slot
 * @csspart flightContainer - Apply css to the elements within the flight component container
 */

// build the component class
export class AuroFlight extends LitElement {
  // function to define props used within the scope of this component
  static get properties() {
    return {
      stops:                    { type: Array },
      flights:                  { type: Array },
      duration:                 { type: Number },
      departureTime:            { type: String },
      arrivalTime:              { type: String },
      arrivalStation:           { type: String },
      departureStation:         { type: String },
      reroutedArrivalStation:   { type: String },
      reroutedDepartureStation: { type: String }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // This function removes a CSS selector if the footer slot is empty
  firstUpdated() {
    const slot = this.shadowRoot.querySelector("#footer"),
      slotWrapper = this.shadowRoot.querySelector("#flightFooter");

    if (!this.unformatted && slot.assignedNodes().length === 0) {
      return slotWrapper.classList.remove("flightFooter");
    }

    return null;
  }

  /**
   * @private
   * @param {number} duration - Number that defines duration of flight in minutes.
   * @returns {string} Number converted to hours and min string for UI.
   */
  convertDuration(duration) {
    const hour = 60;
    const hours = `${parseInt(duration / hour, 10)}h`;
    const calcMins = parseInt(duration % hour, 10);
    const minsString = calcMins === 0 ? '' : `${calcMins}m`;

    return `${hours} ${minsString}`;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <section part="flightContainer">
        <auro-flight-header
          flights=${JSON.stringify(this.flights)}
          duration=${this.convertDuration(this.duration)}
          departureTime=${this.departureTime}
          arrivalTime=${this.arrivalTime}
        >
        </auro-flight-header>
        <div class="headerContainer">
          <slot name="departureHeader"></slot>
          <slot name="arrivalHeader"></slot>
        </div>
        <auro-flight-main
          flights=${JSON.stringify(this.flights)}
          duration=${this.convertDuration(this.duration)}
          arrivalTime=${this.arrivalTime}
          arrivalStation=${this.arrivalStation}
          departureTime=${this.departureTime}
          departureStation=${this.departureStation}
          reroutedArrivalStation=${this.reroutedArrivalStation}
          reroutedDepartureStation=${this.reroutedDepartureStation}
          stops=${this.stops ? JSON.stringify(this.stops) : null}
        >
          <slot></slot>
        </auro-flight-main>
        <footer class="flightFooter" id="flightFooter">
          <slot name="footer" id="footer"></slot>
        </footer>
      </section>
    `;
  }
}

/* eslint max-statements: ["error", 11] */
if (!customElements.get("auro-flight")) {
  customElements.define("auro-flight", AuroFlight);
}
