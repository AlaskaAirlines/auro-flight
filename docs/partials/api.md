<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

The following example illustrates a basic flight component. It includes the use of the `flights`, `duration`, `departureTime`, `departureStation`, `arrivalTime`, and `arrivalStation` attributes.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property and attribute examples

### Departure reroute information

The following example illustrates additional data regarding departure reroute information, using the `reroutedDepartureStation` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/reroute2.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/reroute2.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Arrival reroute information

The following example illustrates additional data regarding arrival reroute information, using the `reroutedArrivalStation` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/reroute1.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/reroute1.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common usage patterns

### Next day arrival or departure (+1 day)

This example illustrates a mainline nonstop with a next day arrival or departure.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/next-day.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/next-day.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Previous day arrival or departure (-1 day)

This example illustrates a mainline nonstop that arrives on the previous calendar day, as when a flight crosses the international date line. The header shows `-1 day`, but screen readers don't currently announce a previous-day arrival.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/arrive-one-day-before.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/arrive-one-day-before.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### One-stop flight

This example illustrates a one-stop `stopover` flight. Notice the additional information required for the `auro-flight-segment` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/one-stop.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/one-stop.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Mainline multi-stop flight

The following example illustrates a mainline multi-stop `stopover` flight.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/multi-stop.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/multi-stop.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Flight with a layover or connection

The following example illustrates a connection between two flights, with a layover in ORD for 3h 10m.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/connection.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/connection.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Slot examples

### Using the footer slot

Use the `footer` slot to add information to the component for a flight that requires government approval or is operated by another subsidiary or partner carrier. Notice the use of `<auro-icon>` and text within the named slot element.

This slot doesn't hide its content from screen readers, so use `aria-hidden="true"` to hide any part that repeats the flight summary.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/footer-slot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/footer-slot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

In this example, the `footer` slot is used to alert the customer that a First Class option is available.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/footer-slot2.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/footer-slot2.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Using the departure/arrival header slots

The following example illustrates the use of the optional departure and arrival header slots to provide additional data regarding departure and arrival information.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/header-slot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/header-slot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Accessibility and localization

### Localized screen reader text (`i18n-*` attributes)

The `i18n-*` attributes let you localize most of the text that screen readers announce, without changing what appears on screen. Each value is a sentence template with placeholders such as `{station}`, `{time}`, `{duration}`, `{count}`, `{origin}`, and `{destination}`. Set only the attributes that differ from English, and the rest use the English default.

The flight number prefix ("Flight", "Multiple flights") and the duration (such as `2h 41m`) are always in English. To change them, set `aria-label`.

> **Note:** `{station}`, `{origin}`, and `{destination}` are letter-spaced before substitution so screen readers say each letter, for example `SEA` becomes `S E A`. `{time}` is always formatted in US English, such as `12:15 PM`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/i18n.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/i18n.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
