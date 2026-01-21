<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Flight

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-flight>` element encapsulates Alaska's flight result logic. A departure station and an arrival station are displayed in tandem with all sectors of the flight in an [auro-flightline](https://auro.alaskaair.com/components/auro/flightline) element.

## Dependencies

The `<auro-flight>` element has dependencies on the following additional Auro custom elements.

```
  └── @aurodesignsystem/auro-flightline
  |  ├── (internal dependency) @aurodesignsystem/auro-flight-segment

  └── @aurodesignsystem/auro-flight
  |  ├── (internal dependency) @aurodesignsystem/auro-flight-header
  |  ├── (internal dependency) @aurodesignsystem/auro-flight-main
  |  └── (external dependency) @aurodesignsystem/auro-datetime
```

See [documentation](https://auro.alaskaair.com/components/auro/flightline/api) for additional information regarding the `<auro-flight-segment>` API.
<!-- AURO-GENERATED-CONTENT:END -->

## Use Cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-flight>` element should be used in situations where users may:

* list all the available data for a flight
* list all stopovers or layovers for a flight
* list connecting flights or other important information
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Basic

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
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
 