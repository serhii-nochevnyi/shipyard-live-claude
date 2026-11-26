'use strict';

function greet(name, options) {
  return options?.style === 'formal' ? `Good day, ${name}.` : `Hello, ${name}!`;
}

module.exports = { greet };
