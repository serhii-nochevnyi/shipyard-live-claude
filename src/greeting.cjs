'use strict';

function greet(name, options) {
  const style = options == null ? undefined : options.style;
  if (style === 'formal') {
    return `Good day, ${name}.`;
  }
  return `Hello, ${name}!`;
}

module.exports = { greet };
