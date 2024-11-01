
  import { AuroFlightHeader } from '../../src/auro-flight-header.js';

  class AuroFlightHeaderWCA extends AuroFlightHeader {}

  if (!customElements.get("auro-flight-header")) {
    customElements.define("auro-flight-header", AuroFlightHeaderWCA);
  }

  