# DoT compliance

## Change of Gauge

[Change of Gauge flights](https://www.travelweekly.com/Mark-Pestronk/Agents-must-identify-change-of-gauge-services)  are flights with the same flight number, but with an equipment swap at a intermediate stop.

This is a pain point for guests with physical disabilities whom may not expect to need to depart the aircraft. Even with the physical change of planes, these flights are still considered Direct. Qantas runs a COG JFK-SYD.

The following illustrates change of gauge flight, for example, SEA to SJD.

See [documentation](https://auro.alaskaair.com/components/auro/flightline/api) for additional information regarding the `<auro-flight-segment>` API.

<auro-alerts information>This is a pain point for guests with physical disabilities whom may not expect to need to depart the aircraft. Even with the physical change of planes, these flights are still considered Direct. Qantas runs a COG JFK-SYD.</auro-alerts>

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

DoT regulates the disclosure of this instance as illustrated in this example flight from ALW to SEA

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

<!-- ## Flight under 1 hour / Shuttle Market (SEAPDX)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 2326"]'
    duration="0h 49m"
    daysChanged="0"
    departureTime="6:00 am"
    departureStation="SEA"
    arrivalTime="6:49 am"
    arrivalStation="PDX"
    >
      <auro-flightline>
      </auro-flightline>
      <span slot="footer"><auro-icon category="logos" name="tail-AS" style="width: 32px"></auro-icon>AS 2326 is operated by Horizon Air as AlaskaHorizon</span>
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight
      flights='["AS 2326"]'
      duration="0h 49m"
      daysChanged="0"
      departureTime="6:00 am"
      departureStation="SEA"
      arrivalTime="6:49 am"
      arrivalStation="PDX"
      >
      <auro-flightline>
      </auro-flightline>
      <span slot="footer"><auro-icon category="logos" name="tail-AS" style="width: 32px"></auro-icon>AS 2326 is operated by Horizon Air as AlaskaHorizon</span>
    </auro-flight>
  ```

</auro-accordion> -->




<!-- ## Mainline + Mainline Connection, Next Day (KOADEN)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 988", "AS 682"]'
    duration="22h 28m"
    daysChanged="1"
    departureTime="10:00 am"
    departureStation="KOA"
    arrivalTime="11:28 am"
    arrivalStation="DEN"
    >
      <auro-flightline>
        <auro-flight-segment iata="SEA" duration="1h 35m"></auro-flight-segment>
      </auro-flightline>
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight
      flights='["AS 988", "AS 682"]'
      duration="22h 28m"
      daysChanged="1"
      departureTime="10:00 am"
      departureStation="KOA"
      arrivalTime="11:28 am"
      arrivalStation="DEN"
      >
      <auro-flightline>
        <auro-flight-segment iata="SEA" duration="1h 35m"></auro-flight-segment>
      </auro-flightline>
    </auro-flight>
  ```

</auro-accordion> -->

<!-- ## Mainline + Mainline Stopover Connection (KOAADK)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 873", "AS 184"]'
    duration="22h 45m"
    daysChanged="1"
    departureTime="2:20 pm"
    departureStation="KOA"
    arrivalTime="1:05 pm"
    arrivalStation="ADK"
    >
      <auro-flightline>
        <auro-flight-segment iata="ANC" duration="1h 35m"></auro-flight-segment>
        <auro-flight-segment iata="CDB" stopover></auro-flight-segment>
      </auro-flightline>
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight
      flights='["AS 873", "AS 184"]'
      duration="22h 45m"
      daysChanged="1"
      departureTime="2:20 pm"
      departureStation="KOA"
      arrivalTime="1:05 pm"
      arrivalStation="ADK"
      >
      <auro-flightline>
        <auro-flight-segment iata="ANC" duration="1h 35m"></auro-flight-segment>
        <auro-flight-segment iata="CDB" stopover></auro-flight-segment>
      </auro-flightline>
    </auro-flight>
  ```

</auro-accordion> -->


## Mainline + Regional Connection (SEAAVP)

**Why is this example important?**

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 34", "AA 3893"]'
    duration="8h 42m"
    daysChanged="0"
    departureTime="8:10 am"
    departureStation="SEA"
    arrivalTime="7:52 pm"
    arrivalStation="AVP"
    >
      <auro-flightline>
        <auro-flight-segment iata="ORD" duration="2h 0m"></auro-flight-segment>
      </auro-flightline>
      <span slot="footer"><auro-icon category="logos" name="tail-AA" style="width: 32px"></auro-icon>AA 3893 is operated by Envoy Air on behalf of American Airlines: ORD - AVP</span>

  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight
      flights='["AS 34", "AA 3893"]'
      duration="8h 42m"
      daysChanged="0"
      departureTime="8:10 am"
      departureStation="SEA"
      arrivalTime="7:52 pm"
      arrivalStation="AVP"
      >
      <auro-flightline>
        <auro-flight-segment iata="ORD" duration="2h 0m"></auro-flight-segment>
      </auro-flightline>
      <span slot="footer"><auro-icon category="logos" name="tail-AA" style="width: 32px"></auro-icon>AA 3893 is operated by Envoy Air on behalf of American Airlines: ORD - AVP</span>
    </auro-flight>
  ```

</auro-accordion>

## Codeshare + Mainline + Regional Connection (DXBALW)

**Why is this example important?**

<div class="exampleWrapper">
  <auro-flight
    flights='["EK 231", "AS 1085", "AS 2086"]'
    duration="33h 19m"
    daysChanged="0"
    departureTime="2:25 am"
    departureStation="DXB"
    arrivalTime="11:44 pm"
    arrivalStation="ALW"
    >
      <auro-flightline>
        <auro-flight-segment iata="SEA" duration="1h 5m"></auro-flight-segment>
        <auro-flight-segment iata="LAX" duration="3h 45m"></auro-flight-segment>
      </auro-flightline>
      <span slot="footer">
        <auro-icon category="logos" name="tail-EK" style="width: 32px"></auro-icon>EK 231 is operated by Emirates: DXB - LAX<br />
        <auro-icon category="logos" name="tail-AS" style="width: 32px"></auro-icon>AS 1085 is operated by Alaska Airlines: LAX - SEA<br />
        <auro-icon category="logos" name="tail-AS" style="width: 32px"></auro-icon>AS 2086 is operated by Horizon Air as AlaskaHorizon: SEA - ALW
      </span>

  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight
      flights='["EK 231", "AS 1085", "AS 2086"]'
      duration="33h 19m"
      daysChanged="0"
      departureTime="2:25 am"
      departureStation="DXB"
      arrivalTime="11:44 pm"
      arrivalStation="ALW"
      >
      <auro-flightline>
        <auro-flight-segment iata="SEA" duration="1h 5m"></auro-flight-segment>
        <auro-flight-segment iata="LAX" duration="3h 45m"></auro-flight-segment>
      </auro-flightline>
      <span slot="footer">
        <auro-icon category="logos" name="tail-EK" style="width: 32px"></auro-icon>EK 231 is operated by Emirates: DXB - LAX<br />
        <auro-icon category="logos" name="tail-AS" style="width: 32px"></auro-icon>AS 1085 is operated by Alaska Airlines: LAX - SEA<br />
        <auro-icon category="logos" name="tail-AS" style="width: 32px"></auro-icon>AS 2086 is operated by Horizon Air as AlaskaHorizon: SEA - ALW
      </span>
    </auro-flight>
  ```
</auro-accordion>

## Single Regional, Multiple Partner (ALWCPT)

**Why is this example important?**

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 2087", "EK 230", "EK 772"]'
    duration="42h 35m"
    daysChanged="2"
    departureTime="6:00 am"
    departureStation="ALW"
    arrivalTime="10:35 am"
    arrivalStation="CPT"
    >
      <auro-flightline>
        <auro-flight-segment iata="SEA" duration="1h 5m"></auro-flight-segment>
        <auro-flight-segment iata="DXB" duration="3h 45m"></auro-flight-segment>
      </auro-flightline>
      <span slot="footer">
        <auro-icon category="logos" name="tail-AS" style="width: 32px"></auro-icon>AS 2087 is operated by Horizon Air as AlaskaHorizon: ALW - SEA<br />
        <auro-icon category="logos" name="tail-EK" style="width: 32px"></auro-icon>EK 230, 772 are operated by Emirates: SEA - DXB, DXB - CPT
      </span>

  </auro-flight>
</div>


<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight
      flights='["AS 2087", "EK 230", "EK 772"]'
      duration="42h 35m"
      daysChanged="2"
      departureTime="6:00 am"
      departureStation="ALW"
      arrivalTime="10:35 am"
      arrivalStation="CPT"
      >
      <auro-flightline>
        <auro-flight-segment iata="SEA" duration="1h 5m"></auro-flight-segment>
        <auro-flight-segment iata="DXB" duration="3h 45m"></auro-flight-segment>
      </auro-flightline>
      <span slot="footer">
        <auro-icon category="logos" name="tail-AS" style="width: 32px"></auro-icon>AS 2087 is operated by Horizon Air as AlaskaHorizon: ALW - SEA<br />
        <auro-icon category="logos" name="tail-EK" style="width: 32px"></auro-icon>EK 230, 772 are operated by Emirates: SEA - DXB, DXB - CPT
      </span>
    </auro-flight>
  ```

</auro-accordion>
