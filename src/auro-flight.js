// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
// If use litElement base class
import { css, html, LitElement } from "lit";
import { interpolate } from "../util/i18n.js";
import { convertTime, getDateDifference, readStation } from "../util/util.js";
import colorFlightCss from "./styles/color-flight.scss";
import styleCss from "./styles/style-flight.scss";
import tokensCss from "./styles/tokens.scss";

import "@aurodesignsystem/auro-flightline";

import "./auro-flight-header.js";
import "./auro-flight-main.js";

// English defaults for all i18n-* attributes — single source of truth.
// Used in the constructor (initial state) and in the Lit converter (restoration
// when an attribute is removed after being set).
const _I18N_DEFAULTS = {
  i18nDeparture: "Departs from {station} at {time}",
  i18nArrival: "arrives {station} at {time}",
  i18nNextDay: "next day",
  i18nDaysLater: "{count} days later",
  i18nNonstop: "nonstop",
  i18nStopover: "with a stop in {station}",
  i18nLastStopover: "and with a stop in {station}",
  i18nLayover: "with a layover in {station} for {duration}",
  i18nLayoverNoDuration: "with a layover in {station}",
  i18nLastLayover: "and with a layover in {station} for {duration}",
  i18nLastLayoverNoDuration: "and with a layover in {station}",
  i18nRerouteAnnouncement:
    "Flight {origin} to {destination} has been re-routed.",
  i18nReroutedDeparture: "The flight now departs from {station} at {time}",
  i18nReroutedArrival: "and arrives {station} at {time}",
  i18nCanceled: "canceled",
};

// Returns a Lit converter that restores the English default when an i18n-*
// attribute is removed (null) or cleared (empty string).
const _i18nConverter = (key) => ({
  fromAttribute: (v) => v || _I18N_DEFAULTS[key],
});

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Shows one flight in a list of results, with its times, stations, stops, and duration, in a layout built to meet U.S. Department of Transportation (DoT) disclosure rules.
 *
 * **Key capabilities**
 * - **Screen reader summary**: Always on. The element builds one announcement from the flight data, and `aria-label` replaces it.
 * - **Localized announcements**: Set the `i18n-*` attributes to change the announced text.
 * - **Reroutes**: Set `reroutedDepartureStation` or `reroutedArrivalStation` to show the new station next to the struck-through original.
 * - **Disclosures**: Add required legal text to the `footer` slot.
 *
 * **Example**
 * ```html
 * <auro-flight
 *   flights='["AS 1436"]'
 *   duration="161"
 *   departureTime="2022-07-13T12:15:00-07:00"
 *   departureStation="SEA"
 *   arrivalTime="2022-07-13T14:56:00-07:00"
 *   arrivalStation="LAX">
 *   <auro-flightline></auro-flightline>
 * </auro-flight>
 * ```
 * @summary A flight result with times, stations, stops, duration, and localizable screen reader text.
 * @customElement auro-flight
 *
 * This design has been tested via the Alaska Legal team for legal compliance.
 * Please DO NOT modify unit tests pertaining to DoT regulations.
 *
 * @slot default - The `<auro-flightline>` element that draws the timeline between the two stations. Add an `<auro-flight-segment>` inside it for each stop.
 * @slot departureHeader - Text shown above the departure time, such as a scheduled time.
 * @slot arrivalHeader - Text shown above the arrival time, such as a scheduled time.
 * @slot footer - Content shown below the flight, such as a government approval or operating carrier disclosure. Don't change the styles of this content, because DoT regulations set them. Screen readers read it after the flight summary, so hide any part that repeats the summary with `aria-hidden="true"`.
 * @csspart flightContainer - The `<section>` element that wraps the whole flight listing.
 * @csspart flightType - The element that shows the flight number, or "Multiple flights" for more than one.
 * @csspart durationContainer - The element that holds the duration and the day change label.
 * @csspart departureTime - The element that shows the departure time.
 * @csspart arrivalTime - The element that shows the arrival time.
 * @csspart departureStation - The element that shows the departure station, and the new station after a reroute.
 * @csspart arrivalStation - The element that shows the arrival station, and the new station after a reroute.
 * @cssprop --ds-auro-flight-footer-text-color - Color of the text in the `footer` slot.
 * @cssprop --ds-auro-flight-header-days-changed-text-color - Color of the day change label, such as +1 day.
 * @cssprop --ds-auro-flight-header-text-color - Color of the flight numbers and duration shown above the stations.
 * @cssprop --ds-auro-flight-cancelled-station-text-color - Color of the original station code that is struck through after a reroute.
 * @cssprop --ds-auro-flight-station-text-color - Color of the departure and arrival station codes.
 * @cssprop --ds-auro-flight-time-text-color - Color of the departure and arrival times.
 */
export class AuroFlight extends LitElement {
  constructor() {
    super();

    /** @type {string[]} */
    this.flights = [];
    this._ariaLabelOverride = null;
    this._flightlineObserver = null;
    this._ariaLabelObserver = null;
    this._flightlineAttrObserver = null;

    /** @private */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    // Set English defaults for all i18n-* attributes (initial state, no attribute present).
    // The Lit converter on each property handles restoration when an attribute is removed.
    Object.assign(this, _I18N_DEFAULTS);
  }

  static get properties() {
    return {
      /** @private Stores the consumer-supplied `aria-label` override. */
      _ariaLabelOverride: { state: true, attribute: false },

      /**
       * Sets the airport code of the arrival station, such as `LAX`. Screen readers read each letter separately.
       */
      arrivalStation: { type: String, attribute: "arrivalstation" },

      /**
       * Sets the arrival date and time in ISO 8601 format, such as `2022-04-13T12:30:00-04:00`. The day change label and the time read to screen readers use the date and time as written, without converting time zones.
       */
      arrivalTime: { type: String, attribute: "arrivaltime" },

      /**
       * Sets the airport code of the departure station, such as `SEA`. Screen readers read each letter separately.
       */
      departureStation: { type: String, attribute: "departurestation" },

      /**
       * Sets the departure date and time in ISO 8601 format, such as `2022-04-13T12:30:00-04:00`. The day change label and the time read to screen readers use the date and time as written, without converting time zones.
       */
      departureTime: { type: String, attribute: "departuretime" },

      /**
       * Sets the total travel time in minutes. A value of `161` shows as `2h 41m`.
       */
      duration: { type: Number },

      /**
       * Sets the flight numbers to show, such as `["AS 1436"]`. Shows the number for one flight, or "Multiple flights" for more than one.
       * @type {string[]}
       */
      flights: { type: Array },

      /**
       * Sets the airport code the flight now arrives at after a reroute, such as `AVP`. Shows the new code next to the original, which is struck through.
       */
      reroutedArrivalStation: { type: String, attribute: "reroutedarrivalstation" },

      /**
       * Sets the airport code the flight now departs from after a reroute, such as `PDX`. Shows the new code next to the original, which is struck through.
       */
      reroutedDepartureStation: { type: String, attribute: "rerouteddeparturestation" },

      /**
       * Sets the stops that screen readers announce, as an array of objects with `isStopover`, `arrivalStation`, and optional `duration` and `canceled`. Stops appear on screen only when you also add an `<auro-flight-segment>` for each one. Set `isStopover` to `true` for a stop and `false` for a layover.
       * @type {Object[]}
       */
      stops: { type: Array },

      /**
       * Sets the sentence read for the departure station and time when the flight isn't rerouted. Use `{station}` and `{time}` as placeholders.
       * @attr {String} i18n-departure
       * @default "Departs from {station} at {time}"
       */
      i18nDeparture: {
        type: String,
        attribute: "i18n-departure",
        converter: _i18nConverter("i18nDeparture"),
      },
      /**
       * Sets the sentence read after the departure sentence, for the arrival station and time, when the flight isn't rerouted. Use `{station}` and `{time}` as placeholders.
       * @attr {String} i18n-arrival
       * @default "arrives {station} at {time}"
       */
      i18nArrival: {
        type: String,
        attribute: "i18n-arrival",
        converter: _i18nConverter("i18nArrival"),
      },
      /**
       * Sets the text read when the flight arrives one day after it departs.
       * @attr {String} i18n-next-day
       * @default "next day"
       */
      i18nNextDay: {
        type: String,
        attribute: "i18n-next-day",
        converter: _i18nConverter("i18nNextDay"),
      },
      /**
       * Sets the text read when the flight arrives two or more days after it departs. Use `{count}` as the placeholder for the number of days.
       * @attr {String} i18n-days-later
       * @default "{count} days later"
       */
      i18nDaysLater: {
        type: String,
        attribute: "i18n-days-later",
        converter: _i18nConverter("i18nDaysLater"),
      },
      /**
       * Sets the text read when the flight has no `stops`.
       * @attr {String} i18n-nonstop
       * @default "nonstop"
       */
      i18nNonstop: {
        type: String,
        attribute: "i18n-nonstop",
        converter: _i18nConverter("i18nNonstop"),
      },
      /**
       * Sets the text read for each stopover except the last. Use `{station}` as the placeholder for the stop's airport code.
       * @attr {String} i18n-stopover
       * @default "with a stop in {station}"
       */
      i18nStopover: {
        type: String,
        attribute: "i18n-stopover",
        converter: _i18nConverter("i18nStopover"),
      },
      /**
       * Sets the text read for the last stopover. Use `{station}` as the placeholder for the stop's airport code.
       * @attr {String} i18n-last-stopover
       * @default "and with a stop in {station}"
       */
      i18nLastStopover: {
        type: String,
        attribute: "i18n-last-stopover",
        converter: _i18nConverter("i18nLastStopover"),
      },
      /**
       * Sets the text read for each layover that has a `duration`, except the last. Use `{station}` and `{duration}` as placeholders.
       * @attr {String} i18n-layover
       * @default "with a layover in {station} for {duration}"
       */
      i18nLayover: {
        type: String,
        attribute: "i18n-layover",
        converter: _i18nConverter("i18nLayover"),
      },
      /**
       * Sets the text read for each layover without a `duration`, except the last. Use `{station}` as the placeholder for the airport code.
       * @attr {String} i18n-layover-no-duration
       * @default "with a layover in {station}"
       */
      i18nLayoverNoDuration: {
        type: String,
        attribute: "i18n-layover-no-duration",
        converter: _i18nConverter("i18nLayoverNoDuration"),
      },
      /**
       * Sets the text read for the last layover when it has a `duration`. Use `{station}` and `{duration}` as placeholders.
       * @attr {String} i18n-last-layover
       * @default "and with a layover in {station} for {duration}"
       */
      i18nLastLayover: {
        type: String,
        attribute: "i18n-last-layover",
        converter: _i18nConverter("i18nLastLayover"),
      },
      /**
       * Sets the text read for the last layover when it has no `duration`. Use `{station}` as the placeholder for the airport code.
       * @attr {String} i18n-last-layover-no-duration
       * @default "and with a layover in {station}"
       */
      i18nLastLayoverNoDuration: {
        type: String,
        attribute: "i18n-last-layover-no-duration",
        converter: _i18nConverter("i18nLastLayoverNoDuration"),
      },
      /**
       * Sets the opening sentence read when a flight is rerouted. Use `{origin}` and `{destination}` as placeholders for the original stations.
       * @attr {String} i18n-reroute-announcement
       * @default "Flight {origin} to {destination} has been re-routed."
       */
      i18nRerouteAnnouncement: {
        type: String,
        attribute: "i18n-reroute-announcement",
        converter: _i18nConverter("i18nRerouteAnnouncement"),
      },
      /**
       * Sets the sentence read for the departure of a rerouted flight. Use `{station}` and `{time}` as placeholders.
       * @attr {String} i18n-rerouted-departure
       * @default "The flight now departs from {station} at {time}"
       */
      i18nReroutedDeparture: {
        type: String,
        attribute: "i18n-rerouted-departure",
        converter: _i18nConverter("i18nReroutedDeparture"),
      },
      /**
       * Sets the sentence read for the arrival of a rerouted flight. Use `{station}` and `{time}` as placeholders.
       * @attr {String} i18n-rerouted-arrival
       * @default "and arrives {station} at {time}"
       */
      i18nReroutedArrival: {
        type: String,
        attribute: "i18n-rerouted-arrival",
        converter: _i18nConverter("i18nReroutedArrival"),
      },
      /**
       * Sets the text added after a canceled stop, or after the nonstop text when the `<auro-flightline>` has the `canceled` attribute.
       * @attr {String} i18n-canceled
       * @default "canceled"
       */
      i18nCanceled: {
        type: String,
        attribute: "i18n-canceled",
        converter: _i18nConverter("i18nCanceled"),
      },
    };
  }

  static get styles() {
    return [
      styleCss,
      colorFlightCss,
      tokensCss,
      css`
        .sr-label {
          position: absolute;
          /* 100% x 100% so VoiceOver's focus rectangle covers the entire card,
             not a 1px dot in the corner. pointer-events: none prevents the
             invisible span from intercepting clicks across the card. */
          width: 100%;
          height: 100%;
          padding: 0;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          clip-path: inset(50%);
          white-space: nowrap;
          border: 0;
          pointer-events: none;
        }
      `,
    ];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-flight"] - The tag name to register the element under.
   * @example
   * AuroFlight.register("custom-flight") // registers as <custom-flight>
   */
  static register(name = "auro-flight") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroFlight);
  }

  /**
   * Builds the full `aria-label`, the single announcement that screen readers read when they reach the listing.
   * @private
   */
  _buildAriaLabel() {
    // Lit passes the string "undefined" when a property binding has no value —
    // guard against it so an unset reroute station isn't treated as a reroute.
    const hasDepartureReroute =
      this.reroutedDepartureStation &&
      this.reroutedDepartureStation !== "undefined";
    const hasArrivalReroute =
      this.reroutedArrivalStation &&
      this.reroutedArrivalStation !== "undefined";
    const hasReroute = hasDepartureReroute || hasArrivalReroute;

    const depStation = readStation(this.departureStation);
    const depTime = convertTime(this.departureTime);
    const arrStation = readStation(this.arrivalStation);
    const arrTime = convertTime(this.arrivalTime);

    const flights = this.flights ?? [];
    const flightId =
      flights.length === 1
        ? `Flight ${Array.from(flights[0])
            .filter((c) => c !== " ")
            .join(" ")}`
        : flights.length === 0
          ? ""
          : "Multiple flights";

    let summary;

    if (!hasReroute) {
      summary = interpolate(this.i18nDeparture, {
        station: depStation,
        time: depTime,
      });
      summary += ", ";
      summary += interpolate(this.i18nArrival, {
        station: arrStation,
        time: arrTime,
      });
    } else {
      const reroutedDep = hasDepartureReroute
        ? readStation(this.reroutedDepartureStation)
        : depStation;
      const reroutedArr = hasArrivalReroute
        ? readStation(this.reroutedArrivalStation)
        : arrStation;
      summary = interpolate(this.i18nRerouteAnnouncement, {
        origin: depStation,
        destination: arrStation,
      });
      summary += " ";
      summary += interpolate(this.i18nReroutedDeparture, {
        station: reroutedDep,
        time: depTime,
      });
      summary += ", ";
      summary += interpolate(this.i18nReroutedArrival, {
        station: reroutedArr,
        time: arrTime,
      });
    }

    const dayDiff = getDateDifference(this.departureTime, this.arrivalTime);
    if (dayDiff === 1) {
      summary += `, ${this.i18nNextDay}`;
    } else if (dayDiff > 1) {
      summary += `, ${interpolate(this.i18nDaysLater, { count: dayDiff })}`;
    }

    if (this.stops?.length > 0) {
      const stopStrings = this.stops.map((segment, idx) => {
        const isLast = idx === this.stops.length - 1;
        const station = readStation(segment.arrivalStation);
        let key;
        if (segment.isStopover) {
          key = isLast ? this.i18nLastStopover : this.i18nStopover;
        } else if (segment.duration) {
          key = isLast ? this.i18nLastLayover : this.i18nLayover;
        } else {
          key = isLast
            ? this.i18nLastLayoverNoDuration
            : this.i18nLayoverNoDuration;
        }
        let stopText = interpolate(key, {
          station,
          duration: segment.duration ?? "",
        });
        if (segment.canceled) stopText += ` ${this.i18nCanceled}`;
        return stopText;
      });
      summary += ", ";
      summary += stopStrings.join(", ");
    } else {
      const flightline = this.querySelector(
        "auro-flightline, [auro-flightline]",
      );
      summary += flightline?.hasAttribute("canceled")
        ? `, ${this.i18nNonstop} ${this.i18nCanceled}`
        : `, ${this.i18nNonstop}`;
    }

    if (this.duration != null && !Number.isNaN(Number(this.duration))) {
      summary += `, ${this.convertDuration(this.duration)}`;
    }

    return flightId ? `${flightId}, ${summary}` : summary;
  }

  connectedCallback() {
    super.connectedCallback();
    // All three observers watch light DOM or the host element — no shadow DOM needed,
    // so they can be (re)started here on every connect, not just the first render.
    this._applyFlightlineAriaHidden();
    if (!this._flightlineObserver) {
      this._flightlineObserver = new MutationObserver(() =>
        this._applyFlightlineAriaHidden(),
      );
    }
    this._flightlineObserver.observe(this, { childList: true });

    if (!this._ariaLabelObserver) {
      this._ariaLabelObserver = new MutationObserver(() =>
        this._consumeAriaLabel(),
      );
    }
    this._ariaLabelObserver.observe(this, {
      attributes: true,
      attributeFilter: ["aria-label"],
    });
    this._consumeAriaLabel();
  }

  firstUpdated() {
    this.runtimeUtils.handleComponentTagRename(this, "auro-flight");

    const slot = this.shadowRoot.querySelector("#footer");
    const slotWrapper = this.shadowRoot.querySelector("#flightFooter");

    const main = this.shadowRoot.querySelector("auro-flight-main");
    main.exposeCssParts();

    const header = this.shadowRoot.querySelector("auro-flight-header");
    header.exposeCssParts();

    if (!this.unformatted && slot.assignedNodes().length === 0) {
      slotWrapper.classList.remove("flightFooter");
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._flightlineObserver?.disconnect();
    this._flightlineAttrObserver?.disconnect();
    this._ariaLabelObserver?.disconnect();
  }

  /** @private */
  _consumeAriaLabel() {
    if (this.hasAttribute("aria-label")) {
      const value = this.getAttribute("aria-label");
      // Treat "" the same as absent — empty string would produce aria-label="" which silences AT without warning.
      this._ariaLabelOverride = value || null;
      this.removeAttribute("aria-label");
    }
  }

  /** @private */
  _applyFlightlineAriaHidden() {
    const flightline = this.querySelector("auro-flightline, [auro-flightline]");
    if (flightline && !flightline.hasAttribute("aria-hidden")) {
      flightline.setAttribute("aria-hidden", "true");
    }
    // Re-observe the current flightline for canceled changes so _buildAriaLabel()
    // stays in sync when cancellation state is updated after initial render.
    if (!this._flightlineAttrObserver) {
      this._flightlineAttrObserver = new MutationObserver(() =>
        this.requestUpdate(),
      );
    }
    this._flightlineAttrObserver.disconnect();
    if (flightline) {
      this._flightlineAttrObserver.observe(flightline, {
        attributes: true,
        attributeFilter: ["canceled"],
      });
    }
  }

  /**
   * @private
   * @param {number} duration - The flight duration in minutes.
   * @returns {string} The duration as hours and minutes, such as "2h 41m".
   */
  convertDuration(duration) {
    const hour = 60;
    const hours = `${Number.parseInt(duration / hour, 10)}h`;
    const calcMins = Number.parseInt(duration % hour, 10);
    const minsString = calcMins === 0 ? "" : `${calcMins}m`;

    return minsString ? `${hours} ${minsString}` : hours;
  }

  render() {
    const label = this._ariaLabelOverride ?? this._buildAriaLabel();
    return html`
      <section part="flightContainer">
        <!-- Zero-width space keeps the element non-empty so Safari VoiceOver doesn't skip it;
             aria-label provides the announcement without VoiceOver pronouncing punctuation as "full stop". -->
        <span role="text" class="sr-label" aria-label="${label}">&#8203;</span>
        <auro-flight-header
          flights=${JSON.stringify(this.flights ?? [])}
          duration=${this.duration != null && !Number.isNaN(Number(this.duration)) ? this.convertDuration(this.duration) : ""}
          departureTime=${this.departureTime}
          arrivalTime=${this.arrivalTime}
        >
        </auro-flight-header>
        <div class="headerContainer">
          <slot name="departureHeader"></slot>
          <slot name="arrivalHeader"></slot>
        </div>
        <auro-flight-main
          arrivalTime=${this.arrivalTime}
          arrivalStation=${this.arrivalStation}
          departureTime=${this.departureTime}
          departureStation=${this.departureStation}
          reroutedArrivalStation=${this.reroutedArrivalStation}
          reroutedDepartureStation=${this.reroutedDepartureStation}
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
