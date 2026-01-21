<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-flight

The `auro-flight` element renders a DoT compliant Flight listing.

### Properties & Attributes

| Properties               | Attributes               | Modifiers | Type   | Default | Description                                                                                                                                                                        |
| ------------------------ | ------------------------ | --------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| arrivalStation           | arrivalStation           |           | string |         | String for the arrival station.                                                                                                                                                    |
| arrivalTime              | arrivalTime              |           | string |         | String for the arrival ISO 8601 time (e.g. `2022-04-13T12:30:00-04:00`).                                                                                                           |
| departureStation         | departureStation         |           | string |         | String for the departure station.                                                                                                                                                  |
| departureTime            | departureTime            |           | string |         | String for the departure ISO 8601 time (e.g. `2022-04-13T12:30:00-04:00`).                                                                                                         |
| duration                 | duration                 |           | number |         | Number that defines duration of flight in minutes.                                                                                                                                 |
| flights                  | flights                  |           | array  |         | Array of flight numbers.                                                                                                                                                           |
| reroutedArrivalStation   | reroutedArrivalStation   |           | string |         | String for the new arrival station for rerouted flights.                                                                                                                           |
| reroutedDepartureStation | reroutedDepartureStation |           | string |         | String for the new departure station for rerouted flights.                                                                                                                         |
| stops                    | stops                    |           | array  |         | Array of objects representing stopovers or layovers.<br>Each object contains:<br>- `isStopover`: boolean<br>- `arrivalStation`: string<br>- `duration`: string (e.g. "123hr 123m") |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name            | Description                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| arrivalHeader   | Text on top of the arrival station's time                                                                                                              |
| default         | anticipates `<auro-flightline>` instance to fill out the flight timeline                                                                               |
| departureHeader | Text on top of the departure station's time                                                                                                            |
| footer          | Lower section allowing for tertiary content to be attributed to the element. Per **DoT Regulations** do NOT edit the styles contained within this slot |

### CSS Shadow Parts

| Name            | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| flightContainer | Apply css to the elements within the flight component container |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

The following example illustrates a basic flight component. It includes the use of the `flights`, `duration`, `departureTime`, `departureStation`, `arrivalTime`, and `arrivalStation` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
  <auro-flight
    flights='["AS 1436"]'
    duration="161"
    departureTime="2022-07-13T12:15:00-07:00"
    departureStation="SEA"
    arrivalTime="2022-07-13T14:56:00-07:00"
    arrivalStation="LAX">
    <auro-flightline></auro-flightline>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

```html
<auro-flight
  flights='["AS 1436"]'
  duration="161"
  departureTime="2022-07-13T12:15:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-13T14:56:00-07:00"
  arrivalStation="LAX">
  <auro-flightline></auro-flightline>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### Departure Reroute Information

The following example illustrates additional data regarding departure reroute information, using the `reroutedDepartureStation` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/reroute2.html) -->
  <!-- The below content is automatically added from ./../apiExamples/reroute2.html -->
  <auro-flight
    flights='["AS 8"]'
    duration="330"
    departureTime="2022-07-30T07:40:00-07:00"
    departureStation="SEA"
    arrivalTime="2022-07-30T16:40:00-04:00"
    arrivalStation="EWR"
    reroutedDepartureStation="PAE">
    <auro-flightline></auro-flightline>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/reroute2.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/reroute2.html -->

```html
<auro-flight
  flights='["AS 8"]'
  duration="330"
  departureTime="2022-07-30T07:40:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-30T16:40:00-04:00"
  arrivalStation="EWR"
  reroutedDepartureStation="PAE">
  <auro-flightline></auro-flightline>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Arrival Reroute Information

The following example illustrates additional data regarding arrival reroute information, using the `reroutedArrivalStation` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/reroute1.html) -->
  <!-- The below content is automatically added from ./../apiExamples/reroute1.html -->
  <auro-flight
    flights='["AS 8"]'
    duration="330"
    departureTime="2022-07-30T07:40:00-07:00"
    departureStation="SEA"
    arrivalTime="2022-07-30T16:40:00-04:00"
    arrivalStation="EWR"
    reroutedArrivalStation="AVP">
    <auro-flightline></auro-flightline>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/reroute1.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/reroute1.html -->

```html
<auro-flight
  flights='["AS 8"]'
  duration="330"
  departureTime="2022-07-30T07:40:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-30T16:40:00-04:00"
  arrivalStation="EWR"
  reroutedArrivalStation="AVP">
  <auro-flightline></auro-flightline>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common Usage Patterns & Functional Examples

### Next Day Arrival/Departure (+1 day)

This example illustrates a mainline nonstop with a next day arrival or departure.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/next-day.html) -->
  <!-- The below content is automatically added from ./../apiExamples/next-day.html -->
  <auro-flight
    flights='["AS 880"]'
    duration="350"
    departureTime="2022-05-31T21:55:00-10:00"
    departureStation="KOA"
    arrivalTime="2022-06-01T06:45:00-07:00"
    arrivalStation="SEA">
    <auro-flightline></auro-flightline>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/next-day.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/next-day.html -->

```html
<auro-flight
  flights='["AS 880"]'
  duration="350"
  departureTime="2022-05-31T21:55:00-10:00"
  departureStation="KOA"
  arrivalTime="2022-06-01T06:45:00-07:00"
  arrivalStation="SEA">
  <auro-flightline></auro-flightline>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Previous Day Arrival/Departure (-1 day)

This example illustrates a mainline nonstop with a -1 day arrival or departure.
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/arrive-one-day-before.html) -->
  <!-- The below content is automatically added from ./../apiExamples/arrive-one-day-before.html -->
  <auro-flight
    flights='["AS 880"]'
    duration="350"
    departureTime="2022-05-31T22:55:00-10:00"
    departureStation="KOA"
    arrivalTime="2022-05-30T07:45:00-07:00"
    arrivalStation="SEA">
    <auro-flightline></auro-flightline>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/arrive-one-day-before.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/arrive-one-day-before.html -->

```html
<auro-flight
  flights='["AS 880"]'
  duration="350"
  departureTime="2022-05-31T22:55:00-10:00"
  departureStation="KOA"
  arrivalTime="2022-05-30T07:45:00-07:00"
  arrivalStation="SEA">
  <auro-flightline></auro-flightline>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### One-Stop Flight

This example illustrates a one-stop `stopover` flight. Notice the additional information required for the `auro-flight-segment` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/one-stop.html) -->
  <!-- The below content is automatically added from ./../apiExamples/one-stop.html -->
  <auro-flight
    flights='["AS 374"]'
    duration="120"
    departureTime="2022-05-04T01:55:00-09:00"
    departureStation="ANC"
    arrivalTime="2022-05-04T03:55:00-09:00"
    arrivalStation="ADK"
    stops='[{ "isStopover": true, "arrivalStation": "CDB"}]'>
    <auro-flightline>
      <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
    </auro-flightline>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/one-stop.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/one-stop.html -->

```html
<auro-flight
  flights='["AS 374"]'
  duration="120"
  departureTime="2022-05-04T01:55:00-09:00"
  departureStation="ANC"
  arrivalTime="2022-05-04T03:55:00-09:00"
  arrivalStation="ADK"
  stops='[{ "isStopover": true, "arrivalStation": "CDB"}]'>
  <auro-flightline>
    <auro-flight-segment stopover iata="CDB"></auro-flight-segment>
  </auro-flightline>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Mainline Multi-Stop Flight

The following example illustrates a mainline multi-stop `stopover` flight.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/multi-stop.html) -->
  <!-- The below content is automatically added from ./../apiExamples/multi-stop.html -->
  <auro-flight
    flights='["AS 65"]'
    duration="353"
    departureTime="2022-05-04T00:00:00-09:00"
    departureStation="KTN"
    arrivalTime="2022-05-04T05:53:00-09:00"
    arrivalStation="ANC"    
    stops='[{ "isStopover": true, "arrivalStation": "WRG"}, 
      { "isStopover": true, "arrivalStation": "PSG"}, 
      { "isStopover": true, "arrivalStation": "JNU"}]'>
    <auro-flightline>
      <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
      <auro-flight-segment stopover iata="PSG"></auro-flight-segment>
      <auro-flight-segment stopover iata="JNU"></auro-flight-segment>
    </auro-flightline>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/multi-stop.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/multi-stop.html -->

```html
<auro-flight
  flights='["AS 65"]'
  duration="353"
  departureTime="2022-05-04T00:00:00-09:00"
  departureStation="KTN"
  arrivalTime="2022-05-04T05:53:00-09:00"
  arrivalStation="ANC"    
  stops='[{ "isStopover": true, "arrivalStation": "WRG"}, 
    { "isStopover": true, "arrivalStation": "PSG"}, 
    { "isStopover": true, "arrivalStation": "JNU"}]'>
  <auro-flightline>
    <auro-flight-segment stopover iata="WRG"></auro-flight-segment>
    <auro-flight-segment stopover iata="PSG"></auro-flight-segment>
    <auro-flight-segment stopover iata="JNU"></auro-flight-segment>
  </auro-flightline>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Flight with Layover/Connection

The following example illustrates a change of gauge flight with a layover in ORD for 3h 11m.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/connection.html) -->
  <!-- The below content is automatically added from ./../apiExamples/connection.html -->
  <auro-flight
    flights='["AS 161", "AA 2269"]'
    duration="704"
    departureTime="2022-07-21T00:55:00-09:00"
    departureStation="ANC"
    arrivalTime="2022-07-21T16:39:00-04:00"
    arrivalStation="BOS"
    stops='[{ "isStopover": false, "arrivalStation": "ORD", "duration":"3h 10m" }]'>
    <auro-flightline>
      <auro-flight-segment iata="ORD" duration="3h 10m"></auro-flight-segment>
    </auro-flightline>
    <span slot="footer">
      <auro-icon category="logos" name="tail-AS" style="width: 24px" aria-hidden="true"></auro-icon>
      AS161 is subject to government approval <br aria-hidden="true"/>
      <auro-icon category="logos" name="tail-AA" style="width: 24px" aria-hidden="true"></auro-icon>
      AA2269 is operated by American Airlines
    </span>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/connection.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/connection.html -->

```html
<auro-flight
  flights='["AS 161", "AA 2269"]'
  duration="704"
  departureTime="2022-07-21T00:55:00-09:00"
  departureStation="ANC"
  arrivalTime="2022-07-21T16:39:00-04:00"
  arrivalStation="BOS"
  stops='[{ "isStopover": false, "arrivalStation": "ORD", "duration":"3h 10m" }]'>
  <auro-flightline>
    <auro-flight-segment iata="ORD" duration="3h 10m"></auro-flight-segment>
  </auro-flightline>
  <span slot="footer">
    <auro-icon category="logos" name="tail-AS" style="width: 24px" aria-hidden="true"></auro-icon>
    AS161 is subject to government approval <br aria-hidden="true"/>
    <auro-icon category="logos" name="tail-AA" style="width: 24px" aria-hidden="true"></auro-icon>
    AA2269 is operated by American Airlines
  </span>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot Examples

### Using the footer slot

For a flight that requires government approval or a flight that is operated by another subsidiary or partner carrier, you can use the `footer` custom element slot to insert additional information into the scope of the component. Notice the use of `<auro-icon>` and text within the named slot element.

This slot requires the consumer to manually manage what is read back via the screen reader through the use of `aria-hidden="true"`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/footer-slot.html) -->
  <!-- The below content is automatically added from ./../apiExamples/footer-slot.html -->
  <auro-flight
    flights='["EK 772"]'
    duration="465"
    departureTime="2022-05-04T07:50:00+04:00"
    departureStation="DXB"
    arrivalTime="2022-05-04T15:35:00+04:00"
    arrivalStation="CPT">
    <auro-flightline></auro-flightline>
    <span slot="footer">
      <auro-icon category="logos" name="tail-EK" style="width: 24px" aria-hidden="true"></auro-icon>
      EK 772 is subject to government approval <br  aria-hidden="true"/>
      <auro-icon category="logos" name="tail-EK" style="width: 24px" aria-hidden="true"></auro-icon>
      EK 772 is operated by Emirates
    </span>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/footer-slot.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/footer-slot.html -->

```html
<auro-flight
  flights='["EK 772"]'
  duration="465"
  departureTime="2022-05-04T07:50:00+04:00"
  departureStation="DXB"
  arrivalTime="2022-05-04T15:35:00+04:00"
  arrivalStation="CPT">
  <auro-flightline></auro-flightline>
  <span slot="footer">
    <auro-icon category="logos" name="tail-EK" style="width: 24px" aria-hidden="true"></auro-icon>
    EK 772 is subject to government approval <br  aria-hidden="true"/>
    <auro-icon category="logos" name="tail-EK" style="width: 24px" aria-hidden="true"></auro-icon>
    EK 772 is operated by Emirates
  </span>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
In this example, the `footer` slot is used to alert the customer that a First Class option is available.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/footer-slot2.html) -->
  <!-- The below content is automatically added from ./../apiExamples/footer-slot2.html -->
  <auro-flight
    flights='["AS 73"]'
    duration="100"
    departureTime="2022-05-03T22:45:00-09:00"
    departureStation="JNU"
    arrivalTime="2022-05-04T00:25:00-09:00"
    arrivalStation="CDV">
    <auro-flightline>
    </auro-flightline>
    <span slot="footer">First Class Upgrade available</span>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/footer-slot2.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/footer-slot2.html -->

```html
<auro-flight
  flights='["AS 73"]'
  duration="100"
  departureTime="2022-05-03T22:45:00-09:00"
  departureStation="JNU"
  arrivalTime="2022-05-04T00:25:00-09:00"
  arrivalStation="CDV">
  <auro-flightline>
  </auro-flightline>
  <span slot="footer">First Class Upgrade available</span>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Using the departure/arrival header slots

The following example illustrates the use of the optional departure and arrival header slots to provide additional data regarding departure and arrival information.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/header-slot.html) -->
  <!-- The below content is automatically added from ./../apiExamples/header-slot.html -->
  <auro-flight
    flights='["AS 8"]'
    duration="330"
    departureTime="2022-07-30T07:40:00-07:00"
    departureStation="SEA"
    arrivalTime="2022-07-30T16:40:00-04:00"
    arrivalStation="EWR"
    reroutedDepartureStation="PDX"
    reroutedArrivalStation="AVP">
    <auro-flightline></auro-flightline>
    <span slot="departureHeader">Scheduled <auro-datetime type="tzTime" setDate="2022-07-30T07:20:00-07:00"></auro-datetime></span>
    <span slot="arrivalHeader">Scheduled <auro-datetime type="tzTime" setDate="2022-05-04T17:48:00-04:00"></auro-datetime></span>
  </auro-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/header-slot.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/header-slot.html -->

```html
<auro-flight
  flights='["AS 8"]'
  duration="330"
  departureTime="2022-07-30T07:40:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-30T16:40:00-04:00"
  arrivalStation="EWR"
  reroutedDepartureStation="PDX"
  reroutedArrivalStation="AVP">
  <auro-flightline></auro-flightline>
  <span slot="departureHeader">Scheduled <auro-datetime type="tzTime" setDate="2022-07-30T07:20:00-07:00"></auro-datetime></span>
  <span slot="arrivalHeader">Scheduled <auro-datetime type="tzTime" setDate="2022-05-04T17:48:00-04:00"></auro-datetime></span>
</auro-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-flight-footer-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flight-header-days-changed-text-color: var(--ds-basic-color-status-error, #{v.$ds-basic-color-status-error});
  --ds-auro-flight-header-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flight-cancelled-station-text-color: var(--ds-basic-color-status-error, #{v.$ds-basic-color-status-error});
  --ds-auro-flight-station-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flight-time-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
