<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-flight-header

The auro-flight-header element displays airline, duration, and day change information.

## Properties

| Property        | Attribute       | Type     | Description                                      |
|-----------------|-----------------|----------|--------------------------------------------------|
| [arrivalTime](#arrivalTime)   | `arrivalTime`   | `String` | String for the arrival ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| [departureTime](#departureTime) | `departureTime` | `String` | String for the departure ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| [duration](#duration)      | `duration`      | `String` | String for the duration. `505`                   |
| [flights](#flights)       | `flights`       | `Array`  | Array of flight numbers `['AS 123', 'EK 432']`   |

# auro-flight-main

The auro-flight-main element renders the middle 'frame' of the auro-flight component with the auro-flightline.
DoT: STATION SIZE AND COLOR MUST BE IDENTICAL TO DISCLOSURE SIZE AND COLOR!

## Properties

| Property                   | Attribute                  | Type     | Default                               | Description                                      |
|----------------------------|----------------------------|----------|---------------------------------------|--------------------------------------------------|
| [arrivalStation](#arrivalStation)           | `arrivalStation`           | `String` |                                       | Station of arrival, e.g. `SEA`                   |
| [arrivalTime](#arrivalTime)              | `arrivalTime`              | `String` |                                       | ISO 8601 time of arrival, e.g. `2022-04-13T12:30:00-04:00` |
| [departureStation](#departureStation)         | `departureStation`         | `String` |                                       | Station of departure, e.g. `PVD`                 |
| [departureTime](#departureTime)            | `departureTime`            | `String` |                                       | ISO 8601 time of departure, e.g. `2022-04-13T12:30:00-04:00` |
| [duration](#duration)                 | `duration`                 | `Number` |                                       | String for the duration. `505`                   |
| [flights](#flights)                  | `flights`                  | `Array`  |                                       | Array of flight numbers `['AS 123', 'EK 432']`   |
| [reroutedArrivalStation](#reroutedArrivalStation)   | `reroutedArrivalStation`   | `String` |                                       | Station of rerouted arrival, e.g. `AVP`          |
| [reroutedDepartureStation](#reroutedDepartureStation) | `reroutedDepartureStation` | `String` |                                       | Station of rerouted departure, e.g. `PDX`        |
| [stops](#stops)                    | `stops`                    | `Array`  |                                       | Array of objects representing stopovers or layovers: "isStopover": bool, "arrivalStation": string, "duration": string ["123hr 123m"] (layover only). This content will not be used in the UI, but only constructs the a11y conversational phrase for screen readers and has no effect on the `auro-flight-segment` content. |
| [template](#template)                 |                            | `object` | {}                                    |                                                  |
| [timeTemplate](#timeTemplate)             |                            | `object` | {"hour":"2-digit","minute":"2-digit"} | Time template object used by convertTime() method. |

## Slots

| Name      | Description                                   |
|-----------|-----------------------------------------------|
| [default](#default) | anticipates `<auro-flight-segment>` instances |

# auro-flight

The auro-flight element renders a DoT compliant Flight listing.
This design has been tested via the Alaska Legal team for legal compliance.
Please DO NOT modify unit tests pertaining to DoT regulations.

## Properties

| Property                   | Attribute                  | Type     | Description                                      |
|----------------------------|----------------------------|----------|--------------------------------------------------|
| [arrivalStation](#arrivalStation)           | `arrivalStation`           | `String` | String for the arrival station. `PVD`            |
| [arrivalTime](#arrivalTime)              | `arrivalTime`              | `String` | String for the arrival ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| [departureStation](#departureStation)         | `departureStation`         | `String` | String for the departure station. `SEA`          |
| [departureTime](#departureTime)            | `departureTime`            | `String` | String for the departure ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| [duration](#duration)                 | `duration`                 | `Number` | String for the duration. `505`                   |
| [flights](#flights)                  | `flights`                  | `Array`  | Array of flight numbers `['AS 123', 'EK 432']`   |
| [reroutedArrivalStation](#reroutedArrivalStation)   | `reroutedArrivalStation`   | `String` | String for the new arrival station for rerouted flights. `AVP` |
| [reroutedDepartureStation](#reroutedDepartureStation) | `reroutedDepartureStation` | `String` | String for the new departure station for rerouted flights. `PDX` |
| [stops](#stops)                    | `stops`                    | `Array`  | Array of objects representing stopovers or layovers: "isStopover": bool, "arrivalStation": string, "duration": string ["123hr 123m"] (layover only). This content will not be used in the UI, but only constructs the a11y conversational phrase for screen readers and has no effect on the `auro-flight-segment` content. |

## Slots

| Name              | Description                                      |
|-------------------|--------------------------------------------------|
| [arrivalHeader](#arrivalHeader)   | Text on top of the arrival station's time        |
| [default](#default)         | anticipates `<auro-flightline>` instance to fill out the flight timeline |
| [departureHeader](#departureHeader) | Text on top of the departure station's time      |
| [footer](#footer)          | Lower section allowing for tertiary content to be attributed to the element. Per **DoT Regulations** do NOT edit the styles contained within this slot |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="twoColDemoRow">
  <div>
    <div class="exampleWrapper">
      <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
      <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

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

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

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

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

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

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

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

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

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

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

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
