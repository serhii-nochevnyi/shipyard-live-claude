'use strict';

function greet(name, options) {
  if (options !== undefined && options !== null && options.style === 'formal') {
    return `Good day, ${name}.`;
  }
  return `Hello, ${name}!`;
}

module.exports = { greet };
