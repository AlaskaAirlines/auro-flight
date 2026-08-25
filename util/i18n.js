// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

/**
 * Substitutes named {placeholder} tokens in a template string with values.
 * Unknown keys produce an empty string; extra keys in values are ignored.
 * @param {string} template - e.g. "Departs from {station} at {time}"
 * @param {Object} values - e.g. { station: "S E A", time: "12:15 PM" }
 * @returns {string}
 */
export function interpolate(template, values) {
  if (!template) return "";
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}
