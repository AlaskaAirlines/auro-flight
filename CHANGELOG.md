# Semantic Release Automated Changelog

## [2.4.1](https://github.com/AlaskaAirlines/auro-flight/compare/v2.4.0...v2.4.1) (2023-10-30)


### Bug Fixes

* **font:** make departure/arrival time mobile font smaller [#55](https://github.com/AlaskaAirlines/auro-flight/issues/55) ([bbfd5bf](https://github.com/AlaskaAirlines/auro-flight/commit/bbfd5bfc8e4e89e15de41f58e5b058f92440bc23))

# [2.4.0](https://github.com/AlaskaAirlines/auro-flight/compare/v2.3.0...v2.4.0) (2023-08-16)


### Features

* **node18:** address updated resources [#57](https://github.com/AlaskaAirlines/auro-flight/issues/57), [#58](https://github.com/AlaskaAirlines/auro-flight/issues/58) ([9f09da1](https://github.com/AlaskaAirlines/auro-flight/commit/9f09da176fa64f2166fc5289f635eb4d4efd47fa))


### Performance Improvements

* remove legacy processes, update to Lit2.0 ([9f020c8](https://github.com/AlaskaAirlines/auro-flight/commit/9f020c82030e8564c5c076b5f07a157b04c87f33)), closes [#56](https://github.com/AlaskaAirlines/auro-flight/issues/56) [#57](https://github.com/AlaskaAirlines/auro-flight/issues/57)

# [2.3.0](https://github.com/AlaskaAirlines/auro-flight/compare/v2.2.0...v2.3.0) (2023-07-19)


### Features

* supoprt individual arrival and departure rerouts [#91](https://github.com/AlaskaAirlines/auro-flight/issues/91) ([1448823](https://github.com/AlaskaAirlines/auro-flight/commit/144882315779c9e4d0f31712f5d198b1bbf05712))

# [2.2.0](https://github.com/AlaskaAirlines/auro-flight/compare/v2.1.0...v2.2.0) (2022-12-27)


### Features

* **daycolor:** updated days changed to error on light ([4729047](https://github.com/AlaskaAirlines/auro-flight/commit/4729047cc9315e1484193eeccf00a476682b902b))

# [2.1.0](https://github.com/AlaskaAirlines/auro-flight/compare/v2.0.1...v2.1.0) (2022-09-19)


### Features

* **a11y:** natural language messaging for screen readers [#25](https://github.com/AlaskaAirlines/auro-flight/issues/25) ([3d1b0c4](https://github.com/AlaskaAirlines/auro-flight/commit/3d1b0c43246845fd3549106b1c55c9ca90963efd))

## [2.0.1](https://github.com/AlaskaAirlines/auro-flight/compare/v2.0.0...v2.0.1) (2022-06-29)


### Bug Fixes

* **deps:** update dependencies ([329293c](https://github.com/AlaskaAirlines/auro-flight/commit/329293c9ff9a0f1acd3c072be490a11122d6c54f))

# [2.0.0](https://github.com/AlaskaAirlines/auro-flight/compare/v1.2.2...v2.0.0) (2022-06-29)


### Code Refactoring

* **generator migration:** upgrade to latest generator build [#7](https://github.com/AlaskaAirlines/auro-flight/issues/7) ([5de1772](https://github.com/AlaskaAirlines/auro-flight/commit/5de1772f1ec88f185ea2900a44f14779f64028b5))


### Features

* **automate data:** add support for direct data without bff [#26](https://github.com/AlaskaAirlines/auro-flight/issues/26) [#27](https://github.com/AlaskaAirlines/auro-flight/issues/27) [#31](https://github.com/AlaskaAirlines/auro-flight/issues/31) ([f5bd86b](https://github.com/AlaskaAirlines/auro-flight/commit/f5bd86bd8b4d12df70edbb4d792f81e197e3be5d))


### BREAKING CHANGES

* **automate data:** This feature update removes the need to convert data to
a human readable string for use in the element. Users may now pass in
data directly from the flight API and the element will make the
necessary conversions. See the following API changes.

1. daysChanged is deprecated
2. duration requires number of minutes for the flight
3. departureTime and arrivalTime only require the full time stamp

Changes to be committed:
modified:   src/auro-flight-header.js
modified:   src/auro-flight-main.js
modified:   src/auro-flight.js
* **generator migration:** This PR includes a change in the npm namespace for the element.

## [1.2.2](https://github.com/AlaskaAirlines/auro-flight/compare/v1.2.1...v1.2.2) (2022-01-10)


### Bug Fixes

* **flightline:** update to latest version of dependency ([3d66bff](https://github.com/AlaskaAirlines/auro-flight/commit/3d66bffc8a84e68f2978800a71bcd2a993404bf2))

## [1.2.1](https://github.com/AlaskaAirlines/auro-flight/compare/v1.2.0...v1.2.1) (2021-06-21)


### Bug Fixes

* **padding:** update space around slotted content ([3d9fa72](https://github.com/AlaskaAirlines/auro-flight/commit/3d9fa7295c281caf2fa4715435274c08207c8379))

# [1.2.0](https://github.com/AlaskaAirlines/auro-flight/compare/v1.1.0...v1.2.0) (2021-06-09)


### Features

* **irrops:** add reroute support [#12](https://github.com/AlaskaAirlines/auro-flight/issues/12) ([db712df](https://github.com/AlaskaAirlines/auro-flight/commit/db712df8f91a119bcc9574cd27c3bd2bdddcb498))

# [1.1.0](https://github.com/AlaskaAirlines/auro-flight/compare/v1.0.1...v1.1.0) (2021-04-23)


### Features

* adds header slots ([7a9c30c](https://github.com/AlaskaAirlines/auro-flight/commit/7a9c30cea1f30d3c101f850d077c1e6cede65f56))

## [1.0.1](https://github.com/AlaskaAirlines/auro-flight/compare/v1.0.0...v1.0.1) (2021-03-05)


### Bug Fixes

* update footer styles and doc demo example ([7654865](https://github.com/AlaskaAirlines/auro-flight/commit/7654865dabeb608fe51f741470f135748c4deead))

# 1.0.0 (2021-02-12)


### Bug Fixes

* revert slot ([94b76e9](https://github.com/AlaskaAirlines/auro-flight/commit/94b76e9acbfa67a6609cecd043849a79d925bb69))


### Features

* add a11y option ([a9100da](https://github.com/AlaskaAirlines/auro-flight/commit/a9100da92dd3651b3de3421f604b2de56f92276b))
* initial commit ([9642a49](https://github.com/AlaskaAirlines/auro-flight/commit/9642a49e0bf9041d5b43c8e94ea300585e771859))
