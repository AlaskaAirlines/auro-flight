# Flight

The `<auro-flight>` element encapsulates Alaska's flight result logic. A departure station and an arrival station are displayed in tandem with all sectors of the flight in an [auro-flightline](https://auro.alaskaair.com/components/auro/flightline) element.

## DoT regulations

Department of Transportation regulations mandate that the arrival and departure cities' font size and color be identical to the operational disclosures (for instance, AA 3210 is operated by Envoy Air on behalf of American Airlines).

## Dependencies

The `<auro-flight>` element has dependencies on the following additional Auro custom elements.

```
  └── @alaskaairux/auro-flightline
  |  ├── (internal dependency) @alaskaairux/auro-flight-segment
  |  └── (external dependency) @alaskaairux/auro-badge

  └── @alaskaairux/auro-flight
  |  ├── (internal dependency) @alaskaairux/auro-flight-header
  |  └── (internal dependency) @alaskaairux/auro-flight-body
```

See [documentation](https://auro.alaskaair.com/components/auro/flightline/api) for additional information regarding the `<auro-flight-segment>` API.

## Attributes

The `<auro-flight>` custom element's API consists of a series of attributes to be defined at the time of use. Be sure to review the [api documentation](https://auro.alaskaair.com/components/auro/flight/api) for this element.

## Accessibility

The `<auro-flight>` custom element is accessible by screen readers by default. Due to the style of content within, while this is accessible, it's up to the user of the element if this information is useable and/or necessary for a screen reader experience. If this element is being used for illustrative purposes and the details of the flight are outlined in greater detail outside the scope of this element, it is recommended that the `ariaHidden` attribute be used.


## Mainline Nonstop

This example illustrates a mainline nonstop flight from SEA to EWR (SEAEWR)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 8"]'
    duration="5h 25m"
    daysChanged="0"
    departureTime="7:30 am"
    departureStation="SEA"
    arrivalTime="3:55 pm"
    arrivalStation="EWR"
    >
    <auro-flightline></auro-flightline>
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
    >
    <auro-flightline></auro-flightline>
  </auro-flight>
  ```

</auro-accordion>

## Mainline next day arr/dep

This example illustrates a mainline nonstop with a next day arrival or departure from KOA to SEA (KOASEA)

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 880"]'
    duration="5h 45m"
    daysChanged="1"
    departureTime="10:50 pm"
    departureStation="KOA"
    arrivalTime="6:35 am"
    arrivalStation="SEA"
    >
      <auro-flightline></auro-flightline>
    </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
  <auro-flight
    flights='["AS 880"]'
    duration="5h 45m"
    daysChanged="1"
    departureTime="10:50 pm"
    departureStation="KOA"
    arrivalTime="6:35 am"
    arrivalStation="SEA"
    >
    <auro-flightline></auro-flightline>
  </auro-flight>
  ```

</auro-accordion>

## Mainline One-stop

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

## Mainline multi-stop

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

## Mainline + mainline connection w/layover

The following example illustrates a change of gauge flight with a layover in SEA for 1h 35m.

<div class="exampleWrapper">
  <auro-flight
    flights='["AS 110", "AA 12"]'
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
        <auro-icon category="logos" name="tail-AS" style="width: 24px"></auro-icon>
        AS110 is subject to government approval <br />
        <auro-icon category="logos" name="tail-AA" style="width: 24px"></auro-icon>
        AA12 is operated by American Airlines
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
      <auro-icon category="logos" name="tail-AS" style="width: 24px"></auro-icon>
      AS110 is subject to government approval <br />
      <auro-icon category="logos" name="tail-AA" style="width: 24px"></auro-icon>
      AA12 is operated by American Airlines
    </span>
  </auro-flight>
  ```

</auro-accordion>

## Using the footer slot

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
        <auro-icon category="logos" name="tail-EK" style="width: 24px"></auro-icon>
        EK 772 is subject to government approval <br />
        <auro-icon category="logos" name="tail-EK" style="width: 24px"></auro-icon>
        EK 772 is operated by Emirates
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
        <auro-icon category="logos" name="tail-EK" style="width: 24px"></auro-icon>
        EK 772 is subject to government approval <br />
        <auro-icon category="logos" name="tail-EK" style="width: 24px"></auro-icon>
        EK 772 is operated by Emirates
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

## Using the optional departure/arrival header slots

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
    >
    <auro-flightline></auro-flightline>
    <span slot="departureHeader">Scheduled 7:15am</span>
    <span slot="arrivalHeader">Scheduled 4:15pm</span>

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
    >
    <auro-flightline></auro-flightline>
    <span slot="departureHeader">Scheduled 7:15am</span>
    <span slot="arrivalHeader">Scheduled 4:15pm</span>

  </auro-flight>
  ```

</auro-accordion>
