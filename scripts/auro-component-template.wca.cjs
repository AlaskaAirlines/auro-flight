'use strict'
module.exports = {
    getTemplatedComponentCode(code) {
    if (!code || code.includes('customElements.define')) {
      return code;
    }

    const defaultTag = code.match(/static register\(name \= (.+)\)/)[1];
    const className = code.match(/export class (.+) extends/)[1];

    if (!defaultTag || !className) {
      return code;
    }
    return `
  ${code}

  if (!customElements.get(${defaultTag})) {
    customElements.define(${defaultTag}, ${className});
  }

  `;
  },
};
