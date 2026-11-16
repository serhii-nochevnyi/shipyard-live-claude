'use strict';

const assert = require('assert');
const { greet } = require('../src/greeting.cjs');

assert.strictEqual(greet('Ada'), 'Hello, Ada!');
assert.strictEqual(greet('Ada', {}), 'Hello, Ada!', 'default style without options.style');
assert.strictEqual(greet('Ada', { style: 'casual' }), 'Hello, Ada!', 'casual style');
assert.strictEqual(greet('Ada', { style: 'formal' }), 'Good day, Ada.', 'formal style');
assert.deepStrictEqual(Object.keys(require('../src/greeting.cjs')), ['greet'], 'export shape');
console.log('greeting: ok');
