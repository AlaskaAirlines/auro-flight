
  import { AuroFlightMain } from '../../src/auro-flight-main.js';

  class AuroFlightMainWCA extends AuroFlightMain {}

  if (!customElements.get("auro-flight-main")) {
    customElements.define("auro-flight-main", AuroFlightMainWCA);
  }

  