# Plan: Screen Reader Accessibility — auro-flight

## Context

Reported by Jordan Chang. Users who rely on screen readers (VoiceOver, TalkBack, NVDA, JAWS) cannot select a flight result or hear its details — departure, arrival, times, duration, or stops are never announced. This is a backward-compatible change; no visual or DoT-governed output changes.

See companion plan: `a11y-plan.md` in the `auro-flightline` repo.

---

## What already exists (don't break)

| File | What's there |
|------|-------------|
| `src/auro-flight-main.js:170–218` | `composeScreenReaderSummary()` — builds full English sentence (departure/arrival/stops) |
| `src/auro-flight-main.js:230` | `<div class="util_displayHiddenVisually">` wrapping the summary |
| `src/auro-flight-main.js:233,252,255` | `aria-hidden="true"` on visual departure, slotContainer, arrival |
| `src/auro-flight-header.js:129` | Similar hidden `<p>` with `composeScreenReaderHeader()` |
| `test/auro-flight-main.test.js` | 11 WTR tests asserting `.util_displayHiddenVisually` text content |

**DoT-protected**: All visible station/time styles — do not touch.

---

## Root causes (confirmed by TRD)

1. **Not announced coherently**: `<section part="flightContainer">` in `auro-flight.js:159` has no `role` or `aria-label`. The card is reachable via VoiceOver swipe but reads as 10+ individual fragments — no coherent summary on entry.
2. **Shadow DOM aria-hidden leakage (cross-browser risk)**: `aria-hidden="true"` on `<div class="slotContainer">` in `auro-flight-main.js:252` is confirmed effective in Chrome but untested in other browsers; slotted `<auro-flightline>` may appear in the AT tree on non-Chrome AT.

---

## Implementation plan

### Step 0 — TRD: complete ✓

- **Q1/Q2**: `role="article"` + `aria-label` is safe and required — card is reachable without it but reads as fragments; `aria-label` delivers the coherent entry announcement. No double-reading.
- **Q3/Q4**: Chrome confirms `auro-flightline` + children "Ignored" via shadow DOM `aria-hidden`. Setting `aria-hidden` on the host in `firstUpdated()` is retained as a defensive cross-browser fix.
- **Untested**: Android TalkBack, NVDA, JAWS — flag for QA before ship.

---

### Step 1 — auro-flight.js: make the card navigable and prevent double-reading

**File**: `src/auro-flight.js`

**Changes**:

1. Add `role="article"` and `aria-label` to the `<section>` in `render()` (line 159). Do **not** add `tabindex="0"`.
2. Add `ariaLabel` override prop (string) for consumers who need full localization.
3. Add `canceled` boolean prop and pass it down to `auro-flight-main`.
4. In `firstUpdated()` (line 123), mark the slotted `<auro-flightline>` as `aria-hidden` to prevent double-reading — setting it on the element itself (light DOM), not the shadow DOM slot container, ensures it is reliably hidden from AT regardless of browser shadow DOM behavior.

```js
// New props
static get properties() {
  return {
    ...existing props...
    ariaLabel: { type: String },  // consumer override for full localization
    canceled: { type: Boolean, reflect: true },
  };
}

buildAriaLabel() {
  // concise English summary: "Flight AS 1436 from SEA to PVD, departs 12:30 AM, arrives 11:55 AM, 5h 25m, nonstop"
  // Keep short — detailed summary lives in util_displayHiddenVisually
}

render() {
  return html`
    <section
      part="flightContainer"
      role="article"
      aria-label="${this.ariaLabel ?? this.buildAriaLabel()}"
    >
      ...
      <auro-flight-main
        ...
        ?canceled=${this.canceled}
      >
        <slot></slot>
      </auro-flight-main>
      ...
    </section>
  `;
}

firstUpdated() {
  // existing logic...
  // Prevent double-reading: hide the slotted flightline from AT.
  // Set on the light DOM element directly — shadow DOM aria-hidden on slotContainer
  // may not reliably propagate to slotted content across all browsers/AT.
  const flightline = this.querySelector('auro-flightline, [auro-flightline]');
  if (flightline) flightline.setAttribute('aria-hidden', 'true');
}
```

**Why no `tabindex="0"`**: No reliable JS API exists to detect if a screen reader is active. `role="article"` + `aria-label` is the correct alternative — screen readers expose `article` elements in their own landmark navigation (VoiceOver rotor, TalkBack swipe, JAWS element list) without adding a Tab stop for sighted keyboard users.

**Localization note**: `buildAriaLabel()` uses `cardSummary` / `cardSummaryMultiple` from `this._resolvedI18n` via the safe spread pattern. `ariaLabel` prop is the only absolute override; it bypasses `_resolvedI18n` entirely regardless of set order.

---

### Step 2 — auro-flight-main.js: ensure hidden summary is not suppressed

**File**: `src/auro-flight-main.js`

- Verify the `util_displayHiddenVisually` div (line 230) is not accidentally hidden by an `aria-hidden` ancestor in shadow DOM.
- Add an `id` to the hidden div for potential future `aria-describedby` hookup.
- Add `canceled` boolean prop.
- No changes to DoT-governed visible content (lines 233–273).

---

### Step 3 — Localization: i18n-* string attributes

**Attribute-only localization**: No `i18n` object prop. All localization is via individual `i18n-*` string attributes — declarative, HTML/SSR-friendly, no JavaScript required:

```html
<auro-flight i18n-departure="Sale de {station} a las {time}" i18n-nonstop="sin escalas">
```

All `i18n-*` attributes are standard LitElement `{ type: String }` properties — no custom setters, no accumulator. `auro-flight` builds a plain object at render time from whichever attributes are currently non-empty:

```js
// auro-flight.js
_buildI18n() {
  const i18n = {};
  if (this.i18nDeparture)   i18n.departure   = this.i18nDeparture;
  if (this.i18nArrival)     i18n.arrival     = this.i18nArrival;
  // ... one line per i18n-* attribute
  return i18n;
}
```

**Split defaultStrings**: `auro-flight.js` owns `cardSummary`/`cardSummaryMultiple`; `auro-flight-main.js` owns `departure`/`arrival`/etc.; `auro-flight-header.js` owns `singleFlight`/`multipleFlights`. Children spread their own defaults before the forwarded object: `{ ...ownDefaultStrings, ...this.i18n }`. Absent keys fall back to English naturally.

**Resetting to English**: remove the attribute or set it to `''` — excluded from `_buildI18n()`, child default fills in.

Values are **sentence templates with named placeholders** (`{station}`, `{time}`, `{count}`, `{duration}`, `{flightNumber}`). This allows consumers to control full word order — necessary for languages where grammar differs from English.

```js
// util/i18n.js — each repo maintains its own copy (separate repositories).
// Alternative: move interpolate() to @aurodesignsystem/auro-library.
// If the implementation changes, update both copies.
export function interpolate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
}
```

**`auro-flight-main.js`** — `composeScreenReaderSummary()` templates:

```js
const defaultStrings = {
  // Normal flight
  departure:              'Departs from {station} at {time}',
  arrival:                'arrives {station} at {time}',
  nextDay:                'next day',
  daysLater:              '{count} days later',
  nonstop:                'nonstop',
  // Stops — separate templates for middle vs. last stop in a list,
  // and for layovers with vs. without duration
  stopover:               'with a stop in {station}',
  lastStopover:           'and with a stop in {station}',
  layover:                'with a layover in {station} for {duration}',
  layoverNoDuration:      'with a layover in {station}',
  lastLayover:            'and with a layover in {station} for {duration}',
  lastLayoverNoDuration:  'and with a layover in {station}',
  canceled:               'canceled',
  // Rerouted flight
  rerouteAnnouncement:    'Flight {origin} to {destination} has been re-routed.',
  reroutedDeparture:      'The flight now departs from {station} at {time}',
  reroutedArrival:        'and arrives {station} at {time}',
};
```

**`auro-flight-header.js`** — `composeScreenReaderHeader()` templates:

```js
const defaultStrings = {
  singleFlight:     'Flight {flightNumber}, Duration: {duration}',
  multipleFlights:  'Multiple flights, Duration: {duration}',
};
```

**`auro-flight.js`** — `buildAriaLabel()` template (short card entry summary):

```js
const defaultStrings = {
  cardSummary:         'Flight {flightNumber} from {origin} to {destination}, departs {departureTime}, arrives {arrivalTime}, {duration}',
  cardSummaryMultiple: 'Multiple flights from {origin} to {destination}, departs {departureTime}, arrives {arrivalTime}, {duration}',
};
```

`buildAriaLabel()` reuses `_buildI18n()`:

```js
buildAriaLabel() {
  const t = { ...defaultStrings, ...this._buildI18n() };
  const template = this.flights.length === 1 ? t.cardSummary : t.cardSummaryMultiple;
  return interpolate(template, { flightNumber, origin, destination, departureTime, arrivalTime, duration });
}
```

**Placeholder reference** — all `{placeholders}` receive pre-processed values:

| Placeholder | Value passed | Example |
|-------------|-------------|---------|
| `{station}` | letter-spaced via `readStation()` | `"S E A"` |
| `{origin}` / `{destination}` | letter-spaced | `"S E A"` |
| `{flightNumber}` | letter-spaced via `Array.from().join(' ')` | `"A S   1 4 3 6"` |
| `{time}` | locale-formatted via `convertTime()` | `"12:15 PM"` |
| `{duration}` | formatted string | `"1h 20m"` |
| `{count}` | raw number | `2` |
| `{departureTime}` / `{arrivalTime}` | locale-formatted | `"12:15 PM"` |

**Implementation**: Update `composeScreenReaderSummary()` and `composeScreenReaderHeader()` to use `interpolate()`. For multi-stop, select the correct template key based on position (last vs. non-last) and duration presence:

```js
composeScreenReaderSummary() {
  const t = { ...defaultStrings, ...this.i18n };

  const stopTemplate = (segment, isLast) => {
    if (segment.isStopover) return isLast ? t.lastStopover : t.stopover;
    if (segment.duration)   return isLast ? t.lastLayover  : t.layover;
    return isLast ? t.lastLayoverNoDuration : t.layoverNoDuration;
  };

  const stops = this.stops?.map((segment, idx) => {
    const isLast = idx === this.stops.length - 1;
    return interpolate(stopTemplate(segment, isLast), {
      station:  readStation(segment.arrivalStation),
      duration: segment.duration ?? '',
    });
  });
  // ...
}
```

Existing WTR tests pass unchanged — default English output is identical to today.

**Known gaps (existing code, not introduced by this work):**
- Negative `dayDiff` (arriving the day before) is shown visually as `"-1 day"` but not announced in the SR summary — out of scope for this ticket.
- `stops=[]` (empty array, truthy) vs `stops=null` produces different output — add a guard test.

**Shared utilities**: `readStation()` and `convertTime()` are currently instance methods on `AuroFlightMain`. `buildAriaLabel()` in `auro-flight.js` needs them too. Move both to `util/util.js` as exported functions (alongside existing `getDateDifference`). This is a prerequisite for Step 3 and `buildAriaLabel()`.

**Call-site updates required**: After moving, all `this.readStation()` and `this.convertTime()` calls inside `auro-flight-main.js` must be updated to `readStation()` and `convertTime()` (imported from util). Search for both method names in `auro-flight-main.js` before implementation to avoid missing a call site.

**Individual `i18n-*` props on `auro-flight`**: Declare one string prop per template key with the kebab-case attribute name:

```js
// auro-flight.js static get properties()
'i18nDeparture':            { type: String, attribute: 'i18n-departure' },
'i18nArrival':              { type: String, attribute: 'i18n-arrival' },
'i18nNextDay':              { type: String, attribute: 'i18n-next-day' },
'i18nDaysLater':            { type: String, attribute: 'i18n-days-later' },
'i18nNonstop':              { type: String, attribute: 'i18n-nonstop' },
'i18nStopover':             { type: String, attribute: 'i18n-stopover' },
'i18nLastStopover':         { type: String, attribute: 'i18n-last-stopover' },
'i18nLayover':              { type: String, attribute: 'i18n-layover' },
'i18nLayoverNoDuration':    { type: String, attribute: 'i18n-layover-no-duration' },
'i18nLastLayover':          { type: String, attribute: 'i18n-last-layover' },
'i18nLastLayoverNoDuration':{ type: String, attribute: 'i18n-last-layover-no-duration' },
'i18nCanceled':             { type: String, attribute: 'i18n-canceled' },
'i18nRerouteAnnouncement':  { type: String, attribute: 'i18n-reroute-announcement' },
'i18nReroutedDeparture':    { type: String, attribute: 'i18n-rerouted-departure' },
'i18nReroutedArrival':      { type: String, attribute: 'i18n-rerouted-arrival' },
'i18nSingleFlight':         { type: String, attribute: 'i18n-single-flight' },
'i18nMultipleFlights':      { type: String, attribute: 'i18n-multiple-flights' },
'i18nCardSummary':          { type: String, attribute: 'i18n-card-summary' },
'i18nCardSummaryMultiple':  { type: String, attribute: 'i18n-card-summary-multiple' },
```

**Forward to children** (built fresh each render):

```js
render() {
  const i18n = JSON.stringify(this._buildI18n());
  return html`
    <section role="article" aria-label="${this.ariaLabel ?? this.buildAriaLabel()}">
      <auro-flight-main   i18n=${i18n} ...>
      <auro-flight-header i18n=${i18n} ...>
    </section>
  `;
}
```

**Consumer usage** (attributes only — no `i18n` object prop):

```html
<!-- English: no attributes needed -->
<auro-flight ...><auro-flightline>...</auro-flightline></auro-flight>

<!-- Localized: set only keys that differ from English -->
<auro-flight
  i18n-departure="Sale de {station} a las {time}"
  i18n-arrival="llega a {station} a las {time}"
  i18n-nonstop="sin escalas"
  i18n-card-summary="Vuelo {flightNumber} de {origin} a {destination}, {duration}"
  i18n-card-summary-multiple="Varios vuelos de {origin} a {destination}, {duration}">
  <auro-flightline i18n-stops="{count} escalas">...</auro-flightline>
</auro-flight>
```

---

### Step 4 — Fix cancellation gap in screen reader summary

`composeScreenReaderSummary()` has **zero handling for canceled flights** — cancellation is visual only today. The `i18n-canceled` attribute (Step 3) addresses this, but requires:

1. `canceled` boolean prop on `auro-flight.js` — currently absent (`auro-flightline` has it; `auro-flight` does not)
2. `canceled` passed to `auro-flight-main` via `?canceled=${this.canceled}` in `render()`
3. `canceled` prop on `auro-flight-main.js` — conditionally appends `t.canceled` from the resolved i18n strings at the end of the SR sentence

**Sentence result**: "Departs from S E A at 12:30 AM, arrives P V D at 11:55 AM, nonstop. canceled"

**Partial cancellation**: `canceled` on `auro-flight` represents the whole-flight state. Partial segment cancellation is visual only via `auro-flightline` — the SR summary does not enumerate which segments are canceled. Document this limitation.

**Migration note for consumers**: Consumers who currently pass `canceled` only to `<auro-flightline>` must also pass it to `<auro-flight>` to have cancellation announced in the SR summary. Both are needed.

---

### Step 5 — Tests: WTR unit tests

**`test/auro-flight.test.js`** — new ARIA structure tests:
- `<section>` has `role="article"`
- `<section>` has a non-empty `aria-label`
- `<section>` does NOT have `tabindex`
- `aria-label` contains departure station, arrival station, departure time, arrival time for nonstop flight
- `aria-label` reflects stop/layover info when `stops` prop is set
- `aria-label` reflects rerouted stations when reroute props are set
- Consumer-provided `ariaLabel` prop overrides `buildAriaLabel()`
- `canceled` prop on `auro-flight` is passed down to `auro-flight-main` (assert attribute on child element)
- Slotted `auro-flightline` has `aria-hidden="true"` after `firstUpdated()`

**`test/auro-flight.test.js`** — new i18n tests:
- `i18n-card-summary` attribute changes `aria-label` for single flight
- `i18n-card-summary-multiple` attribute changes `aria-label` for multiple flights
- `ariaLabel` prop overrides both `i18n-card-summary` attribute and `buildAriaLabel()` default
- Setting `i18n-card-summary=""` resets to English default (safe — spread pattern used in `buildAriaLabel()`)
- `i18n-card-summary-multiple` is used when `flights.length > 1`; `i18n-card-summary` when `flights.length === 1`
- Partial attributes (only some set) fall back to English for unset keys

**`util/i18n.test.js`** (new file) — unit tests for `interpolate()`:
- Substitutes all named placeholders correctly
- Unknown placeholder key → empty string (no crash)
- Extra values object keys not in template → ignored
- Empty template → empty string
- Template with no placeholders → returned as-is

**`test/auro-flight-main.test.js`** — new structural + i18n tests:
- `util_displayHiddenVisually` div is not `aria-hidden`
- Visual departure div has `aria-hidden="true"`
- Visual arrival div has `aria-hidden="true"`
- `slotContainer` div has `aria-hidden="true"`
- `i18n-departure` attribute changes announced departure sentence
- `i18n-arrival` attribute changes announced arrival sentence
- `i18n-nonstop` attribute changes nonstop string
- `i18n-stopover` used for non-last stop; `i18n-last-stopover` for last stop in multi-stop list
- `i18n-layover` for non-last layover with duration; `i18n-layover-no-duration` without duration
- `i18n-last-layover` / `i18n-last-layover-no-duration` for last layover
- `i18n-reroute-announcement` / `i18n-rerouted-departure` / `i18n-rerouted-arrival` override reroute sentences
- `canceled=true` appends `t.canceled`; `i18n-canceled` attribute overrides the word
- `canceled=false` (default) does NOT append cancellation string
- Setting `i18n-departure=""` resets departure to English (delete-on-falsy + spread pattern)
- Partial attributes (only some set) falls back to English for unset keys (use `await el.updateComplete` between attribute sets in tests)
- `stops=[]` (empty array) does not produce trailing punctuation (guard test)
- `stops=null` and `stops=undefined` both produce nonstop output (guard test)

**`test/auro-flight-header.test.js`** — new i18n tests:
- `i18n-single-flight` attribute changes announced single-flight header
- `i18n-multiple-flights` attribute changes announced multi-flight header

Do **not** modify existing tests that verify DoT-compliant text content.

---

## Verification checklist

- [ ] Tab key does NOT land on the flight card
- [ ] iOS VoiceOver (rotor) and Android TalkBack (swipe) reach the card and announce the `aria-label` summary
- [ ] Desktop screen readers (NVDA/JAWS) read the `util_displayHiddenVisually` summary via linear navigation
- [ ] No duplicate reading of stops from both the hidden summary and auro-flightline
- [ ] DoT-compliant visible station/time text is unchanged
- [ ] All existing WTR tests pass (`auro test`)
- [ ] New WTR ARIA-structure tests pass
- [ ] New WTR i18n attribute override tests pass
- [ ] Canceled flight announces cancellation in screen reader summary
- [ ] Partial cancellation (segment-level) does not break SR summary

---

## Files to change

| File | Change |
|------|--------|
| `util/util.js` | Move `readStation()` and `convertTime()` here from `auro-flight-main.js` so both `auro-flight.js` and `auro-flight-main.js` can import them |
| `util/i18n.js` | New file: `interpolate(template, values)` shared utility |
| `src/auro-flight.js` | Add `role="article"`, `aria-label`, `buildAriaLabel()`; add `ariaLabel` and `canceled` props; add all individual `i18n-*` string props with custom setters; `_resolvedI18n` accumulator; forward `JSON.stringify(_resolvedI18n)` to child components; mark slotted flightline `aria-hidden` in `firstUpdated()` |
| `src/auro-flight-main.js` | Add `i18n` prop; update `composeScreenReaderSummary()` to use `interpolate()` + resolved i18n; add `canceled` prop; add `id` to hidden div |
| `src/auro-flight-header.js` | Add `i18n` prop; update `composeScreenReaderHeader()` to use `interpolate()` + resolved i18n |
| `test/util/i18n.test.js` | Unit tests for `interpolate()` |
| `test/auro-flight.test.js` | ARIA structure, `aria-label` content, `canceled` propagation, `ariaLabel`/attribute tests, flightline `aria-hidden` |
| `test/auro-flight-main.test.js` | ARIA structure guards + i18n attribute tests + cancellation tests |
| `test/auro-flight-header.test.js` | i18n attribute tests for header strings |

---

## CHANGELOG / semver

New public API on `auro-flight`:
- New props: `ariaLabel` (string), `canceled` (boolean)
- New i18n attributes: `i18n-departure`, `i18n-arrival`, `i18n-nonstop`, `i18n-stopover`, `i18n-last-stopover`, `i18n-layover`, `i18n-layover-no-duration`, `i18n-last-layover`, `i18n-last-layover-no-duration`, `i18n-canceled`, `i18n-reroute-announcement`, `i18n-rerouted-departure`, `i18n-rerouted-arrival`, `i18n-next-day`, `i18n-days-later`, `i18n-single-flight`, `i18n-multiple-flights`, `i18n-card-summary`, `i18n-card-summary-multiple`
- New shared utilities: `util/i18n.js` (`interpolate`), `util/util.js` (`readStation`, `convertTime`)

**Minor version bump** — additive API, no breaking changes.

---

## Risk mitigations

- Run `await expect(el).to.be.accessible()` after every change
- Keep `aria-label` on the section short; `util_displayHiddenVisually` provides richer detail for linear navigation
- `buildAriaLabel()` English default (`cardSummary` in `auro-flight.js` `defaultStrings`) must stay consistent in wording with `departure`/`arrival` defaults in `auro-flight-main.js` `defaultStrings` — review both during implementation
- Never modify `util_lineThrough`, DoT footer styles, or visible time/station elements
- Cross-test on Safari + VoiceOver, Chrome + NVDA, and at minimum one mobile AT before merging
