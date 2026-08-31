# auro-flight

The `auro-flight` element renders a DoT compliant Flight listing.

### Properties & Attributes

| Properties                | Attributes                    | Modifiers | Type     | Default                                                | Description                                                                                                                 |
| ------------------------- | ----------------------------- | --------- | -------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| arrivalStation            | arrivalstation                |           | string   |                                                        | String for the arrival station.                                                                                             |
| arrivalTime               | arrivaltime                   |           | string   |                                                        | String for the arrival ISO 8601 time (e.g. `2022-04-13T12:30:00-04:00`).                                                    |
| departureStation          | departurestation              |           | string   |                                                        | String for the departure station.                                                                                           |
| departureTime             | departuretime                 |           | string   |                                                        | String for the departure ISO 8601 time (e.g. `2022-04-13T12:30:00-04:00`).                                                  |
| duration                  | duration                      |           | number   |                                                        | Number that defines duration of flight in minutes.                                                                          |
| flights                   | flights                       |           | array    | `[]`                                                   | Array of flight numbers.                                                                                                    |
| i18nArrival               | i18n-arrival                  |           | string   | `arrives {station} at {time}`                          | Localize arrival sentence. Template: `arrives {station} at {time}`                                                          |
| i18nCanceled              | i18n-canceled                 |           | string   | `canceled`                                             | Localize canceled label. Default: `canceled`                                                                                |
| i18nDaysLater             | i18n-days-later               |           | string   | `{count} days later`                                   | Localize multi-day label. Template: `{count} days later`                                                                    |
| i18nDeparture             | i18n-departure                |           | string   | `Departs from {station} at {time}`                     | Localize departure sentence. Template: `Departs from {station} at {time}`                                                   |
| i18nLastLayover           | i18n-last-layover             |           | string   | `and with a layover in {station} for {duration}`       | Localize layover with duration (last). Template: `and with a layover in {station} for {duration}`                           |
| i18nLastLayoverNoDuration | i18n-last-layover-no-duration |           | string   | `and with a layover in {station}`                      | Localize layover without duration (last). Template: `and with a layover in {station}`                                       |
| i18nLastStopover          | i18n-last-stopover            |           | string   | `and with a stop in {station}`                         | Localize stop label for last stop. Template: `and with a stop in {station}`                                                 |
| i18nLayover               | i18n-layover                  |           | string   | `with a layover in {station} for {duration}`           | Localize layover with duration (non-last). Template: `with a layover in {station} for {duration}`                           |
| i18nLayoverNoDuration     | i18n-layover-no-duration      |           | string   | `with a layover in {station}`                          | Localize layover without duration (non-last). Template: `with a layover in {station}`                                       |
| i18nNextDay               | i18n-next-day                 |           | string   | `next day`                                             | Localize next-day label. Default: `next day`                                                                                |
| i18nNonstop               | i18n-nonstop                  |           | string   | `nonstop`                                              | Localize nonstop label. Default: `nonstop`                                                                                  |
| i18nRerouteAnnouncement   | i18n-reroute-announcement     |           | string   | `Flight {origin} to {destination} has been re-routed.` | Localize reroute opener. Template: `Flight {origin} to {destination} has been re-routed.`                                   |
| i18nReroutedArrival       | i18n-rerouted-arrival         |           | string   | `and arrives {station} at {time}`                      | Localize rerouted arrival. Template: `and arrives {station} at {time}`                                                      |
| i18nReroutedDeparture     | i18n-rerouted-departure       |           | string   | `The flight now departs from {station} at {time}`      | Localize rerouted departure. Template: `The flight now departs from {station} at {time}`                                    |
| i18nStopover              | i18n-stopover                 |           | string   | `with a stop in {station}`                             | Localize stop label for non-last stop. Template: `with a stop in {station}`                                                 |
| reroutedArrivalStation    | reroutedarrivalstation        |           | string   |                                                        | String for the new arrival station for rerouted flights.                                                                    |
| reroutedDepartureStation  | rerouteddeparturestation      |           | string   |                                                        | String for the new departure station for rerouted flights.                                                                  |
| stops                     | stops                         |           | Object[] |                                                        | Array of objects representing stopovers or layovers.<br>Each object: `{ isStopover, arrivalStation, duration?, canceled? }` |

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