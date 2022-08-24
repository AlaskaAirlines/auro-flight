# auro-flight-header

auro-flight-header displays airline, duration, and day change information

## Attributes

| Attribute     | Type     | Description                                      |
|---------------|----------|--------------------------------------------------|
| `daysChanged` | `Number` | Number of days changed due to flight duration and timezone. Positive whole integer |

## Properties

| Property        | Attribute       | Type     | Description                                    |
|-----------------|-----------------|----------|------------------------------------------------|
| `arrivalTime`   | `arrivalTime`   | `string` |                                                |
| `departureTime` | `departureTime` | `string` |                                                |
| `duration`      | `duration`      | `String` | String for the duration. `1h 23m`              |
| `flights`       | `flights`       | `Array`  | Array of flight numbers `['AS 123', 'EK 432']` |

## Methods

| Method       | Type                    |
|--------------|-------------------------|
| `readFlight` | `(flight: any): string` |


# auro-flight-main

auro-flight-main renders the middle 'frame' of the auro-flight component with the auro-flightline
DoT: STATION SIZE AND COLOR MUST BE IDENTICAL TO DISCLOSURE SIZE AND COLOR!

## Properties

| Property                   | Attribute                  | Type     | Description                               |
|----------------------------|----------------------------|----------|-------------------------------------------|
| `arrivalStation`           | `arrivalStation`           | `String` | Station of arrival, e.g. `SEA`            |
| `arrivalTime`              | `arrivalTime`              | `String` | Time of arrival, e.g. `9:06 pm`           |
| `departureStation`         | `departureStation`         | `String` | Station of departure, e.g. `PVD`          |
| `departureTime`            | `departureTime`            | `String` | Time of departure, e.g. `5:36 am`         |
| `duration`                 | `duration`                 | `string` |                                           |
| `flights`                  | `flights`                  | `string` |                                           |
| `reroutedArrivalStation`   | `reroutedArrivalStation`   | `String` | Station of rerouted arrival, e.g. `AVP`   |
| `reroutedDepartureStation` | `reroutedDepartureStation` | `String` | Station of rerouted departure, e.g. `PDX` |

## Slots

| Name      | Description                                   |
|-----------|-----------------------------------------------|
| `default` | anticipates `<auro-flight-segment>` instances |


# auro-flight

auro-flight renders a DoT compliant Flight listing
This design has been tested via the Alaska Legal team for legal compliance
Please DO NOT modify unit tests pertaining to DoT regulations without contacting gus@alaskaair.com

## Properties

| Property                   | Attribute                  | Type      | Default | Description                                      |
|----------------------------|----------------------------|-----------|---------|--------------------------------------------------|
| `ariaHidden`               | `ariaHidden`               | `Boolean` | false   | When `true` element will be hidden from screen readers |
| `arrivalStation`           | `arrivalStation`           | `String`  |         | String for the arrival station. `PVD`            |
| `arrivalTime`              | `arrivalTime`              | `String`  |         | String for the arrival time. `4:05 pm`           |
| `daysChanged`              | `daysChanged`              | `number`  |         |                                                  |
| `departureStation`         | `departureStation`         | `String`  |         | String for the departure station. `SEA`          |
| `departureTime`            | `departureTime`            | `String`  |         | String for the departure time. `9:06 am`         |
| `duration`                 | `duration`                 | `Number`  |         | Number in minutes for flight duration. `83`      |
| `flights`                  | `flights`                  | `Array`   |         | Array of flight numbers `['AS 123', 'EK 432']`   |
| `reroutedArrivalStation`   | `reroutedArrivalStation`   | `String`  |         | String for the new arrival station for rerouted flights. `AVP` |
| `reroutedDepartureStation` | `reroutedDepartureStation` | `String`  |         | String for the new departure station for rerouted flights. `PDX` |

## Slots

| Name              | Description                                      |
|-------------------|--------------------------------------------------|
| `arrivalHeader`   | Text on top of the arrival station's time        |
| `default`         | anticipates `<auro-flightline>` instance to fill out the flight timeline |
| `departureHeader` | Text on top of the departure station's time      |
| `footer`          | Lower section allowing for tertiary content to be attributed to the element. Per **DoT Regulations** do NOT edit the styles contained within this slot. |