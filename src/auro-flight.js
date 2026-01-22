// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
// If use litElement base class
import { html, LitElement } from "lit";
import colorFlightCss from "./styles/color-flight.scss";
import styleCss from "./styles/style-flight.scss";
import tokensCss from "./styles/tokens.scss";

import "@aurodesignsystem/auro-flightline";

import "./auro-flight-header.js";
import "./auro-flight-main.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The `auro-flight` element renders a DoT compliant Flight listing.
 * @customElement auro-flight
 * 
 * This design has been tested via the Alaska Legal team for legal compliance.
 * Please DO NOT modify unit tests pertaining to DoT regulations.
 *
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
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    this.flights = [];

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      /**
       * String for the arrival station.
       */
      arrivalStation: { type: String },

      /**
       * String for the arrival ISO 8601 time (e.g. `2022-04-13T12:30:00-04:00`).
       */
      arrivalTime: { type: String },

      /**
       * String for the departure station.
       */
      departureStation: { type: String },

      /**
       * String for the departure ISO 8601 time (e.g. `2022-04-13T12:30:00-04:00`).
       */
      departureTime: { type: String },

      /**
       * Number that defines duration of flight in minutes.
       */
      duration: { type: Number },

      /**
       * Array of flight numbers.
       */
      flights: { type: Array },

      /**
       * String for the new arrival station for rerouted flights.
       */
      reroutedArrivalStation: { type: String },

      /**
       * String for the new departure station for rerouted flights.
       */
      reroutedDepartureStation: { type: String },

      /**
       * Array of objects representing stopovers or layovers.
       * Each object contains:
       * - `isStopover`: boolean
       * - `arrivalStation`: string
       * - `duration`: string (e.g. "123hr 123m")
       */
      stops: { type: Array }
    };
  }

  static get styles() {
    return [styleCss, colorFlightCss, tokensCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-flight"] - The name of the element that you want to register.
   *
   * @example
   * AuroFlight.register("custom-flight") // this will register this element to <custom-flight/>
   *
   */
  static register(name = "auro-flight") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroFlight);
  }

  // This function removes a CSS selector if the footer slot is empty
  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-flight");

    const slot = this.shadowRoot.querySelector("#footer");
    const slotWrapper = this.shadowRoot.querySelector("#flightFooter");

    const main = this.shadowRoot.querySelector("auro-flight-main");
    main.exposeCssParts();

    const header = this.shadowRoot.querySelector("auro-flight-header");
    header.exposeCssParts();

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
    const hours = `${Number.parseInt(duration / hour, 10)}h`;
    const calcMins = Number.parseInt(duration % hour, 10);
    const minsString = calcMins === 0 ? "" : `${calcMins}m`;

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
        <footer class="flightFooter body-default" id="flightFooter">
          <slot name="footer" id="footer"></slot>
        </footer>
      </section>
    `;
  }
}
