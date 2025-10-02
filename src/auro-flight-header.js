// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { html, LitElement } from "lit";
import { getDateDifference } from "../util/util.js";
import colorFlightHeaderCss from "./styles/color-flight-header.scss";
import styleFlightHeaderCss from "./styles/style-flight-header.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-flight-header element displays airline, duration, and day change information.
 *
 * @attr {Array} flights - Array of flight numbers `['AS 123', 'EK 432']`
 * @attr {String} duration - String for the duration. `505`
 * @attr {String} departureTime - String for the departure ISO 8601 time. `2022-04-13T12:30:00-04:00`
 * @attr {String} arrivalTime - String for the arrival ISO 8601 time. `2022-04-13T12:30:00-04:00`
 * @csspart durationContainer - Apply css to the duration container
 * @csspart flightType - Apply css to the flight type
 */

// build the component class

export class AuroFlightHeader extends LitElement {
  // function to define props used within the scope of this component
  static get properties() {
    return {
      flights: { type: Array },
      duration: { type: String },
      departureTime: { type: String },
      arrivalTime: { type: String },
    };
  }

  static get styles() {
    return [
     styleFlightHeaderCss,
     colorFlightHeaderCss,
     tokensCss,
    ];
  }

  /**
   * Lifecycle callback when the component is added to the DOM.
   * @returns {void}
   */
  connectedCallback() {
    super.connectedCallback();
    this.classList.add("body-default");
  }

  /**
   * Exposes CSS parts for styling from parent components.
   * @returns {void}
   */
  exposeCssParts() {
    this.setAttribute(
      "exportparts",
      "durationContainer:durationContainer, flightType:flightType",
    );
  }

  /**
   * @private
   * @returns {String} Parsed airline code output.
   * Internal function to render either the flight number OR 'Multiple flights'.
   */
  flightType() {
    switch (this.flights.length) {
      case 0:
        return "";
      case 1:
        return this.flights[0];
      default:
        return "Multiple flights";
    }
  }

  /**
   * Internal function to render the day change notification.
   * @private
   * @returns {String} Item to display.
   */
  flightDuration() {
    const dayDiff = getDateDifference(this.departureTime, this.arrivalTime);
    const arriveOneDayBefore = -1;
    let daysChanged = html``;

    if (dayDiff > 0) {
      daysChanged = html`<span class="daysChanged">+${dayDiff} day${dayDiff > 1 ? "s" : ""}</span>`;
    } else if (dayDiff === arriveOneDayBefore) {
      daysChanged = html`<span class="daysChanged">${dayDiff} day</span>`;
    }

    return daysChanged;
  }

  /**
   * @private
   * @returns Composed screen reader header.
   */
  composeScreenReaderHeader() {
    return html`
      ${
        this.flightType().includes("flights")
          ? this.flightType()
          : `Flight ${Array.from(this.flightType()).join(" ")}`
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
      <span class="flight body-default" aria-hidden="true" part="flightType">
        ${this.flightType()}
      </span>
      <div aria-hidden="true" part="durationContainer">
        <time class="duration body-default">${this.duration}</time>
        ${this.flightDuration()}
      </div>
    `;
  }
}

/* eslint max-statements: ["error", 11] */
if (!customElements.get("auro-flight-header")) {
  customElements.define("auro-flight-header", AuroFlightHeader);
}
