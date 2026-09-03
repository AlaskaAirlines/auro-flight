// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
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
 * @customElement auro-flight-header
 * @internal
 *
 * @csspart durationContainer - Apply css to the duration container
 * @csspart flightType - Apply css to the flight type
 */
export class AuroFlightHeader extends LitElement {
  static get properties() {
    return {
      flights: { type: Array },
      duration: { type: String },
      departureTime: { type: String },
      arrivalTime: { type: String },
    };
  }

  static get styles() {
    return [styleFlightHeaderCss, colorFlightHeaderCss, tokensCss];
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add("body-default");
  }

  exposeCssParts() {
    this.setAttribute(
      "exportparts",
      "durationContainer:durationContainer, flightType:flightType",
    );
  }

  /** @private */
  flightType() {
    switch ((this.flights ?? []).length) {
      case 0:
        return "";
      case 1:
        return this.flights[0];
      default:
        return "Multiple flights";
    }
  }

  /** @private */
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

  render() {
    return html`
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
