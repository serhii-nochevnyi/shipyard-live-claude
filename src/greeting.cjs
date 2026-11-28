'use strict';

function greet(name, options) {
  if (options !== null && typeof options === 'object' && options.style === 'formal') {
    return `Good day, ${name}.`;
  }
  return `Hello, ${name}!`;
}

module.exports = { greet };
