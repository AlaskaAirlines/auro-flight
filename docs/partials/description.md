The `<auro-flight>` element encapsulates Alaska's flight result logic. A departure station and an arrival station are displayed in tandem with all sectors of the flight in an [auro-flightline](https://auro.alaskaair.com/components/auro/flightline) element.

## DoT regulations

Department of Transportation regulations mandate that the arrival and departure cities' font size and color be identical to the operational disclosures (for instance, AA 3210 is operated by Envoy Air on behalf of American Airlines).

## Dependencies

The `<auro-flight>` element has dependencies on the following additional Auro custom elements.

```
  └── @alaskaairux/auro-flightline
  |  ├── (internal dependency) @alaskaairux/auro-flight-segment
  |  └── (external dependency) @alaskaairux/auro-badge

  └── @alaskaairux/auro-flight
  |  ├── (internal dependency) @alaskaairux/auro-flight-header
  |  └── (internal dependency) @alaskaairux/auro-flight-body
```

See [documentation](https://auro.alaskaair.com/components/auro/flightline/api) for additional information regarding the `<auro-flight-segment>` API.

## Attributes

The `<auro-flight>` custom element's API consists of a series of attributes to be defined at the time of use. Be sure to review the [api documentation](https://auro.alaskaair.com/components/auro/flight/api) for this element.

## Accessibility

The `<auro-flight>` custom element is accessible by screen readers by default. Due to the style of content within, while this is accessible, it's up to the user of the element if this information is useable and/or necessary for a screen reader experience. If this element is being used for illustrative purposes and the details of the flight are outlined in greater detail outside the scope of this element, it is recommended that the `ariaHidden` attribute be used.
