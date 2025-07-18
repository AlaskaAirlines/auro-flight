// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

// If use litElement base class
import { LitElement, css } from "lit";
import { html } from 'lit/static-html.js';

import styleFlightMainCss from "./styles/style-flight-main-css.js";
import colorFlightMainCss from "./styles/color-flight-main-css.js";
import tokensCss from "./styles/tokens-css.js";

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroDatetime } from '@aurodesignsystem/auro-datetime/src/auro-datetime.js';
import datetimeVersion from './datetimeVersion.js';

import { getDateDifference } from '../util/util.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-flight-main element renders the middle 'frame' of the auro-flight component with the auro-flightline.
 * DoT: STATION SIZE AND COLOR MUST BE IDENTICAL TO DISCLOSURE SIZE AND COLOR!
 *
 * @attr {Array} stops - Array of objects representing stopovers or layovers: "isStopover": bool, "arrivalStation": string, "duration": string ["123hr 123m"] (layover only). This content will not be used in the UI, but only constructs the a11y conversational phrase for screen readers and has no effect on the `auro-flight-segment` content.
 * @attr {Array} flights - Array of flight numbers `['AS 123', 'EK 432']`
 * @attr {Number} duration - String for the duration. `505`
 * @attr {String} arrivalTime - ISO 8601 time of arrival, e.g. `2022-04-13T12:30:00-04:00`
 * @attr {String} arrivalStation - Station of arrival, e.g. `SEA`
 * @attr {String} departureTime - ISO 8601 time of departure, e.g. `2022-04-13T12:30:00-04:00`
 * @attr {String} departureStation - Station of departure, e.g. `PVD`
 * @attr {String} reroutedDepartureStation - Station of rerouted departure, e.g. `PDX`
 * @attr {String} reroutedArrivalStation - Station of rerouted arrival, e.g. `AVP`
 * @slot default - anticipates `<auro-flight-segment>` instances
 * @csspart arrivalContainer - Apply css to the elements within the arrival container
 * @csspart departureContainer - Apply css to the elements within the departure container
 * @csspart arrivalTime - Apply css to the elements to the arrival time
 * @csspart departureTime - Apply css to the elements to the departure time
 * @csspart arrivalStation - Apply css to the elements to the arrival station
 * @csspart departureStation - Apply css to the elements to the departure station
 */

// build the component class
export class AuroFlightMain extends LitElement {

  // function to define props used within the scope of this component
  static get properties() {
    return {
      stops:                    { type: Array },
      flights:                  { type: Array },
      duration:                 { type: Number },
      arrivalTime:              { type: String },
      arrivalStation:           { type: String },
      departureTime:            { type: String },
      departureStation:         { type: String },
      reroutedArrivalStation:   { type: String },
      reroutedDepartureStation: { type: String },
    };
  }

  static get styles() {
    return [
      css`${styleFlightMainCss}`,
      css`${colorFlightMainCss}`,
      css`${tokensCss}`,
    ];
  }

  constructor() {
    super();

    /**
     * Time template object used by convertTime() method.
     */
    this.timeTemplate = {
      hour: "2-digit",
      minute: "2-digit",
    };

    this.template = {};

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.datetimeTag = versioning.generateTag('auro-datetime', datetimeVersion, AuroDatetime);
  }

  /**
   * Exposes CSS parts for styling from parent components.
   * @returns {void}
   */
  exposeCssParts() {
    this.setAttribute('exportparts', 'departureTime:departureTime, arrivalTime:arrivalTime, departureStation:departureStation, arrivalStation:arrivalStation');
  }

  /**
   * @private
   * @param {string} time - UTC time.
   * @returns Localized time based from UTC string.
   */
  convertTime(time) {
    const slicedTime = time.slice(0, -6); // eslint-disable-line no-magic-numbers
    const newTime = new Date(slicedTime);
    const localizedTime = newTime.toLocaleString('en-US', this.timeTemplate).replace(/^0+/u, '');

    return localizedTime;
  }

  /**
   * @private
   * @param {string} station Airport code ex: SEA.
   * @returns Mutated string.
   */
  readStation(station) {
    return Array.from(station).join(' ');
  }

  /**
   * @param {number} idx A numbered index correlated to current stop.
   * @private
   * @returns A comma string or an empty string.
   */
  addComma(idx) {
    return idx === this.stops.length - 1 ? '' : ', ';
  }

  /**
   * @private
   * @returns Composed screen reader summary.
   */
  composeScreenReaderSummary() {
    const hasDepartureReroute = this.reroutedDepartureStation && this.reroutedDepartureStation !== 'undefined';
    const hasArrivalReroute = this.reroutedArrivalStation && this.reroutedArrivalStation !== 'undefined';
    const hasReroute = hasDepartureReroute || hasArrivalReroute;
    const dayDiff = getDateDifference(this.departureTime, this.arrivalTime);
    const daysFromDeparture = dayDiff === 1 ? 'next day' : `${dayDiff} days later`;
    const secondToLastIndex = 2;
    const layoverStopoverStringArray = this.stops
      ? this.stops.map((segment, idx) => html`
      with a ${segment.isStopover ? 'stop' : 'layover'} in ${this.readStation(segment.arrivalStation)}
      ${segment.duration ? `, for ${segment.duration}` : ''}${this.addComma(idx)}
      ${idx === this.stops.length - secondToLastIndex ? ' and ' : ''}`)
      : ', nonstop';

    const departureStation = this.readStation(this.departureStation);
    const departureTime = this.convertTime(this.departureTime);
    const arrivalStation = this.readStation(this.arrivalStation);
    const arrivalTime = this.convertTime(this.arrivalTime);
    let reroutedDepartureStation = '';
    let reroutedArrivalStation = '';

    if (hasDepartureReroute) {
      reroutedDepartureStation = this.readStation(this.reroutedDepartureStation);
    }

    if (hasArrivalReroute) {
      reroutedArrivalStation = this.readStation(this.reroutedArrivalStation);
    }

    return html`
      ${!hasReroute
        ? `Departs from ${departureStation} at ${departureTime}, arrives ${arrivalStation} at ${arrivalTime}`
        : `Flight ${departureStation} to ${arrivalStation} has been re-routed.
        The flight now departs from ${hasDepartureReroute ? reroutedDepartureStation : departureStation} at
        ${departureTime},
        and arrives  ${hasArrivalReroute ? reroutedArrivalStation : arrivalStation} at ${arrivalTime}`} ${dayDiff > 0 ? `, ${daysFromDeparture}` : ''}
        ${this.stops ? ', ' : ''} ${layoverStopoverStringArray}.
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const hasDepartureReroute = this.reroutedDepartureStation && this.reroutedDepartureStation !== 'undefined';
    const hasArrivalReroute = this.reroutedArrivalStation && this.reroutedArrivalStation !== 'undefined';
    return html`
        <div class="util_displayHiddenVisually">
          ${this.composeScreenReaderSummary()}
        </div>
        <div class="departure" aria-hidden="true" part="departureContainer">
          <time class="departureTime heading-md" part="departureTime">
            <${this.datetimeTag} type="tzTime" setDate="${this.departureTime}"></${this.datetimeTag}>
          </time>
          <span class="departureStation" part="departureStation">
            ${hasDepartureReroute
              ? html`
                <span class="body-default">
                  ${this.reroutedDepartureStation}
                </span>`
              : html``}

            <span class=${hasDepartureReroute ? "util_lineThrough body-default" : "body-default"}>
              ${this.departureStation}
            </span>
          </span>
        </div>
        <div class="slotContainer" aria-hidden="true">
          <slot></slot>
        </div>
        <div class="arrival" aria-hidden="true" part="arrivalContainer">
          <time class="arrivalTime heading-md" part="arrivalTime">
            <${this.datetimeTag} type="tzTime" setDate="${this.arrivalTime}"></${this.datetimeTag}>
          </time>
          <span class="arrivalStation body-default" part="arrivalStation">
            ${hasArrivalReroute
              ? html`
                <span>
                  ${this.reroutedArrivalStation}
                </span>`
              : html``}

            <span class=${hasArrivalReroute ? "util_lineThrough body-default" : "body-default"}>
              ${this.arrivalStation}
            </span>
          </span>
        </div>
    `;
  }
}

/* eslint max-statements: ["error", 18] */
if (!customElements.get("auro-flight-main")) {
  customElements.define("auro-flight-main", AuroFlightMain);
}
