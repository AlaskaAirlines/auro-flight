
  import { AuroFlight } from '../../src/auro-flight.js';

  class AuroFlightWCA extends AuroFlight {}

  if (!customElements.get("auro-flight")) {
    customElements.define("auro-flight", AuroFlightWCA);
  }

  