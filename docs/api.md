# auro-flight

The auro-flight element renders a DoT compliant Flight listing.
This design has been tested via the Alaska Legal team for legal compliance.
Please DO NOT modify unit tests pertaining to DoT regulations.

## Properties

| Property                   | Attribute                  | Type     | Default | Description                                      |
|----------------------------|----------------------------|----------|---------|--------------------------------------------------|
| `arrivalStation`           | `arrivalStation`           | `String` |         | String for the arrival station. `PVD`            |
| `arrivalTime`              | `arrivalTime`              | `String` |         | String for the arrival ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| `departureStation`         | `departureStation`         | `String` |         | String for the departure station. `SEA`          |
| `departureTime`            | `departureTime`            | `String` |         | String for the departure ISO 8601 time. `2022-04-13T12:30:00-04:00` |
| `duration`                 | `duration`                 | `Number` |         | String for the duration. `505`                   |
| `flights`                  | `flights`                  | `Array`  | []      | Array of flight numbers `['AS 123', 'EK 432']`   |
| `reroutedArrivalStation`   | `reroutedArrivalStation`   | `String` |         | String for the new arrival station for rerouted flights. `AVP` |
| `reroutedDepartureStation` | `reroutedDepartureStation` | `String` |         | String for the new departure station for rerouted flights. `PDX` |
| `stops`                    | `stops`                    | `Array`  |         | Array of objects representing stopovers or layovers: "isStopover": bool, "arrivalStation": string, "duration": string ["123hr 123m"] (layover only). This content will not be used in the UI, but only constructs the a11y conversational phrase for screen readers and has no effect on the `auro-flight-segment` content. |

## Slots

| Name              | Description                                      |
|-------------------|--------------------------------------------------|
| `arrivalHeader`   | Text on top of the arrival station's time        |
| `default`         | anticipates `<auro-flightline>` instance to fill out the flight timeline |
| `departureHeader` | Text on top of the departure station's time      |
| `footer`          | Lower section allowing for tertiary content to be attributed to the element. Per **DoT Regulations** do NOT edit the styles contained within this slot |

## CSS Shadow Parts

| Part              | Description                                      |
|-------------------|--------------------------------------------------|
| `flightContainer` | Apply css to the elements within the flight component container |
