// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

import { AuroDatetime } from "@aurodesignsystem/auro-datetime/class";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
// If use litElement base class
import { LitElement } from "lit";
import { html } from "lit/static-html.js";
import datetimeVersion from "./datetimeVersion.js";
import colorFlightMainCss from "./styles/color-flight-main.scss";
import styleFlightMainCss from "./styles/style-flight-main.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Shows the departure and arrival times and stations on either side of the `<auro-flightline>`.
 * DoT: The station size and color must match the disclosure size and color.
 * @customElement auro-flight-main
 * @internal
 *
 * @slot default - The `<auro-flightline>` element that draws the timeline between the two stations.
 * @csspart arrivalContainer - The element that holds the arrival time and station.
 * @csspart departureContainer - The element that holds the departure time and station.
 * @csspart arrivalTime - The element that shows the arrival time.
 * @csspart departureTime - The element that shows the departure time.
 * @csspart arrivalStation - The element that shows the arrival station.
 * @csspart departureStation - The element that shows the departure station.
 */
export class AuroFlightMain extends LitElement {
  static get properties() {
    return {
      arrivalStation: { type: String },
      arrivalTime: { type: String },
      departureStation: { type: String },
      departureTime: { type: String },
      reroutedArrivalStation: { type: String },
      reroutedDepartureStation: { type: String },
    };
  }

  static get styles() {
    return [styleFlightMainCss, colorFlightMainCss, tokensCss];
  }

  constructor() {
    super();
    const versioning = new AuroDependencyVersioning();

    /** @private */
    this.datetimeTag = versioning.generateTag(
      "auro-datetime",
      datetimeVersion,
      AuroDatetime,
    );
  }

  exposeCssParts() {
    this.setAttribute(
      "exportparts",
      "departureTime:departureTime, arrivalTime:arrivalTime, departureStation:departureStation, arrivalStation:arrivalStation",
    );
  }

  render() {
    const hasDepartureReroute =
      this.reroutedDepartureStation &&
      this.reroutedDepartureStation !== "undefined";
    const hasArrivalReroute =
      this.reroutedArrivalStation &&
      this.reroutedArrivalStation !== "undefined";
    return html`
        <div class="departure" aria-hidden="true" part="departureContainer">
          <time class="departureTime heading-md" part="departureTime">
            <${this.datetimeTag} type="time" value="${this.departureTime}"></${this.datetimeTag}>
          </time>
          <span class="departureStation" part="departureStation">
            ${
              hasDepartureReroute
                ? html`<span class="body-default">${this.reroutedDepartureStation}</span>`
                : html``
            }
            <span class=${hasDepartureReroute ? "util_lineThrough body-default" : "body-default"}>
              ${this.departureStation}
            </span>
          </span>
        </div>
        <div class="slotContainer" aria-hidden="true"><!-- belt-and-suspenders; primary AT hide is via light DOM in auro-flight._applyFlightlineAriaHidden() -->
          <slot></slot>
        </div>
        <div class="arrival" aria-hidden="true" part="arrivalContainer">
          <time class="arrivalTime heading-md" part="arrivalTime">
            <${this.datetimeTag} type="time" value="${this.arrivalTime}"></${this.datetimeTag}>
          </time>
          <span class="arrivalStation body-default" part="arrivalStation">
            ${
              hasArrivalReroute
                ? html`<span>${this.reroutedArrivalStation}</span>`
                : html``
            }
            <span class=${hasArrivalReroute ? "util_lineThrough body-default" : "body-default"}>
              ${this.arrivalStation}
            </span>
          </span>
        </div>
    `;
  }
}

if (!customElements.get("auro-flight-main")) {
  customElements.define("auro-flight-main", AuroFlightMain);
}
