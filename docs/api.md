# auro-flight-main

auro-flight-main renders the middle 'frame' of the auro-flight component with the auro-flightline
DoT: STATION SIZE AND COLOR MUST BE IDENTICAL TO DISCLOSURE SIZE AND COLOR!

## Properties

| Property           | Attribute          | Type     | Description                    |
|--------------------|--------------------|----------|--------------------------------|
| `arrivalStation`   | `arrivalStation`   | `String` | Station of arrival, ex: SEA    |
| `arrivalTime`      | `arrivalTime`      | `String` | Time of arrival, ex: 9:06 pm   |
| `departureStation` | `departureStation` | `String` | Station of departure, ex: PVD  |
| `departureTime`    | `departureTime`    | `String` | Time of departure, ex: 5:36 am |

## Slots

| Name      | Description                                 |
|-----------|---------------------------------------------|
| `default` | anticipates <auro-flight-segment> instances |


# auro-flight-top-bar

## Properties

| Property      | Attribute     | Type     |
|---------------|---------------|----------|
| `daysChanged` | `daysChanged` | `number` |
| `duration`    | `duration`    | `string` |
| `flights`     | `flights`     | `array`  |

## Methods

| Method            | Type         | Description                                      |
|-------------------|--------------|--------------------------------------------------|
| `generateDays`    | `(): String` | Internal function to render the day change notification.<br />0 day change = null<br />1 day change = +1 Day<br />2+ day change = +N Days |
| `generateFlights` | `(): String` | Internal function to render either the flight number OR 'Multiple flights'. |


# auro-flight

auro-flight renders a DoT compliant Flight listing
This design has been tested via the Alaska Legal team for legal compliance
Please DO NOT modify unit tests pertaining to DoT regulations without contacting gus@alaskaair.com

## Properties

| Property           | Attribute          | Type     | Description                                      |
|--------------------|--------------------|----------|--------------------------------------------------|
| `arrivalStation`   | `arrivalStation`   | `String` | String for the arrival station. 'PVD'            |
| `arrivalTime`      | `arrivalTime`      | `String` | String for the arrival time. '4:05 pm'           |
| `daysChanged`      | `daysChanged`      | `Number` | Number of days changed due to flight duration and timezone. Positive whole integer |
| `departureStation` | `departureStation` | `String` | String for the departure station. 'SEA'          |
| `departureTime`    | `departureTime`    | `String` | String for the departure time. '9:06 am'         |
| `duration`         | `duration`         | `String` | String for the duration. '1h 23m'                |
| `flights`          | `flights`          | `Array`  | Array of flight numbers ['AS 123', 'EK 432']     |

## Slots

| Name      | Description                                      |
|-----------|--------------------------------------------------|
| `content` | anticipates <auro-flightline> instance to fill out the flight timeline |
| `default` | displays data under the fold. DoT DISCLOSURES MUST BE var(--auro-text-body-size-default)!! |
