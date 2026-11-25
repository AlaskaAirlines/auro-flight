Shows one flight in a list of results, with the departure and arrival stations and times, and the flight's stops on a timeline drawn by an [auro-flightline](https://auro.alaskaair.com/components/auro/flightline) element.

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


