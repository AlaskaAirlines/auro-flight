The `<auro-flight>` element encapsulates Alaska's flight result logic. A departure station and an arrival station are displayed in tandem with all sectors of the flight in an [auro-flightline](https://auro.alaskaair.com/components/auro/flightline) element.

## Attributes

The `<auro-flight>` custom element's API consists of a series of attributes to be defined at the time of use. Be sure to review the [api documentation](https://auro.alaskaair.com/components/auro/flight/api) for this element.

## Dependencies

The `<auro-flight>` element has dependencies on the following additional Auro custom elements.

```
  └── @alaskaairux/auro-flightline
  |  ├── (internal dependency) @alaskaairux/auro-flight-segment
  |  └── (external dependency) @alaskaairux/auro-badge

  └── @alaskaairux/auro-flight
  |  ├── (internal dependency) @alaskaairux/auro-flight-header
  |  ├── (internal dependency) @alaskaairux/auro-flight-body
  |  └── (external dependency) @alaskaairux/auro-datetime
```

See [documentation](https://auro.alaskaair.com/components/auro/flightline/api) for additional information regarding the `<auro-flight-segment>` API.
