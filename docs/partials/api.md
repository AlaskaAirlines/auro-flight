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

## Property & Attribute Examples

### Departure Reroute Information

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

### Arrival Reroute Information

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

## Common Usage Patterns & Functional Examples

### Next Day Arrival/Departure (+1 day)

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

### Previous Day Arrival/Departure (-1 day)

This example illustrates a mainline nonstop with a -1 day arrival or departure.
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/arrive-one-day-before.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/arrive-one-day-before.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### One-Stop Flight

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

### Mainline Multi-Stop Flight

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

### Flight with Layover/Connection

The following example illustrates a change of gauge flight with a layover in ORD for 3h 11m.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/connection.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/connection.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Slot Examples

### Using the footer slot

For a flight that requires government approval or a flight that is operated by another subsidiary or partner carrier, you can use the `footer` custom element slot to insert additional information into the scope of the component. Notice the use of `<auro-icon>` and text within the named slot element.

This slot requires the consumer to manually manage what is read back via the screen reader through the use of `aria-hidden="true"`.

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

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- Remove section if component does not have any component specific tokens -->

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->
