<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-flight

The auro-flight element renders a DoT compliant Flight listing.
This design has been tested via the Alaska Legal team for legal compliance.
Please DO NOT modify unit tests pertaining to DoT regulations.

## Properties

| Property                   | Attribute                  | Type     | Default | Description                                      |
|----------------------------|----------------------------|----------|---------|--------------------------------------------------|
| [arrivalStation](#arrivalStation)           | `arrivalStation`           | `String` |         | String for the arrival station. `PVD`            |
| [arrivalTime](#arrivalTime)              | `arrivalTime`              | `String` |         | String for the arrival ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| [departureStation](#departureStation)         | `departureStation`         | `String` |         | String for the departure station. `SEA`          |
| [departureTime](#departureTime)            | `departureTime`            | `String` |         | String for the departure ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| [duration](#duration)                 | `duration`                 | `Number` |         | String for the duration. `505`                   |
| [flights](#flights)                  | `flights`                  | `Array`  | []      | Array of flight numbers `['AS 123', 'EK 432']`   |
| [reroutedArrivalStation](#reroutedArrivalStation)   | `reroutedArrivalStation`   | `String` |         | String for the new arrival station for rerouted flights. `AVP` |
| [reroutedDepartureStation](#reroutedDepartureStation) | `reroutedDepartureStation` | `String` |         | String for the new departure station for rerouted flights. `PDX` |
| [stops](#stops)                    | `stops`                    | `Array`  |         | Array of objects representing stopovers or layovers: "isStopover": bool, "arrivalStation": string, "duration": string ["123hr 123m"] (layover only). This content will not be used in the UI, but only constructs the a11y conversational phrase for screen readers and has no effect on the `auro-flight-segment` content. |

## Slots

| Name              | Description                                      |
|-------------------|--------------------------------------------------|
| [arrivalHeader](#arrivalHeader)   | Text on top of the arrival station's time        |
| [default](#default)         | anticipates `<auro-flightline>` instance to fill out the flight timeline |
| [departureHeader](#departureHeader) | Text on top of the departure station's time      |
| [footer](#footer)          | Lower section allowing for tertiary content to be attributed to the element. Per **DoT Regulations** do NOT edit the styles contained within this slot |

## CSS Shadow Parts

| Part              | Description                                      |
|-------------------|--------------------------------------------------|
| [flightContainer](#flightContainer) | Apply css to the elements within the flight component container |

# auro-flight-header

The auro-flight-header element displays airline, duration, and day change information.

## Properties

| Property        | Attribute       | Type     | Description                                      |
|-----------------|-----------------|----------|--------------------------------------------------|
| [arrivalTime](#arrivalTime)   | `arrivalTime`   | `String` | String for the arrival ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| [departureTime](#departureTime) | `departureTime` | `String` | String for the departure ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| [duration](#duration)      | `duration`      | `String` | String for the duration. `505`                   |
| [flights](#flights)       | `flights`       | `Array`  | Array of flight numbers `['AS 123', 'EK 432']`   |

## Methods

| Method           | Type       | Description                                      |
|------------------|------------|--------------------------------------------------|
| [exposeCssParts](#exposeCssParts) | `(): void` | Exposes CSS parts for styling from parent components. |

## CSS Shadow Parts

| Part                | Description                         |
|---------------------|-------------------------------------|
| [durationContainer](#durationContainer) | Apply css to the duration container |
| [flightType](#flightType)        | Apply css to the flight type        |

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

## Methods

| Method           | Type       | Description                                      |
|------------------|------------|--------------------------------------------------|
| [exposeCssParts](#exposeCssParts) | `(): void` | Exposes CSS parts for styling from parent components. |

## Slots

| Name      | Description                                   |
|-----------|-----------------------------------------------|
| [default](#default) | anticipates `<auro-flight-segment>` instances |

## CSS Shadow Parts

| Part                 | Description                                      |
|----------------------|--------------------------------------------------|
| [arrivalContainer](#arrivalContainer)   | Apply css to the elements within the arrival container |
| [arrivalStation](#arrivalStation)     | Apply css to the elements to the arrival station |
| [arrivalTime](#arrivalTime)        | Apply css to the elements to the arrival time    |
| [departureContainer](#departureContainer) | Apply css to the elements within the departure container |
| [departureStation](#departureStation)   | Apply css to the elements to the departure station |
| [departureTime](#departureTime)      | Apply css to the elements to the departure time  |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

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

### Attribute Examples

#### <a name="attributeName"></a>`attributeName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Property Examples

#### <a name="propertyName"></a>`propertyName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Method Examples

#### <a name="methodName"></a>`methodName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Event Examples

#### <a name="eventName"></a>`eventName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### Slot Examples

#### <a name="slotName"></a>`slotName`<a href="#" style="float: right; font-size: 1rem; font-weight: 100;">back to top</a>
Explanation and use description.

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

### CSS Shadow Parts Example

Use css part of `arrivalTime`, `arrivalStation`, `departureTime`, `departureStation`, `durationContainer`, `flightType` to customize their fonts.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customizeFont.html) -->
  <!-- The below content is automatically added from ./../apiExamples/customizeFont.html -->
  <auro-flight
    id="customizeFont"
    flights='["AS 1436"]'
    duration="161"
    departureTime="2022-07-13T12:15:00-07:00"
    departureStation="SEA"
    arrivalTime="2022-07-13T14:56:00-07:00"
    arrivalStation="LAX">
    <auro-flightline></auro-flightline>
  </auro-flight>
  <style>
    #customizeFont::part(arrivalTime) {
      font-size: 2rem;
      font-weight: bolder;
    }
    #customizeFont::part(departureTime) {
      font-size: 1.8rem;
    }
    #customizeFont::part(arrivalStation) {
      color: red;
    }
    #customizeFont::part(departureStation) {
      color: blue;
    }
    #customizeFont::part(durationContainer) {
      color: orange;
    }
    #customizeFont::part(flightType) {
      color: green;
    }
  </style>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customizeFont.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/customizeFont.html -->

```html
<auro-flight
  id="customizeFont"
  flights='["AS 1436"]'
  duration="161"
  departureTime="2022-07-13T12:15:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-13T14:56:00-07:00"
  arrivalStation="LAX">
  <auro-flightline></auro-flightline>
</auro-flight>
<style>
  #customizeFont::part(arrivalTime) {
    font-size: 2rem;
    font-weight: bolder;
  }
  #customizeFont::part(departureTime) {
    font-size: 1.8rem;
  }
  #customizeFont::part(arrivalStation) {
    color: red;
  }
  #customizeFont::part(departureStation) {
    color: blue;
  }
  #customizeFont::part(durationContainer) {
    color: orange;
  }
  #customizeFont::part(flightType) {
    color: green;
  }
</style>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/tokens.scss -->

```scss
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/auro-classic/SCSSVariables";
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/alaska/SCSSVariables--alaska";

:host {
  --ds-auro-flight-footer-text-color: var(--ds-basic-color-texticon-muted, #{$ds-basic-color-texticon-muted});
  --ds-auro-flight-header-days-changed-text-color: var(--ds-basic-color-status-error, #{$ds-basic-color-status-error});
  --ds-auro-flight-header-text-color: var(--ds-basic-color-texticon-muted, #{$ds-basic-color-texticon-muted});
  --ds-auro-flight-cancelled-station-text-color: var(--ds-basic-color-status-error, #{$ds-basic-color-status-error});
  --ds-auro-flight-station-text-color: var(--ds-basic-color-texticon-muted, #{$ds-basic-color-texticon-muted});
  --ds-auro-flight-time-text-color: var(--ds-basic-color-texticon-default, #{$ds-basic-color-texticon-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
