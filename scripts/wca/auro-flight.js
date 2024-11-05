
import { AuroFlight } from '../../src/auro-flight.js';

/**
 * The auro-flight element renders a DoT compliant Flight listing.
 * This design has been tested via the Alaska Legal team for legal compliance.
 * Please DO NOT modify unit tests pertaining to DoT regulations.
 */
class AuroFlightWCA extends AuroFlight {}

if (!customElements.get("auro-flight")) {
  customElements.define("auro-flight", AuroFlightWCA);
}
