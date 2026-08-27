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
 * The `auro-flight` element renders a DoT compliant Flight listing.
 * @customElement auro-flight
 *
 * This design has been tested via the Alaska Legal team for legal compliance.
 * Please DO NOT modify unit tests pertaining to DoT regulations.
 *
 * @slot default - anticipates `<auro-flightline>` instance to fill out the flight timeline
 * @slot departureHeader - Text on top of the departure station's time
 * @slot arrivalHeader - Text on top of the arrival station's time
 * @slot footer - Lower section allowing for tertiary content to be attributed to the element. Per **DoT Regulations** do NOT edit the styles contained within this slot
 * @csspart flightContainer - Apply css to the elements within the flight component container
 */
export class AuroFlight extends LitElement {
  constructor() {
    super();

    this.flights = [];
    this._ariaLabelOverride = null;
    this._flightlineAttrObserver = null;

    /** @private */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    // Set English defaults for all i18n-* attributes (initial state, no attribute present).
    // The Lit converter on each property handles restoration when an attribute is removed.
    Object.assign(this, _I18N_DEFAULTS);
  }

  static get properties() {
    return {
      /** @private — stores the consumer-supplied aria-label override */
      _ariaLabelOverride: { state: true },

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
       * Each object: `{ isStopover, arrivalStation, duration?, canceled? }`
       */
      stops: { type: Array },

      /**
       * Localize departure sentence. Template: `Departs from {station} at {time}`
       * @attr {String} i18n-departure
       * @default "Departs from {station} at {time}"
       */
      i18nDeparture: {
        type: String,
        attribute: "i18n-departure",
        converter: _i18nConverter("i18nDeparture"),
      },
      /**
       * Localize arrival sentence. Template: `arrives {station} at {time}`
       * @attr {String} i18n-arrival
       * @default "arrives {station} at {time}"
       */
      i18nArrival: {
        type: String,
        attribute: "i18n-arrival",
        converter: _i18nConverter("i18nArrival"),
      },
      /**
       * Localize next-day label. Default: `next day`
       * @attr {String} i18n-next-day
       * @default "next day"
       */
      i18nNextDay: {
        type: String,
        attribute: "i18n-next-day",
        converter: _i18nConverter("i18nNextDay"),
      },
      /**
       * Localize multi-day label. Template: `{count} days later`
       * @attr {String} i18n-days-later
       * @default "{count} days later"
       */
      i18nDaysLater: {
        type: String,
        attribute: "i18n-days-later",
        converter: _i18nConverter("i18nDaysLater"),
      },
      /**
       * Localize nonstop label. Default: `nonstop`
       * @attr {String} i18n-nonstop
       * @default "nonstop"
       */
      i18nNonstop: {
        type: String,
        attribute: "i18n-nonstop",
        converter: _i18nConverter("i18nNonstop"),
      },
      /**
       * Localize stop label for non-last stop. Template: `with a stop in {station}`
       * @attr {String} i18n-stopover
       * @default "with a stop in {station}"
       */
      i18nStopover: {
        type: String,
        attribute: "i18n-stopover",
        converter: _i18nConverter("i18nStopover"),
      },
      /**
       * Localize stop label for last stop. Template: `and with a stop in {station}`
       * @attr {String} i18n-last-stopover
       * @default "and with a stop in {station}"
       */
      i18nLastStopover: {
        type: String,
        attribute: "i18n-last-stopover",
        converter: _i18nConverter("i18nLastStopover"),
      },
      /**
       * Localize layover with duration (non-last). Template: `with a layover in {station} for {duration}`
       * @attr {String} i18n-layover
       * @default "with a layover in {station} for {duration}"
       */
      i18nLayover: {
        type: String,
        attribute: "i18n-layover",
        converter: _i18nConverter("i18nLayover"),
      },
      /**
       * Localize layover without duration (non-last). Template: `with a layover in {station}`
       * @attr {String} i18n-layover-no-duration
       * @default "with a layover in {station}"
       */
      i18nLayoverNoDuration: {
        type: String,
        attribute: "i18n-layover-no-duration",
        converter: _i18nConverter("i18nLayoverNoDuration"),
      },
      /**
       * Localize layover with duration (last). Template: `and with a layover in {station} for {duration}`
       * @attr {String} i18n-last-layover
       * @default "and with a layover in {station} for {duration}"
       */
      i18nLastLayover: {
        type: String,
        attribute: "i18n-last-layover",
        converter: _i18nConverter("i18nLastLayover"),
      },
      /**
       * Localize layover without duration (last). Template: `and with a layover in {station}`
       * @attr {String} i18n-last-layover-no-duration
       * @default "and with a layover in {station}"
       */
      i18nLastLayoverNoDuration: {
        type: String,
        attribute: "i18n-last-layover-no-duration",
        converter: _i18nConverter("i18nLastLayoverNoDuration"),
      },
      /**
       * Localize reroute opener. Template: `Flight {origin} to {destination} has been re-routed.`
       * @attr {String} i18n-reroute-announcement
       * @default "Flight {origin} to {destination} has been re-routed."
       */
      i18nRerouteAnnouncement: {
        type: String,
        attribute: "i18n-reroute-announcement",
        converter: _i18nConverter("i18nRerouteAnnouncement"),
      },
      /**
       * Localize rerouted departure. Template: `The flight now departs from {station} at {time}`
       * @attr {String} i18n-rerouted-departure
       * @default "The flight now departs from {station} at {time}"
       */
      i18nReroutedDeparture: {
        type: String,
        attribute: "i18n-rerouted-departure",
        converter: _i18nConverter("i18nReroutedDeparture"),
      },
      /**
       * Localize rerouted arrival. Template: `and arrives {station} at {time}`
       * @attr {String} i18n-rerouted-arrival
       * @default "and arrives {station} at {time}"
       */
      i18nReroutedArrival: {
        type: String,
        attribute: "i18n-rerouted-arrival",
        converter: _i18nConverter("i18nReroutedArrival"),
      },
      /**
       * Localize canceled label. Default: `canceled`
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
          white-space: nowrap;
          border: 0;
          pointer-events: none;
        }
      `,
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-flight"] - The name of the element that you want to register.
   * @example
   * AuroFlight.register("custom-flight") // registers as <custom-flight/>
   */
  static register(name = "auro-flight") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroFlight);
  }

  /**
   * Builds the full aria-label — the single complete announcement read by screen readers on card entry.
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
   * @param {number} duration - Number that defines duration of flight in minutes.
   * @returns {string} Number converted to hours and min string for UI.
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
