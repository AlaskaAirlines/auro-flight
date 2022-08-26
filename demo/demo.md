<!-- # Flight component

The scope of this demo is to illustrate an opportunity to create a better accessibility experience.

## The problem

A content element like auro-flight uses a complex UI layout and common visual queues to communicate a flight option to customers. The areas of content include the flight number, duration of flight, departing and arriving airports, departing and arriving times, and any stops. Additional complexity includes re-routed flights, changed schedules and stopover/layover information.

For visual users, aesthetics assumptions are made that visual context and layout will convey information that does not need to be described. E.g. the placement of content like `AS 366` means that this is `Flight AS 366`. But without that visual context, is `AS 366` alone enough? The same can be said for any other part of this element. Additionally stopovers and layovers only contain airport codes. Without visual context, is this content meaningful?

An additional problem comes with the current state of technology at this time. Browsers and screen readers share many issues when it comes to clearly understanding the flow of content when faced with complex UI layouts like auro-flight.

## The hypothesis

Why force a complex UI layout to read a cohesive message for users with visual impairments? The examples below convey the data in a visual way that is easy for non-impaired users to quickly scan the content and get the information they are looking for. The intent of this test is to take that same data and present it in a way that is as easily consumable via screen readers by reading back the same data with additional contextual queues in a predictable way.

## Test the demo

To use this demo, please turn on your screen reader of choice and consume the content as you prefer. The test is to evaluate whether the content is easier to consume, harder to consume or if there is no discernable difference. -->

<hr>

### Mainline Nonstop

This example illustrates a mainline nonstop flight from SEA to EWR (SEAEWR)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 8"]'
    duration="320"
    daysChanged="0"
    departureTime="2022-04-13T01:10:00-07:00"
    departureStation="SEA"
    arrivalTime="2022-04-13T12:30:00-04:00"
    arrivalStation="EWR"
    ariaHidden="true"
    >
    <auro-flightline></auro-flightline>
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 8"]'
    duration="320"
    daysChanged="0"
    departureTime="2022-04-13T01:10:00-07:00"
    departureStation="SEA"
    arrivalTime="2022-04-13T12:30:00-04:00"
    arrivalStation="EWR"
    ariaHidden="true"
    >
    <auro-flightline></auro-flightline>
  </auro-flight>
  ```

</auro-accordion>

### Mainline next day arrival/departure with Stop

This example illustrates a mainline with a stop and a next day arrival or departure from KOA to SEA (KOASEA)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 880"]'
    duration="350"
    departureTime="2022-04-06T12:25:00-10:00"
    departureStation="KOA"
    arrivalTime="2022-04-07T00:15:00-07:00"
    arrivalStation="SEA"
    ariaHidden="true"
    stops='[{
      "arrivalStation": "LAX",
      "duration": "1h 35m",
      "isStopover": false
      },
      {
      "arrivalStation": "SFO",
      "duration": "1hr 42m",
      "isStopover": true
    }]'
    >
      <auro-flightline>
        <auro-flight-segment iata="LAX" duration="1h 35m" stopover></auro-flight-segment>
         <auro-flight-segment iata="SFO" duration="1hr 42m"></auro-flight-segment>
      </auro-flightline>
    </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 880"]'
    duration="350"
    departureTime="2022-04-06T12:25:00-10:00"
    departureStation="KOA"
    arrivalTime="2022-04-07T00:15:00-07:00"
    arrivalStation="SEA"
    ariaHidden="true"
    >
    <auro-flightline>
      <auro-flight-segment iata="LAX" duration="1h 35m"></auro-flight-segment>
    </auro-flightline>
  </auro-flight>
  ```

</auro-accordion>

### Mainline next day arrival/departure with Stop

This example illustrates a mainline with a stop and a next day arrival or departure from KOA to SEA (KOASEA)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 880"]'
    duration="350"
    departureTime="2022-04-06T12:25:00-10:00"
    departureStation="KOA"
    arrivalTime="2022-04-07T00:15:00-07:00"
    arrivalStation="SEA"
    ariaHidden="true"
    stops='[{
      "arrivalStation": "LAX",
      "duration": "1hr 42m",
      "isStopover": false
      }]'
    >
      <auro-flightline>
        <auro-flight-segment iata="LAX" stopover></auro-flight-segment>
      </auro-flightline>
    </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 880"]'
    duration="350"
    departureTime="2022-04-06T12:25:00-10:00"
    departureStation="KOA"
    arrivalTime="2022-04-07T00:15:00-07:00"
    arrivalStation="SEA"
    ariaHidden="true"
    >
    <auro-flightline>
      <auro-flight-segment iata="LAX" duration="1h 35m"></auro-flight-segment>
    </auro-flightline>
  </auro-flight>
  ```

</auro-accordion>

This example illustrates a mainline with  layover a next day arrival or departure from KOA to SEA (KOASEA)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 880"]'
    duration="350"
    departureTime="2022-04-06T12:25:00-10:00"
    departureStation="KOA"
    arrivalTime="2022-04-07T00:15:00-07:00"
    arrivalStation="SEA"
    ariaHidden="true"  
    stops='[{
      "arrivalStation": "LAX",
      "duration": "1hr 42m",
      "isStopover": false
      }]'
    >
      <auro-flightline>
        <auro-flight-segment iata="LAX" duration="1h 35m"></auro-flight-segment>
      </auro-flightline>
    </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 880"]'
    duration="350"
    departureTime="2022-04-06T12:25:00-10:00"
    departureStation="KOA"
    arrivalTime="2022-04-07T00:15:00-07:00"
    arrivalStation="SEA"
    ariaHidden="true"
    >
    <auro-flightline>
      <auro-flight-segment iata="LAX" duration="1h 35m"></auro-flight-segment>
    </auro-flightline>
  </auro-flight>
  ```

</auro-accordion>

### Rerouted flight - Flight Status Page

This example illustrates a mainline nonstop with a next day arrival or departure from KOA to SEA (KOASEA)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 880"]'
    duration="350"
    departureTime="2022-04-06T12:25:00-10:00"
    departureStation="HNL"
    arrivalTime="2022-04-07T00:15:00-07:00"
    arrivalStation="PAE"
    ariaHidden="true"
    reroutedDepartureStation="KOA"
    reroutedArrivalStation="SEA"
    >
      <auro-flightline></auro-flightline>
    </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 880"]'
    duration="350"
    departureTime="2022-04-06T12:25:00-10:00"
    departureStation="KOA"
    arrivalTime="2022-04-07T00:15:00-07:00"
    arrivalStation="SEA"
    ariaHidden="true"
    reroutedDepartureStation="HNL"
    reroutedArrivalStation="PAE"
    >
    <auro-flightline>
      <auro-flight-segment iata="LAX" duration="1h 35m"></auro-flight-segment>
    </auro-flightline>
  </auro-flight>
  ```

</auro-accordion>

<!-- ### Mainline one-stop

This example illustrates a one-stop `stopover` flight from ANC to ADK (ANCADK). Notice the additional information required for the `auro-flight-segment` element.

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 184"]'
    duration="3h 55m"
    daysChanged="0"
    departureTime="10:10 am"
    departureStation="ANC"
    arrivalTime="1:05 pm"
    arrivalStation="ADK"
    >
      <auro-flightline>
        <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
      </auro-flightline>
    </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 184"]'
    duration="3h 55m"
    daysChanged="0"
    departureTime="10:10 am"
    departureStation="ANC"
    arrivalTime="1:05 pm"
    arrivalStation="ADK"
    >
    <auro-flightline>
      <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
    </auro-flightline>
  </auro-flight>
  ```

</auro-accordion>

### Mainline multi-stop

The following example illustrates a mainline multi-stop `stopover` flight from KTN to ANC (KTNANC)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 65"]'
    duration="5h 53m"
    daysChanged="0"
    departureTime="9:00 am"
    departureStation="KTN"
    arrivalTime="2:53 pm"
    arrivalStation="ANC"
    >
      <auro-flightline>
        <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
        <auro-flight-segment stopover iata="PSG"></auro-flight-segment>
        <auro-flight-segment stopover iata="JNU"></auro-flight-segment>
      </auro-flightline>
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 65"]'
    duration="5h 53m"
    daysChanged="0"
    departureTime="9:00 am"
    departureStation="KTN"
    arrivalTime="2:53 pm"
    arrivalStation="ANC"
    >
    <auro-flightline>
      <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
      <auro-flight-segment stopover iata="PSG"></auro-flight-segment>
      <auro-flight-segment stopover iata="JNU"></auro-flight-segment>
    </auro-flightline>
  </auro-flight>
  ```

</auro-accordion>

### Mainline + mainline connection w/layover

The following example illustrates a change of gauge flight with a layover in SEA for 1h 35m.

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 110", "AS 12"]'
    duration="11h 5m"
    daysChanged="0"
    departureTime="12:45 am"
    departureStation="ANC"
    arrivalTime="3:50 pm"
    arrivalStation="BOS"
    >
    <auro-flightline>
      <auro-flight-segment iata="SEA" duration="1h 35m"></auro-flight-segment>
    </auro-flightline>
    <span slot="footer">
      <div><auro-icon category="logos" name="tail-AS" style="width: 24px"></auro-icon>AS110 is subject to government approval</div>
      <div><auro-icon category="logos" name="tail-AA" style="width: 24px"></auro-icon>AA12 is operated by American Airlines</div>
    </span>
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 110", "AS 12"]'
    duration="11h 5m"
    daysChanged="0"
    departureTime="12:45 am"
    departureStation="ANC"
    arrivalTime="3:50 pm"
    arrivalStation="BOS"
    >
    <auro-flightline>
      <auro-flight-segment iata="SEA" duration="1h 35m"></auro-flight-segment>
    </auro-flightline>
    <span slot="footer">
      <div><auro-icon category="logos" name="tail-AS" style="width: 24px"></auro-icon>AS110 is subject to government approval </div>
      <div><auro-icon category="logos" name="tail-AA" style="width: 24px"></auro-icon>AA12 is operated by American Airlines</div>
    </span>
  </auro-flight>
  ```

</auro-accordion>

### Using the footer slot

In this example for a flight that requires government approval or a flight that is operated by another subsidiary or partner carrier, you can use the `footer` custom element slot to insert additional information into the scope of the component. In the code you will see the use of `<auro-icon>` and text within the named slot element.

<div class="exampleWrapper">
  <auro-flight
    flights='["EK 772"]'
    duration="9h 45m"
    daysChanged="0"
    departureTime="3:50 am"
    departureStation="DXB"
    arrivalTime="11:35 am"
    arrivalStation="CPT"
    >
      <auro-flightline></auro-flightline>
      <span slot="footer">
        <div><auro-icon category="logos" name="tail-EK" style="width: 24px"></auro-icon>EK 772 is subject to government approval</div>
        <div><auro-icon category="logos" name="tail-EK" style="width: 24px"></auro-icon>EK 772 is operated by Emirates</div>
      </span>
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["EK 772"]'
    duration="9h 45m"
    daysChanged="0"
    departureTime="3:50 am"
    departureStation="DXB"
    arrivalTime="11:35 am"
    arrivalStation="CPT"
    >
      <auro-flightline></auro-flightline>
      <span slot="footer">
        <div><auro-icon category="logos" name="tail-EK" style="width: 24px"></auro-icon>EK 772 is subject to government approval</div>
        <div><auro-icon category="logos" name="tail-EK" style="width: 24px"></auro-icon>EK 772 is operated by Emirates</div>
      </span>
  </auro-flight>
  ```

</auro-accordion>

In this example, the `footer` slot is used to alert the customer that a First Class option is available.

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 73"]'
    duration="1h 40m"
    daysChanged="0"
    departureTime="7:45 am"
    departureStation="JNU"
    arrivalTime="9:25 am"
    arrivalStation="CDV"
    >
      <auro-flightline>
      </auro-flightline>
      <span slot="footer">First Class Upgrade available</span>
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 73"]'
    duration="1h 40m"
    daysChanged="0"
    departureTime="7:45 am"
    departureStation="JNU"
    arrivalTime="9:25 am"
    arrivalStation="CDV"
    >
    <auro-flightline>
    </auro-flightline>
    <span slot="footer">First Class Upgrade available</span>
  </auro-flight>
  ```

</auro-accordion>

### Using the optional departure/arrival header slots

The following example illustrates additional data regarding departure and arrival information.

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 8"]'
    duration="5h 25m"
    daysChanged="0"
    departureTime="7:30 am"
    departureStation="SEA"
    arrivalTime="3:55 pm"
    arrivalStation="EWR"
    reroutedDepartureStation="PDX"
    reroutedArrivalStation="AVP"
    >
    <auro-flightline></auro-flightline>
    <span slot="departureHeader">Previously scheduled departure 7:15 AM</span>
    <span slot="arrivalHeader">Previously scheduled arrival 4:15 PM</span>
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 8"]'
    duration="5h 25m"
    daysChanged="0"
    departureTime="7:30 am"
    departureStation="SEA"
    arrivalTime="3:55 pm"
    arrivalStation="EWR"
    reroutedDepartureStation="PDX"
    reroutedArrivalStation="AVP"
    >
    <auro-flightline></auro-flightline>
    <span slot="departureHeader">Scheduled 7:15 AM</span>
    <span slot="arrivalHeader">Scheduled 4:15 PM</span>

  </auro-flight>
  ```

</auro-accordion> -->