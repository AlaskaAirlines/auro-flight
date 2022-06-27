// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";
import styleCss from "./style-flight-main-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-flight-main element renders the middle 'frame' of the auro-flight component with the auro-flightline.
 * DoT: STATION SIZE AND COLOR MUST BE IDENTICAL TO DISCLOSURE SIZE AND COLOR!
 *
 * @attr {String} arrivalTime - UTC Time of arrival, e.g. `2022-04-13T12:30:00-04:00`
 * @attr {String} arrivalStation - Station of arrival, e.g. `SEA`
 * @attr {String} departureTime - UTC Time of departure, e.g. `2022-04-13T12:30:00-04:00`
 * @attr {String} departureStation - Station of departure, e.g. `PVD`
 * @attr {String} reroutedDepartureStation - Station of rerouted departure, e.g. `PDX`
 * @attr {String} reroutedArrivalStation - Station of rerouted arrival, e.g. `AVP`
 * @slot default - anticipates `<auro-flight-segment>` instances
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
      reroutedDepartureStation: { type: String },
      reroutedArrivalStation: { type: String },
      duration:         { type: Number },
      flights:          { type: Array }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    /**
     * Time template object used by convertTime() method.
     */
    this.timeTemplate = {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: this.timeZone
    };

    this.template = {};
  }

  /**
   * @private
   * @param {string} time - UTC time.
   * @returns Localized time based from UTC string.
   */
  convertTime(time) {
    const slicedTime = time.slice(0, -6);
    const newTime = new Date(slicedTime);
    const localizedTime = newTime.toLocaleString('en-us', this.timeTemplate).replace(/^0+/u, '');

    return localizedTime;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
        <script type="application/ld+json">
          {
            "@context": "https://schema.org/",
            "@type": "Flight",
            "departureTime": "${this.departureTime}",
            "arrivalTime": "${this.arrivalTime}",
            "estimatedFlightDuration": "${this.duration}",
            "name": "Flight(s) ${this.flights}",
            "arrivalAirport": "${this.arrivalStation}",
            "departureAirport": "${this.departureStation}",
            "description": "Departs from ${this.departureStation} at ${this.convertTime(this.departureTime)}, arrives ${this.arrivalStation} at ${this.convertTime(this.arrivalTime)}"
          }
        </script>

        <div class="departure">
          <time class="departureTime">
            <auro-datetime type="tzTime" setDate="${this.departureTime}"></auro-datetime>
          </time>
          <span class="departureStation">
            ${this.reroutedDepartureStation === "undefined" ? html`` : html`
              <span class="util_lineThrough">
                ${this.reroutedDepartureStation}
              </span>
            `}

            ${this.departureStation}
          </span>
        </div>
        <div class="slotContainer">
          <slot></slot>
        </div>
        <div class="arrival">
          <time class="arrivalTime">
            <auro-datetime type="tzTime" setDate="${this.arrivalTime}"></auro-datetime>
          </time>
          <span class="arrivalStation">
            ${this.reroutedArrivalStation === "undefined" ? html`` : html`
            <span class="util_lineThrough">
              ${this.reroutedArrivalStation}
            </span>
            `}

            ${this.arrivalStation}
          </span>
        </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-flight-main")) {
  customElements.define("auro-flight-main", AuroFlightMain);
}
