<!-- DO not edit this file -->
<!-- Demo page generated from ./docs/partials/index.md -->

# Flight

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Mainline Nonstop

This example illustrates a mainline nonstop flight from SEA to LAX

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Mainline next day arrival/departure

This example illustrates a mainline nonstop with a next day arrival or departure from KOA to SEA

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/nextDay.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/nextDay.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Mainline -1 day arrival/departure

This example illustrates a mainline nonstop with a -1 day arrival or departure from KOA to SEA

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/arriveOneDayBefore.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/arriveOneDayBefore.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Mainline one-stop

This example illustrates a one-stop `stopover` flight from ANC to ADK. Notice the additional information required for the `auro-flight-segment` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/oneStop.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/oneStop.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Mainline multi-stop

The following example illustrates a mainline multi-stop `stopover` flight from KTN to ANC.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/multiStop.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/multiStop.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Mainline + mainline connection w/layover

The following example illustrates a change of gauge flight with a layover in SEA for 1h 35m.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/connection.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/connection.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Using the footer slot

In this example for a flight that requires government approval or a flight that is operated by another subsidiary or partner carrier, you can use the `footer` custom element slot to insert additional information into the scope of the component. Notice the use of `<auro-icon>` and text within the named slot element.

This slot requires the consumer to manually manage what is read back via the screen reader through the use of `aria-hidden="true"`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/footerSlot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/footerSlot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

In this example, the `footer` slot is used to alert the customer that a First Class option is available.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/footerSlot2.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/footerSlot2.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Using the optional departure reroute information

The following example illustrates additional data regarding departure reroute information.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/reroute1.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/reroute1.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Using the optional arrival reroute information

The following example illustrates additional data regarding arrival reroute information.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/reroute2.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/reroute2.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Using the optional departure/arrival header slots

The following example illustrates additional data regarding departure and arrival information.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/headerSlot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/headerSlot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

<hr/>



## DoT regulations

Department of Transportation regulations mandate that the arrival and departure cities' font size and color be identical to the operational disclosures (for instance, AA 3210 is operated by Envoy Air on behalf of American Airlines).

## Accessibility

The `<auro-flight>` custom element is accessible by screen readers by default. Due to the style of content within, while this is accessible, it's up to the user of the element to determine if information is useable and/or necessary for a screen reader experience. If this element is being used for illustrative purposes and the details of the flight are outlined in greater detail outside the scope of this element, `aria-hidden='true'` is recommended.