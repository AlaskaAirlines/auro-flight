# auro-flight

Shows one flight in a list of results, with its times, stations, stops, and duration, in a layout built to meet U.S. Department of Transportation (DoT) disclosure rules.

**Key capabilities**
- **Screen reader summary**: Always on. The element builds one announcement from the flight data, and `aria-label` replaces it.
- **Localized announcements**: Set the `i18n-*` attributes to change the announced text.
- **Reroutes**: Set `reroutedDepartureStation` or `reroutedArrivalStation` to show the new station next to the struck-through original.
- **Disclosures**: Add required legal text to the `footer` slot.

**Example**
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

### Properties and attributes

| Properties                | Attributes                    | Modifiers | Type     | Default                                                | Description                                                                                                                                                                                                                                                                                              |
| ------------------------- | ----------------------------- | --------- | -------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| arrivalStation            | arrivalstation                |           | string   |                                                        | Sets the airport code of the arrival station, such as `LAX`. Screen readers read each letter separately.                                                                                                                                                                                                 |
| arrivalTime               | arrivaltime                   |           | string   |                                                        | Sets the arrival date and time in ISO 8601 format, such as `2022-04-13T12:30:00-04:00`. The day change label and the time read to screen readers use the date and time as written, without converting time zones.                                                                                        |
| departureStation          | departurestation              |           | string   |                                                        | Sets the airport code of the departure station, such as `SEA`. Screen readers read each letter separately.                                                                                                                                                                                               |
| departureTime             | departuretime                 |           | string   |                                                        | Sets the departure date and time in ISO 8601 format, such as `2022-04-13T12:30:00-04:00`. The day change label and the time read to screen readers use the date and time as written, without converting time zones.                                                                                      |
| duration                  | duration                      |           | number   |                                                        | Sets the total travel time in minutes. A value of `161` shows as `2h 41m`.                                                                                                                                                                                                                               |
| flights                   | flights                       |           | string[] | `[]`                                                   | Sets the flight numbers to show, such as `["AS 1436"]`. Shows the number for one flight, or "Multiple flights" for more than one.                                                                                                                                                                        |
| i18nArrival               | i18n-arrival                  |           | string   | `arrives {station} at {time}`                          | Sets the sentence read after the departure sentence, for the arrival station and time, when the flight isn't rerouted. Use `{station}` and `{time}` as placeholders.                                                                                                                                     |
| i18nCanceled              | i18n-canceled                 |           | string   | `canceled`                                             | Sets the text added after a canceled stop, or after the nonstop text when the `<auro-flightline>` has the `canceled` attribute.                                                                                                                                                                          |
| i18nDaysLater             | i18n-days-later               |           | string   | `{count} days later`                                   | Sets the text read when the flight arrives two or more days after it departs. Use `{count}` as the placeholder for the number of days.                                                                                                                                                                   |
| i18nDeparture             | i18n-departure                |           | string   | `Departs from {station} at {time}`                     | Sets the sentence read for the departure station and time when the flight isn't rerouted. Use `{station}` and `{time}` as placeholders.                                                                                                                                                                  |
| i18nLastLayover           | i18n-last-layover             |           | string   | `and with a layover in {station} for {duration}`       | Sets the text read for the last layover when it has a `duration`. Use `{station}` and `{duration}` as placeholders.                                                                                                                                                                                      |
| i18nLastLayoverNoDuration | i18n-last-layover-no-duration |           | string   | `and with a layover in {station}`                      | Sets the text read for the last layover when it has no `duration`. Use `{station}` as the placeholder for the airport code.                                                                                                                                                                              |
| i18nLastStopover          | i18n-last-stopover            |           | string   | `and with a stop in {station}`                         | Sets the text read for the last stopover. Use `{station}` as the placeholder for the stop's airport code.                                                                                                                                                                                                |
| i18nLayover               | i18n-layover                  |           | string   | `with a layover in {station} for {duration}`           | Sets the text read for each layover that has a `duration`, except the last. Use `{station}` and `{duration}` as placeholders.                                                                                                                                                                            |
| i18nLayoverNoDuration     | i18n-layover-no-duration      |           | string   | `with a layover in {station}`                          | Sets the text read for each layover without a `duration`, except the last. Use `{station}` as the placeholder for the airport code.                                                                                                                                                                      |
| i18nNextDay               | i18n-next-day                 |           | string   | `next day`                                             | Sets the text read when the flight arrives one day after it departs.                                                                                                                                                                                                                                     |
| i18nNonstop               | i18n-nonstop                  |           | string   | `nonstop`                                              | Sets the text read when the flight has no `stops`.                                                                                                                                                                                                                                                       |
| i18nRerouteAnnouncement   | i18n-reroute-announcement     |           | string   | `Flight {origin} to {destination} has been re-routed.` | Sets the opening sentence read when a flight is rerouted. Use `{origin}` and `{destination}` as placeholders for the original stations.                                                                                                                                                                  |
| i18nReroutedArrival       | i18n-rerouted-arrival         |           | string   | `and arrives {station} at {time}`                      | Sets the sentence read for the arrival of a rerouted flight. Use `{station}` and `{time}` as placeholders.                                                                                                                                                                                               |
| i18nReroutedDeparture     | i18n-rerouted-departure       |           | string   | `The flight now departs from {station} at {time}`      | Sets the sentence read for the departure of a rerouted flight. Use `{station}` and `{time}` as placeholders.                                                                                                                                                                                             |
| i18nStopover              | i18n-stopover                 |           | string   | `with a stop in {station}`                             | Sets the text read for each stopover except the last. Use `{station}` as the placeholder for the stop's airport code.                                                                                                                                                                                    |
| reroutedArrivalStation    | reroutedarrivalstation        |           | string   |                                                        | Sets the airport code the flight now arrives at after a reroute, such as `AVP`. Shows the new code next to the original, which is struck through.                                                                                                                                                        |
| reroutedDepartureStation  | rerouteddeparturestation      |           | string   |                                                        | Sets the airport code the flight now departs from after a reroute, such as `PDX`. Shows the new code next to the original, which is struck through.                                                                                                                                                      |
| stops                     | stops                         |           | Object[] |                                                        | Sets the stops that screen readers announce, as an array of objects with `isStopover`, `arrivalStation`, and optional `duration` and `canceled`. Stops appear on screen only when you also add an `<auro-flight-segment>` for each one. Set `isStopover` to `true` for a stop and `false` for a layover. |

### Methods

| Name     | Parameters                                                    | Return | Description                                              |
| -------- | ------------------------------------------------------------- | ------ | -------------------------------------------------------- |
| register | `name` (string) - The tag name to register the element under. |        | Registers the element with the browser under a tag name. |

### Slots

| Name            | Description                                                                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| arrivalHeader   | Text shown above the arrival time, such as a scheduled time.                                                                                                                                                                                                                                    |
| default         | The `<auro-flightline>` element that draws the timeline between the two stations. Add an `<auro-flight-segment>` inside it for each stop.                                                                                                                                                       |
| departureHeader | Text shown above the departure time, such as a scheduled time.                                                                                                                                                                                                                                  |
| footer          | Content shown below the flight, such as a government approval or operating carrier disclosure. Don't change the styles of this content, because DoT regulations set them. Screen readers read it after the flight summary, so hide any part that repeats the summary with `aria-hidden="true"`. |

### CSS shadow parts

| Name              | Description                                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| arrivalStation    | The element that shows the arrival station, and the new station after a reroute.   |
| arrivalTime       | The element that shows the arrival time.                                           |
| departureStation  | The element that shows the departure station, and the new station after a reroute. |
| departureTime     | The element that shows the departure time.                                         |
| durationContainer | The element that holds the duration and the day change label.                      |
| flightContainer   | The `<section>` element that wraps the whole flight listing.                       |
| flightType        | The element that shows the flight number, or "Multiple flights" for more than one. |

### CSS custom properties

| Name                                            | Description                                                                |
| ----------------------------------------------- | -------------------------------------------------------------------------- |
| --ds-auro-flight-footer-text-color              | Color of the text in the `footer` slot.                                    |
| --ds-auro-flight-header-days-changed-text-color | Color of the day change label, such as +1 day.                             |
| --ds-auro-flight-header-text-color              | Color of the flight numbers and duration shown above the stations.         |
| --ds-auro-flight-cancelled-station-text-color   | Color of the original station code that is struck through after a reroute. |
| --ds-auro-flight-station-text-color             | Color of the departure and arrival station codes.                          |
| --ds-auro-flight-time-text-color                | Color of the departure and arrival times.                                  |