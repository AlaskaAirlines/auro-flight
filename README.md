<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/README.md`
and copied to `./componentDocs/README.md` each time the the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use Cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Flight

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-flight>` element encapsulates Alaska's flight result logic. A departure station and an arrival station are displayed in tandem with all sectors of the flight in an [auro-flightline](https://auro.alaskaair.com/components/auro/flightline) element.

## Attributes

The `<auro-flight>` custom element's API consists of a series of attributes to be defined at the time of use. Be sure to review the [api documentation](https://auro.alaskaair.com/components/auro/flight/api) for this element.

## Dependencies

The `<auro-flight>` element has dependencies on the following additional Auro custom elements.

```
  └── @aurodesignsystem/auro-flightline
  |  ├── (internal dependency) @aurodesignsystem/auro-flight-segment
  |  └── (external dependency) @aurodesignsystem/auro-badge

  └── @aurodesignsystem/auro-flight
  |  ├── (internal dependency) @aurodesignsystem/auro-flight-header
  |  ├── (internal dependency) @aurodesignsystem/auro-flight-body
  |  └── (external dependency) @aurodesignsystem/auro-datetime
```

See [documentation](https://auro.alaskaair.com/components/auro/flightline/api) for additional information regarding the `<auro-flight-segment>` API.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./../docs/partials/readmeAddlInfo.md -->
<!-- AURO-GENERATED-CONTENT This file is to be used for any additional content that should be included in the README.md which is specific to this component. -->
<!-- AURO-GENERATED-CONTENT:END -->

## UI development browser support

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/browserSupport.md) -->
For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/componentInstall.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-flight/testPublish.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-flight/actions/workflows/testPublish.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-flight?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-flight)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-flight?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)

```shell
$ npm i @aurodesignsystem/auro-flight
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

<!-- AURO-GENERATED-CONTENT:END -->

### Design Token CSS Custom Property dependency

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/designTokens.md) -->
The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

<!-- AURO-GENERATED-CONTENT:END -->

### CSS Custom Property fallbacks

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/cssFallbacks.md) -->
[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project component

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/componentImportDescription.md) -->
Defining the component dependency within each component that is using the `<auro-flight>` component.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/componentImport.md) -->

```js
import "@aurodesignsystem/auro-flight";
```

<!-- AURO-GENERATED-CONTENT:END -->
**Reference component in HTML**
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

## Install bundled assets from CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/bundleInstallDescription.md) -->
In cases where the project is not able to process JS assets, there are pre-processed assets available for use. See -- `auro-flight__bundled.js` for modern browsers. Legacy browsers such as IE11 are no longer supported.

**WARNING!** When installing into your application environment, DO NOT use `@latest` for the requested version. Risks include unknown MAJOR version releases and instant adoption of any new features and possible bugs without developer knowledge. The `@latest` wildcard should NEVER be used for production customer-facing applications. You have been warned.

<!-- AURO-GENERATED-CONTENT:END -->

### Bundle example code

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/bundleUseModBrowsers.md) -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/design-tokens@4.3.0/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/webcorestylesheets@5.0.8/dist/bundled/essentials.css" />
<script src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-flight@2.6.5/dist/auro-flight__bundled.js" type="module"></script>
```

<!-- AURO-GENERATED-CONTENT:END -->

## auro-flight use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `<auro-flight>` element should be used in situations where users may:

* list all the available data for a flight
* list all stopovers or layovers for a flight
* list connecting flights or other important information
<!-- AURO-GENERATED-CONTENT:END -->

## API Code Examples

### Default auro-flight

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

## Development

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/developmentDescription.md) -->
In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

<!-- AURO-GENERATED-CONTENT:END -->

### Start development environment

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/localhost.md) -->
Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open a shell session to run the **dev server**.

```shell
$ npm run dev
```

Open [localhost:8000](http://localhost:8000/)

If running separate sessions is preferred, please run the following commands in individual terminal shells.

```shell
$ npm run build:watch

$ npm run serve
```

<!-- AURO-GENERATED-CONTENT:END -->

### API generation

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/api.md) -->
The custom element API file is generated in the build and committed back to the repo with a version change. If the API doc has changed without a version change, author's are to run `npm run build:api` to generate the doc and commit to version control.

<!-- AURO-GENERATED-CONTENT:END -->

### Testing

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/testing.md) -->
Automated tests are required for every Auro component. See `.\test\auro-flight.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

<!-- AURO-GENERATED-CONTENT:END -->

### Bundled assets

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/bundles.md) -->
Bundled assets are only generated in the remote and not merged back to this repo. To review and/or test a bundled asset locally, run `$ npm run bundler` to generate assets.

<!-- AURO-GENERATED-CONTENT:END -->
