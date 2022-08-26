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
 * @attr {String} arrivalTime - Time of arrival, e.g. `9:06 pm`
 * @attr {String} arrivalStation - Station of arrival, e.g. `SEA`
 * @attr {String} departureTime - Time of departure, e.g. `5:36 am`
 * @attr {String} departureStation - Station of departure, e.g. `PVD`
 * @attr {String} reroutedDepartureStation - Station of rerouted departure, e.g. `PDX`
 * @attr {String} reroutedArrivalStation - Station of rerouted arrival, e.g. `AVP`
 * @attr {Array} stops - Flight segment list that includes duration and departure station, and if it is a stop over
 * @slot default - anticipates `<auro-flight-segment>` instances
 */

// build the component class
class AuroFlightMain extends LitElement {

  // constructor() {
  //   super();
  // }


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
   * @param {*string} time
   * @returns Localized time based from UTC string.
   */
  convertTime(time) {
    let newTime = new Date();

    this.timeTemplate.timeZone = 'UTC';
    newTime = new Date(time);

    let localizedTime = newTime.toLocaleString('en-us', this.timeTemplate).replace(/^0+/u, '');

    return localizedTime;
  }


  /**
   * @private
   * @param {string} station
   * @returns mutated string
  */
  readStation(station) {
    return Array.from(station).join(' ');
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      flights: { type: String },
      duration: { type: String },
      arrivalTime: { type: String },
      arrivalStation: { type: String },
      departureTime: { type: String },
      departureStation: { type: String },
      reroutedDepartureStation: { type: String },
      reroutedArrivalStation: { type: String },
      stops: { type: Array }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  /**
* @private
* @returns composed screen reader summary
*/
  composeScreenReaderSummary() {
    const isNonstop = !!this.stops; 
    const dayDiff = new Date(this.arrivalTime).getUTCDay() - new Date(this.departureTime).getUTCDay();
    console.log(dayDiff)
    const layoverStopoverStringArray = this.stops?.length > 0 ? this.stops?.map((segment, idx) => {
      console.log(segment)
      return html`
      with a ${segment.isStopover ? "stop" : "layover"} in ${segment.arrivalStation} ${segment.duration ? `for ${segment.duration}` : ""} ${idx === this.stops.length - 2 ? "and" 
        : idx === this.stops.length - 1 ? "" : ","
      }`
    }) : ""
    return html`
      ${this.reroutedDepartureStation === 'undefined' ?
        `Departs from ${this.readStation(this.departureStation)} 
          at ${this.convertTime(this.departureTime)}, 
          arrives ${this.readStation(this.arrivalStation)} 
          at ${this.convertTime(this.arrivalTime)}` :
        `Flight ${this.readStation(this.reroutedDepartureStation)} to 
          ${this.readStation(this.reroutedArrivalStation)} has been re-routed. 
          The flight now departs from ${this.readStation(this.departureStation)}
          at ${this.convertTime(this.departureTime)}, and arrives 
          ${this.readStation(this.arrivalStation)} at ${this.convertTime(this.arrivalTime)} 
      `}
      ${dayDiff > 0 ? dayDiff === 1 ? " next day." : ` ${dayDiff} days later.` : ""}
      ${isNonstop ? ", nonstop" : layoverStopoverStringArray}.

    `;
  }

  //the answer in both cases will be 3

  // Maintain content polarity between text read by screen reader and visual content.
  render() {
    // ${this.reroutedDepartureStation !== 'undefined' ? `Flight ${this.readStation(this.reroutedDepartureStation)} to ${this.readStation(this.reroutedArrivalStation)} has been re-routed.` : ''}
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
        <div class="util_displayHiddenVisually" style="width: 100%">
          ${this.composeScreenReaderSummary()}
        </div>
        <div class="departure" aria-hidden="true">
          <time class="departureTime">
            <auro-datetime type="time" utc="${this.departureTime}"></auro-datetime>
          </time>
          <span class="departureStation">
            ${this.reroutedDepartureStation === 'undefined'
        ? html``
        : html`
                <span class="util_lineThrough">
                  ${this.reroutedDepartureStation}
                </span>
              `
      }
            <span>${this.departureStation}</span>
          </span>
        </div>
        <div class="slotContainer" aria-hidden="true">
          <slot></slot>
        </div>
        <div class="arrival" aria-hidden="true">
          <time class="arrivalTime">
            <auro-datetime type="time" utc="${this.arrivalTime}"></auro-datetime>
          </time>
          <span class="arrivalStation">
            ${this.reroutedArrivalStation === 'undefined'
        ? html``
        : html`
                <span class="util_lineThrough">
                  ${this.reroutedArrivalStation}
                </span>
              `
      }
            <span>${this.arrivalStation}</span>
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