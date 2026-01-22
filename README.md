<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/README.md`
and copied to `./componentDocs/README.md` each time the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use Cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Flight

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/description.md) -->
<!-- The below content is automatically added from ./docs/partials/description.md -->
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
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./docs/partials/readmeAddlInfo.md -->

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

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./docs/partials/useCases.md -->
The `<auro-flight>` element should be used in situations where users may:

* list all the available data for a flight
* list all stopovers or layovers for a flight
* list connecting flights or other important information
<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-flight/release.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-flight/actions/workflows/release.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-flight?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-flight)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-flight?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

```shell
$ npm i @aurodesignsystem/auro-flight
```

<!-- AURO-GENERATED-CONTENT:END -->

### Define Dependency in Project

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImportDescription.md) -->
Defining the dependency within each project that is using the `<auro-flight>` component.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/componentImport.md) -->

```js
import "@aurodesignsystem/auro-flight";
```

<!-- AURO-GENERATED-CONTENT:END -->

### Use CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/auro-templates/main/templates/default/partials/usage/bundleInstallDescription.md) -->
In cases where the project is not able to process JS assets, there are pre-processed assets available for use. Legacy browsers such as IE11 are no longer supported.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-flight@latest/+esm"></script>
```

<!-- AURO-GENERATED-CONTENT:END -->

## Basic Example

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/basic.html -->

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

## Custom Component Registration for Version Management

There are two key parts to every Auro component: the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element definition.
The class defines the component’s behavior, while the custom element registers it under a specific name so it can be used in HTML.

When you install the component as described on the `Install` page, the class is imported automatically, and the component is registered globally for you.

However, if you need to load multiple versions of the same component on a single page (for example, when two projects depend on different versions), you can manually register the class under a custom element name to avoid conflicts.

You can do this by importing only the component class and using the `register(name)` method with a unique name:

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./docs/partials/customRegistration.md) -->
<!-- The below content is automatically added from ./docs/partials/customRegistration.md -->

```js
// Import the class only
import { AuroFlight } from '@aurodesignsystem/auro-flight/class';

// Register with a custom name if desired
AuroFlight.register('custom-flight');
```

This will create a new custom element `<custom-flight>` that behaves exactly like `<auro-flight>`, allowing both to coexist on the same page without interfering with each other.
<!-- AURO-GENERATED-CONTENT:END -->
<div class="exampleWrapper exampleWrapper--flex">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./apiExamples/custom.html -->
  <custom-flight
    flights='["AS 1436"]'
    duration="161"
    departureTime="2022-07-13T12:15:00-07:00"
    departureStation="SEA"
    arrivalTime="2022-07-13T14:56:00-07:00"
    arrivalStation="LAX">
    <auro-flightline></auro-flightline>
  </custom-flight>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./apiExamples/custom.html -->

```html
<custom-flight
  flights='["AS 1436"]'
  duration="161"
  departureTime="2022-07-13T12:15:00-07:00"
  departureStation="SEA"
  arrivalTime="2022-07-13T14:56:00-07:00"
  arrivalStation="LAX">
  <auro-flightline></auro-flightline>
</custom-flight>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
