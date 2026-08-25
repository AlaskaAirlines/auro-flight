<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-flight

The `auro-flight` element renders a DoT compliant Flight listing.

### Properties & Attributes

| Properties                | Attributes                    | Modifiers | Type   | Default                                                | Description                                                                                                                 |
| ------------------------- | ----------------------------- | --------- | ------ | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| arrivalStation            | arrivalStation                |           | string |                                                        | String for the arrival station.                                                                                             |
| arrivalTime               | arrivalTime                   |           | string |                                                        | String for the arrival ISO 8601 time (e.g. `2022-04-13T12:30:00-04:00`).                                                    |
| departureStation          | departureStation              |           | string |                                                        | String for the departure station.                                                                                           |
| departureTime             | departureTime                 |           | string |                                                        | String for the departure ISO 8601 time (e.g. `2022-04-13T12:30:00-04:00`).                                                  |
| duration                  | duration                      |           | number |                                                        | Number that defines duration of flight in minutes.                                                                          |
| flights                   | flights                       |           | array  | `[]`                                                   | Array of flight numbers.                                                                                                    |
| i18nArrival               | i18n-arrival                  |           | string | `arrives {station} at {time}`                          | Localize arrival sentence. Template: `arrives {station} at {time}`                                                          |
| i18nCanceled              | i18n-canceled                 |           | string | `canceled`                                             | Localize canceled label. Default: `canceled`                                                                                |
| i18nDaysLater             | i18n-days-later               |           | string | `{count} days later`                                   | Localize multi-day label. Template: `{count} days later`                                                                    |
| i18nDeparture             | i18n-departure                |           | string | `Departs from {station} at {time}`                     | Localize departure sentence. Template: `Departs from {station} at {time}`                                                   |
| i18nLastLayover           | i18n-last-layover             |           | string | `and with a layover in {station} for {duration}`       | Localize layover with duration (last). Template: `and with a layover in {station} for {duration}`                           |
| i18nLastLayoverNoDuration | i18n-last-layover-no-duration |           | string | `and with a layover in {station}`                      | Localize layover without duration (last). Template: `and with a layover in {station}`                                       |
| i18nLastStopover          | i18n-last-stopover            |           | string | `and with a stop in {station}`                         | Localize stop label for last stop. Template: `and with a stop in {station}`                                                 |
| i18nLayover               | i18n-layover                  |           | string | `with a layover in {station} for {duration}`           | Localize layover with duration (non-last). Template: `with a layover in {station} for {duration}`                           |
| i18nLayoverNoDuration     | i18n-layover-no-duration      |           | string | `with a layover in {station}`                          | Localize layover without duration (non-last). Template: `with a layover in {station}`                                       |
| i18nNextDay               | i18n-next-day                 |           | string | `next day`                                             | Localize next-day label. Default: `next day`                                                                                |
| i18nNonstop               | i18n-nonstop                  |           | string | `nonstop`                                              | Localize nonstop label. Default: `nonstop`                                                                                  |
| i18nRerouteAnnouncement   | i18n-reroute-announcement     |           | string | `Flight {origin} to {destination} has been re-routed.` | Localize reroute opener. Template: `Flight {origin} to {destination} has been re-routed.`                                   |
| i18nReroutedArrival       | i18n-rerouted-arrival         |           | string | `and arrives {station} at {time}`                      | Localize rerouted arrival. Template: `and arrives {station} at {time}`                                                      |
| i18nReroutedDeparture     | i18n-rerouted-departure       |           | string | `The flight now departs from {station} at {time}`      | Localize rerouted departure. Template: `The flight now departs from {station} at {time}`                                    |
| i18nStopover              | i18n-stopover                 |           | string | `with a stop in {station}`                             | Localize stop label for non-last stop. Template: `with a stop in {station}`                                                 |
| reroutedArrivalStation    | reroutedArrivalStation        |           | string |                                                        | String for the new arrival station for rerouted flights.                                                                    |
| reroutedDepartureStation  | reroutedDepartureStation      |           | string |                                                        | String for the new departure station for rerouted flights.                                                                  |
| stops                     | stops                         |           | array  |                                                        | Array of objects representing stopovers or layovers.<br>Each object: `{ isStopover, arrivalStation, duration?, canceled? }` |

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

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 880"]'
  duration="350"
  departureTime="2022-05-31T22:55:00-10:00"
  departureStation="KOA"
  arrivalTime="2022-05-30T07:45:00-07:00"
  arrivalStation="SEA"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
&lt;/auro-flight&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["AS 161", "AA 2269"]'
  duration="704"
  departureTime="2022-07-21T00:55:00-09:00"
  departureStation="ANC"
  arrivalTime="2022-07-21T16:39:00-04:00"
  arrivalStation="BOS"
  stops='[{ "isStopover": false, "arrivalStation": "ORD", "duration":"3h 10m" }]'&gt;
  &lt;auro-flightline&gt;
    &lt;auro-flight-segment iata="ORD" duration="3h 10m"&gt;&lt;/auro-flight-segment&gt;
  &lt;/auro-flightline&gt;
  &lt;span slot="footer"&gt;
    &lt;auro-icon category="logos" name="tail-AS" style="width: 24px" aria-hidden="true"&gt;&lt;/auro-icon&gt;
    AS161 is subject to government approval &lt;br aria-hidden="true"/&gt;
    &lt;auro-icon category="logos" name="tail-AA" style="width: 24px" aria-hidden="true"&gt;&lt;/auro-icon&gt;
    AA2269 is operated by American Airlines
  &lt;/span&gt;
&lt;/auro-flight&gt;</code></pre>
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

<pre class="language-html"><code class="language-html">&lt;auro-flight
  flights='["EK 772"]'
  duration="465"
  departureTime="2022-05-04T07:50:00+04:00"
  departureStation="DXB"
  arrivalTime="2022-05-04T15:35:00+04:00"
  arrivalStation="CPT"&gt;
  &lt;auro-flightline&gt;&lt;/auro-flightline&gt;
  &lt;span slot="footer"&gt;
    &lt;auro-icon category="logos" name="tail-EK" style="width: 24px" aria-hidden="true"&gt;&lt;/auro-icon&gt;
    EK 772 is subject to government approval &lt;br  aria-hidden="true"/&gt;
    &lt;auro-icon category="logos" name="tail-EK" style="width: 24px" aria-hidden="true"&gt;&lt;/auro-icon&gt;
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
<span slot="departureHeader">Scheduled <auro-datetime type="tzTime" setDate="2022-07-30T07:20:00-07:00"></auro-datetime></span>
<span slot="arrivalHeader">Scheduled <auro-datetime type="tzTime" setDate="2022-05-04T17:48:00-04:00"></auro-datetime></span>
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
  &lt;span slot="departureHeader"&gt;Scheduled &lt;auro-datetime type="tzTime" setDate="2022-07-30T07:20:00-07:00"&gt;&lt;/auro-datetime&gt;&lt;/span&gt;
  &lt;span slot="arrivalHeader"&gt;Scheduled &lt;auro-datetime type="tzTime" setDate="2022-05-04T17:48:00-04:00"&gt;&lt;/auro-datetime&gt;&lt;/span&gt;
&lt;/auro-flight&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Accessibility & Localization

### Localized Screen Reader Text (`i18n-*` attributes)

The `i18n-*` attributes let you localize the text announced by screen readers without affecting the visual display. Values are sentence templates — use `{station}`, `{time}`, `{duration}`, `{count}`, `{origin}`, and `{destination}` as placeholders. Only set the attributes that differ from English; omitted attributes fall back to the English default.

> **Note:** Placeholders are pre-processed before substitution: `{station}`, `{origin}`, and `{destination}` are letter-spaced for correct screen reader pronunciation (e.g. `SEA` → `S E A`); `{time}` is locale-formatted (e.g. `12:15 PM`).

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/i18n.html) -->
<!-- The below content is automatically added from ./../apiExamples/i18n.html -->
<!--
    i18n-* attributes localize the screen reader summary text.
    Values are sentence templates — use {station}, {time}, {duration}, {count} as placeholders.
    Only set the keys that differ from English; unset attributes fall back to the English default.
    The card entry aria-label is automatically composed from your i18n-departure / i18n-arrival /
    i18n-nonstop values — no separate card summary attribute needed.
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
  i18n-* attributes localize the screen reader summary text.
  Values are sentence templates — use {station}, {time}, {duration}, {count} as placeholders.
  Only set the keys that differ from English; unset attributes fall back to the English default.
  The card entry aria-label is automatically composed from your i18n-departure / i18n-arrival /
  i18n-nonstop values — no separate card summary attribute needed.
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

The card entry `aria-label` is automatically composed from the `i18n-departure`, `i18n-arrival`, `i18n-nonstop`, and `i18n-canceled` values you already set — no separate card summary template needed. For cases where you need full control over the wording, use the `aria-label` attribute to override the entire computed label.

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

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
​
:host {
  --ds-auro-flight-footer-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flight-header-days-changed-text-color: var(--ds-basic-color-status-error, #{v.$ds-basic-color-status-error});
  --ds-auro-flight-header-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flight-cancelled-station-text-color: var(--ds-basic-color-status-error, #{v.$ds-basic-color-status-error});
  --ds-auro-flight-station-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-flight-time-text-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
