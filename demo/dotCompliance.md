# DoT compliance

## Change of Gauge

[Change of Gauge flights](https://www.travelweekly.com/Mark-Pestronk/Agents-must-identify-change-of-gauge-services) are flights with the same flight number, but with an equipment swap at a intermediate stop.

<auro-alerts information>Change of Gauge flights are a pain point for guests with physical disabilities whom may not expect to need to depart the aircraft. Even with the physical change of planes, these flights are still considered Direct. Qantas runs a COG JFK-SYD.</auro-alerts>

The following illustrates change of gauge flight, from SEA to SJD.

See [documentation](https://auro.alaskaair.com/components/auro/flightline/api) for additional information regarding the `<auro-flight-segment>` API.

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 200"]'
    duration="4h 20m"
    daysChanged="0"
    departureTime="6:00 am"
    departureStation="SEA"
    arrivalTime="11:20 am"
    arrivalStation="SJD"
    >
      <auro-flightline>
        <auro-flight-segment iata="LAX">
      </auro-flightline>
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 200"]'
    duration="4h 20m"
    daysChanged="0"
    departureTime="6:00 am"
    departureStation="SEA"
    arrivalTime="11:20 am"
    arrivalStation="SJD"
    >
      <auro-flightline>
        <auro-flight-segment iata="LAX">
      </auro-flightline>

  </auro-flight>
  ```

</auro-accordion>


## Regional Nonstop

AlaskaHorizon, AlaskaSkyWest, American Eagle, Delta Connection, QantasLink, and United Express fares are sold as mainline tickets operated by Part 131 air carriers doing business as the mainline.

DoT regulates the disclosure of this instance as illustrated in this example flight from ALW to SEA (The font color and size of the stations match the font color and size of the disclosure):

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 2087"]'
    duration="1h 3m"
    daysChanged="0"
    departureTime="5:25 am"
    departureStation="ALW"
    arrivalTime="6:28 am"
    arrivalStation="SEA"
    >
      <auro-flightline>
      </auro-flightline>
      <span slot="footer">
        <auro-icon category="logos" name="tail-AS" style="width: 32px"></auro-icon>
        AS 2087 is operated by Horizon Air as AlaskaHorizon
      </span>

  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 2087"]'
    duration="1h 3m"
    daysChanged="0"
    departureTime="5:25 am"
    departureStation="ALW"
    arrivalTime="6:28 am"
    arrivalStation="SEA"
    >
      <auro-flightline>
      </auro-flightline>
      <span slot="footer">
        <auro-icon category="logos" name="tail-AS" style="width: 32px"></auro-icon>
        AS 2087 is operated by Horizon Air as AlaskaHorizon
      </span>

  </auro-flight>
  ```

</auro-accordion>
