<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-flight

Shows one flight in a list of results, with its times, stations, stops, and duration, in a layout built to meet U.S. Department of Transportation (DoT) disclosure rules.

**Key capabilities**
- **Screen reader summary**: Always on. The element builds one announcement from the flight data, and `aria-label` replaces it.
- **Localized announcements**: Set the `i18n-*` attributes to change the announced text.
- **Reroutes**: Set `reroutedDepartureStation` or `reroutedArrivalStation` to show the new station next to the struck-through original.
- **Disclosures**: Add required legal text to the `footer` slot.

**Example**
<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 1436"]'
  duration="161"
  departureTime="2022-07-13T12:15:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-13T14:56:00-07:00"
  arrivalStation="LAX"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>

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

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 1436"]'
  duration="161"
  departureTime="2022-07-13T12:15:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-13T14:56:00-07:00"
  arrivalStation="LAX"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Departure reroute information

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

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 8"]'
  duration="330"
  departureTime="2022-07-30T07:40:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-30T16:40:00-04:00"
  arrivalStation="EWR"
  reroutedDepartureStation="PAE"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Arrival reroute information

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

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 8"]'
  duration="330"
  departureTime="2022-07-30T07:40:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-30T16:40:00-04:00"
  arrivalStation="EWR"
  reroutedArrivalStation="AVP"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Next day arrival or departure (+1 day)

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

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 880"]'
  duration="350"
  departureTime="2022-05-31T21:55:00-10:00"
  departureStation="KOA"
  arrivalTime="2022-06-01T06:45:00-07:00"
  arrivalStation="SEA"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Previous day arrival or departure (-1 day)

This example illustrates a mainline nonstop that arrives on the previous calendar day, as when a flight crosses the international date line. The header shows `-1 day`, but screen readers don't currently announce a previous-day arrival.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/arrive-one-day-before.html) -->
<!-- The below content is automatically added from ./../apiExamples/arrive-one-day-before.html -->
<auro-flight
    flights='["AS 880"]'
    duration="570"
    departureTime="2022-06-01T00:30:00+09:00"
    departureStation="NRT"
    arrivalTime="2022-05-31T18:00:00-07:00"
    arrivalStation="SEA">
<auro-flightline></auro-flightline>
</auro-flight>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/arrive-one-day-before.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/arrive-one-day-before.html -->

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 880"]'
  duration="570"
  departureTime="2022-06-01T00:30:00+09:00"
  departureStation="NRT"
  arrivalTime="2022-05-31T18:00:00-07:00"
  arrivalStation="SEA"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### One-stop flight

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

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 374"]'
  duration="120"
  departureTime="2022-05-04T01:55:00-09:00"
  departureStation="ANC"
  arrivalTime="2022-05-04T03:55:00-09:00"
  arrivalStation="ADK"
  stops='[{ "isStopover": true, "arrivalStation": "CDB"}]'&gt;
  &lt;auro-flightline&gt;
    &lt;auro-flight-segment stopover iata="CDB"&gt;&lt;/auro-flight-segment&gt;
  &lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Mainline multi-stop flight

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

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 65"]'
  duration="353"
  departureTime="2022-05-04T00:00:00-09:00"
  departureStation="KTN"
  arrivalTime="2022-05-04T05:53:00-09:00"
  arrivalStation="ANC"    
  stops='[{ "isStopover": true, "arrivalStation": "WRG"}, 
    { "isStopover": true, "arrivalStation": "PSG"}, 
    { "isStopover": true, "arrivalStation": "JNU"}]'&gt;
  &lt;auro-flightline&gt;
    &lt;auro-flight-segment stopover iata="WRG"&gt;&lt;/auro-flight-segment&gt;
    &lt;auro-flight-segment stopover iata="PSG"&gt;&lt;/auro-flight-segment&gt;
    &lt;auro-flight-segment stopover iata="JNU"&gt;&lt;/auro-flight-segment&gt;
  &lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Flight with a layover or connection

The following example illustrates a connection between two flights, with a layover in ORD for 3h 10m.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/connection.html) -->
<!-- The below content is automatically added from ./../apiExamples/connection.html -->
<auro-flight
    flights='["AS 161", "AA 2269"]'
    duration="704"
    departureTime="2022-07-21T00:55:00-08:00"
    departureStation="ANC"
    arrivalTime="2022-07-21T16:39:00-04:00"
    arrivalStation="BOS"
    stops='[{ "isStopover": false, "arrivalStation": "ORD", "duration":"3h 10m" }]'>
<auro-flightline>
<auro-flight-segment iata="ORD" duration="3h 10m"></auro-flight-segment>
</auro-flightline>
<span slot="footer">
<auro-icon category="logos" name="tail-AS" style="width: 24px"></auro-icon>
      AS161 is subject to government approval <br aria-hidden="true"/>
<auro-icon category="logos" name="tail-AA" style="width: 24px"></auro-icon>
      AA2269 is operated by American Airlines
</span>
</auro-flight>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/connection.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/connection.html -->

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 161", "AA 2269"]'
  duration="704"
  departureTime="2022-07-21T00:55:00-08:00"
  departureStation="ANC"
  arrivalTime="2022-07-21T16:39:00-04:00"
  arrivalStation="BOS"
  stops='[{ "isStopover": false, "arrivalStation": "ORD", "duration":"3h 10m" }]'&gt;
  &lt;auro-flightline&gt;
    &lt;auro-flight-segment iata="ORD" duration="3h 10m"&gt;&lt;/auro-flight-segment&gt;
  &lt;/auro-flightline&gt;
  &lt;span slot="footer"&gt;
    &lt;auro-icon category="logos" name="tail-AS" style="width: 24px"&gt;&lt;/auro-icon&gt;
    AS161 is subject to government approval &lt;br aria-hidden="true"/&gt;
    &lt;auro-icon category="logos" name="tail-AA" style="width: 24px"&gt;&lt;/auro-icon&gt;
    AA2269 is operated by American Airlines
  &lt;/span&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot examples

### Using the footer slot

Use the `footer` slot to add information to the component for a flight that requires government approval or is operated by another subsidiary or partner carrier. Notice the use of `<auro-icon>` and text within the named slot element.

This slot doesn't hide its content from screen readers, so use `aria-hidden="true"` to hide any part that repeats the flight summary.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/footer-slot.html) -->
<!-- The below content is automatically added from ./../apiExamples/footer-slot.html -->
<auro-flight
    flights='["EK 772"]'
    duration="465"
    departureTime="2022-05-04T07:50:00+04:00"
    departureStation="DXB"
    arrivalTime="2022-05-04T13:35:00+02:00"
    arrivalStation="CPT">
<auro-flightline></auro-flightline>
<span slot="footer">
<auro-icon category="logos" name="tail-EK" style="width: 24px"></auro-icon>
      EK 772 is subject to government approval <br  aria-hidden="true"/>
<auro-icon category="logos" name="tail-EK" style="width: 24px"></auro-icon>
      EK 772 is operated by Emirates
</span>
</auro-flight>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/footer-slot.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/footer-slot.html -->

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["EK 772"]'
  duration="465"
  departureTime="2022-05-04T07:50:00+04:00"
  departureStation="DXB"
  arrivalTime="2022-05-04T13:35:00+02:00"
  arrivalStation="CPT"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
  &lt;span slot="footer"&gt;
    &lt;auro-icon category="logos" name="tail-EK" style="width: 24px"&gt;&lt;/auro-icon&gt;
    EK 772 is subject to government approval &lt;br  aria-hidden="true"/&gt;
    &lt;auro-icon category="logos" name="tail-EK" style="width: 24px"&gt;&lt;/auro-icon&gt;
    EK 772 is operated by Emirates
  &lt;/span&gt;
&lt;/auro-flight&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 73"]'
  duration="100"
  departureTime="2022-05-03T22:45:00-09:00"
  departureStation="JNU"
  arrivalTime="2022-05-04T00:25:00-09:00"
  arrivalStation="CDV"&gt;
  &lt;auro-flightline&gt;
  &lt;/auro-flightline&gt;
  &lt;span slot="footer"&gt;First Class Upgrade available&lt;/span&gt;
&lt;/auro-flight&gt;</code></pre>
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
<span slot="departureHeader">Scheduled <auro-datetime type="time" value="2022-07-30T07:20:00-07:00"></auro-datetime></span>
<span slot="arrivalHeader">Scheduled <auro-datetime type="time" value="2022-07-30T17:48:00-04:00"></auro-datetime></span>
</auro-flight>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/header-slot.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/header-slot.html -->

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 8"]'
  duration="330"
  departureTime="2022-07-30T07:40:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-30T16:40:00-04:00"
  arrivalStation="EWR"
  reroutedDepartureStation="PDX"
  reroutedArrivalStation="AVP"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
  &lt;span slot="departureHeader"&gt;Scheduled &lt;auro-datetime type="time" value="2022-07-30T07:20:00-07:00"&gt;&lt;/auro-datetime&gt;&lt;/span&gt;
  &lt;span slot="arrivalHeader"&gt;Scheduled &lt;auro-datetime type="time" value="2022-07-30T17:48:00-04:00"&gt;&lt;/auro-datetime&gt;&lt;/span&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Accessibility and localization

### Localized screen reader text (`i18n-*` attributes)

The `i18n-*` attributes let you localize most of the text that screen readers announce, without changing what appears on screen. Each value is a sentence template with placeholders such as `{station}`, `{time}`, `{duration}`, `{count}`, `{origin}`, and `{destination}`. Set only the attributes that differ from English, and the rest use the English default.

The flight number prefix ("Flight", "Multiple flights") and the duration (such as `2h 41m`) are always in English. To change them, set `aria-label`.

> **Note:** `{station}`, `{origin}`, and `{destination}` are letter-spaced before substitution so screen readers say each letter, for example `SEA` becomes `S E A`. `{time}` is always formatted in US English, such as `12:15 PM`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/i18n.html) -->
<!-- The below content is automatically added from ./../apiExamples/i18n.html -->
<!--
    The i18n-* attributes localize the screen reader summary text.
    Values are sentence templates. Use {station}, {time}, {duration}, {count}, {origin}, and {destination} as placeholders.
    Only set the attributes that differ from English; unset attributes use the English default.
    The screen reader label is built from your i18n-* values, so you don't need a separate summary attribute.
  -->
<auro-flight
    flights='["AS 1436"]'
    duration="161"
    departureTime="2022-07-13T12:15:00-07:00"
    departureStation="SEA"
    arrivalTime="2022-07-13T14:56:00-07:00"
    arrivalStation="LAX"
    i18n-departure="Sale de {station} a las {time}"
    i18n-arrival="llega a {station} a las {time}"
    i18n-nonstop="sin escalas">
<auro-flightline></auro-flightline>
</auro-flight>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/i18n.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/i18n.html -->

<pre class="language-html"><code class="language-html">&lt;!--
  The i18n-* attributes localize the screen reader summary text.
  Values are sentence templates. Use {station}, {time}, {duration}, {count}, {origin}, and {destination} as placeholders.
  Only set the attributes that differ from English; unset attributes use the English default.
  The screen reader label is built from your i18n-* values, so you don't need a separate summary attribute.
--&gt;
&lt;auro-flight
  flights='["AS 1436"]'
  duration="161"
  departureTime="2022-07-13T12:15:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-13T14:56:00-07:00"
  arrivalStation="LAX"
  i18n-departure="Sale de {station} a las {time}"
  i18n-arrival="llega a {station} a las {time}"
  i18n-nonstop="sin escalas"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
Full list of `i18n-*` attributes:

| Attribute | Default (English) | Notes |
|-----------|-------------------|-------|
| `i18n-departure` | `"Departs from {station} at {time}"` | |
| `i18n-arrival` | `"arrives {station} at {time}"` | |
| `i18n-next-day` | `"next day"` | When arrival is +1 day |
| `i18n-days-later` | `"{count} days later"` | When arrival is +2 or more days |
| `i18n-nonstop` | `"nonstop"` | |
| `i18n-stopover` | `"with a stop in {station}"` | Non-last stop in a multi-stop list |
| `i18n-last-stopover` | `"and with a stop in {station}"` | Last stop in a multi-stop list |
| `i18n-layover` | `"with a layover in {station} for {duration}"` | Non-last layover with duration |
| `i18n-layover-no-duration` | `"with a layover in {station}"` | Non-last layover without duration |
| `i18n-last-layover` | `"and with a layover in {station} for {duration}"` | Last layover with duration |
| `i18n-last-layover-no-duration` | `"and with a layover in {station}"` | Last layover without duration |
| `i18n-reroute-announcement` | `"Flight {origin} to {destination} has been re-routed."` | |
| `i18n-rerouted-departure` | `"The flight now departs from {station} at {time}"` | |
| `i18n-rerouted-arrival` | `"and arrives {station} at {time}"` | |
| `i18n-canceled` | `"canceled"` | Appended to any canceled segment or nonstop canceled flight |

### Custom `aria-label`

The screen reader label for the listing is built from the `i18n-*` values you set, so you don't need a separate summary attribute. To control the wording completely, set `aria-label` to replace the built label. The element removes `aria-label` from the host after it reads the value, so `el.hasAttribute("aria-label")` returns `false`. This is expected.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label.html) -->
<!-- The below content is automatically added from ./../apiExamples/aria-label.html -->
<!--
    aria-label overrides the entire computed screen reader announcement.
    Use this when you need full control over the card entry announcement,
    for example when i18n-* attributes are insufficient for your language's grammar.
  -->
<auro-flight
    flights='["AS 1436"]'
    duration="161"
    departureTime="2022-07-13T12:15:00-07:00"
    departureStation="SEA"
    arrivalTime="2022-07-13T14:56:00-07:00"
    arrivalStation="LAX"
    aria-label="Flight AS 1436, Seattle to Los Angeles, departs 12:15 PM, arrives 2:56 PM, 2 hours 41 minutes, nonstop">
<auro-flightline></auro-flightline>
</auro-flight>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/aria-label.html -->

<pre class="language-html"><code class="language-html">&lt;!--
  aria-label overrides the entire computed screen reader announcement.
  Use this when you need full control over the card entry announcement,
  for example when i18n-* attributes are insufficient for your language's grammar.
--&gt;
&lt;auro-flight
  flights='["AS 1436"]'
  duration="161"
  departureTime="2022-07-13T12:15:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-13T14:56:00-07:00"
  arrivalStation="LAX"
  aria-label="Flight AS 1436, Seattle to Los Angeles, departs 12:15 PM, arrives 2:56 PM, 2 hours 41 minutes, nonstop"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --ds-auro-flight-footer-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flight-header-days-changed-text-color: var(--ds-basic-color-status-error, #{v.$ds-basic-color-status-error});
  --ds-auro-flight-header-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flight-cancelled-station-text-color: var(--ds-basic-color-status-error, #{v.$ds-basic-color-status-error});
  --ds-auro-flight-station-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flight-time-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
