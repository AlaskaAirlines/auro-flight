# auro-flight-header

The auro-flight-header element displays airline, duration, and day change information.

## Properties

| Property        | Attribute       | Type     | Description                                      |
|-----------------|-----------------|----------|--------------------------------------------------|
| `arrivalTime`   | `arrivalTime`   | `String` | String for the arrival ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| `departureTime` | `departureTime` | `String` | String for the departure ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| `duration`      | `duration`      | `String` | String for the duration. `505`                   |
| `flights`       | `flights`       | `Array`  | Array of flight numbers `['AS 123', 'EK 432']`   |

## CSS Shadow Parts

| Part                | Description                         |
|---------------------|-------------------------------------|
| `durationContainer` | Apply css to the duration container |
| `flightType`        | Apply css to the flight type        |


# auro-flight-main

The auro-flight-main element renders the middle 'frame' of the auro-flight component with the auro-flightline.
DoT: STATION SIZE AND COLOR MUST BE IDENTICAL TO DISCLOSURE SIZE AND COLOR!

## Properties

| Property                   | Attribute                  | Type     | Default                               | Description                                      |
|----------------------------|----------------------------|----------|---------------------------------------|--------------------------------------------------|
| `arrivalStation`           | `arrivalStation`           | `String` |                                       | Station of arrival, e.g. `SEA`                   |
| `arrivalTime`              | `arrivalTime`              | `String` |                                       | ISO 8601 time of arrival, e.g. `2022-04-13T12:30:00-04:00` |
| `departureStation`         | `departureStation`         | `String` |                                       | Station of departure, e.g. `PVD`                 |
| `departureTime`            | `departureTime`            | `String` |                                       | ISO 8601 time of departure, e.g. `2022-04-13T12:30:00-04:00` |
| `duration`                 | `duration`                 | `Number` |                                       | String for the duration. `505`                   |
| `flights`                  | `flights`                  | `Array`  |                                       | Array of flight numbers `['AS 123', 'EK 432']`   |
| `reroutedArrivalStation`   | `reroutedArrivalStation`   | `String` |                                       | Station of rerouted arrival, e.g. `AVP`          |
| `reroutedDepartureStation` | `reroutedDepartureStation` | `String` |                                       | Station of rerouted departure, e.g. `PDX`        |
| `stops`                    | `stops`                    | `Array`  |                                       | Array of objects representing stopovers or layovers: "isStopover": bool, "arrivalStation": string, "duration": string ["123hr 123m"] (layover only). This content will not be used in the UI, but only constructs the a11y conversational phrase for screen readers and has no effect on the `auro-flight-segment` content. |
| `template`                 |                            | `object` | {}                                    |                                                  |
| `timeTemplate`             |                            | `object` | {"hour":"2-digit","minute":"2-digit"} | Time template object used by convertTime() method. |

## Slots

| Name      | Description                                   |
|-----------|-----------------------------------------------|
| `default` | anticipates `<auro-flight-segment>` instances |

## CSS Shadow Parts

| Part                 | Description                                      |
|----------------------|--------------------------------------------------|
| `arrivalContainer`   | Apply css to the elements within the arrival container |
| `departureContainer` | Apply css to the elements within the departure container |
