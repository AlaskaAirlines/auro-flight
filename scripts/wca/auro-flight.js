
import { AuroFlight } from '../../src/auro-flight.js';

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
class AuroFlightWCA extends AuroFlight {}

if (!customElements.get("auro-flight")) {
  customElements.define("auro-flight", AuroFlightWCA);
}
