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
| flights                  | flights                  |           | array  | `[]`    | Array of flight numbers.                                                                                                                                                           |
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